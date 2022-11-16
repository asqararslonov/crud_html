'use strict'

const SERVER = 'https://dictinary-api.vercel.app'
// const SERVER = 'http://localhost:4000'
const form = document.querySelector('#article-form')
const thumbnail = { url: null }
let delete_urls = []


const login = async event => {
  event.preventDefault()

  const username = document.querySelector('#username').value
  const password = document.querySelector('#password-input').value

  try {
    const response = await fetch(
      `${SERVER}/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const { token } = await response.json()
      localStorage.setItem('token', token)
      location.href = '/admin.html'
    } else
      alert("Username or password incorrect!")
  } catch (error) {
    alert("An error occurred!")
  }
}


const access = async () => {
  try {
    const response = await fetch(`${SERVER}/auth/access`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })

    location.href = response.ok ? '/admin.html' : '/login.html'
  } catch (error) {
    location.href = '/login.html'
  }
}


const images_upload_handler = (blobInfo, progress) => new Promise((resolve, reject) => {
  // Init Request
  const xhr = new XMLHttpRequest()
  xhr.withCredentials = false
  xhr.open('POST', 'https://api.imgbb.com/1/upload')
  xhr.responseType = 'json'

  // Init Listeners
  xhr.upload.onprogress = e => progress(e.loaded / e.total * 100)
  xhr.onerror = () => reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status)

  xhr.onload = () => {
    if (xhr.status === 403) {
      reject({ message: 'HTTP Error: ' + xhr.status, remove: true })
      return
    }

    if (xhr.status < 200 || xhr.status >= 300) {
      reject('HTTP Error: ' + xhr.status)
      return
    }

    const { data } = xhr.response

    if (!data) {
      reject('Invalid DATA: ' + json.data)
      return
    }

    delete_urls.push(data.delete_url)
    if (!thumbnail.url) thumbnail.url = data.thumb.url

    resolve(data.image.url)
  }

  // Send Request
  const formData = new FormData()
  formData.append('image', blobInfo.blob())
  formData.append('key', '8aeecb1733dae9a0cb13b96cb0cbc45e')
  formData.append('name', Date.now().toString())
  xhr.send(formData)
})


const tinyEditor = async content => {
  try {
    window.tiny = await tinymce.init({
      selector: '#editor',
      plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
      toolbar: false,
      height: 464,
      quickbars_insert_toolbar: false,
      quickbars_selection_toolbar: 'bold italic underline strikethrough codesample | link | removeformat',
      image_advtab: true,
      images_upload_handler
    })

    if (content) tinymce.activeEditor.setContent(content)
  } catch (error) {
    console.error(error)
    alert("An error occurred!")
  }
}


const addArticle = () => {
  if (!window.tiny) tinyEditor()

  try {
    form.addEventListener('submit', async event => {
      event.preventDefault()

      const response = await fetch(`${SERVER}/api/v1/blog`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
          title: form.title.value,
          body: tinymce.activeEditor.getContent(),
          summary: tinymce.activeEditor.getContent({ format: 'text' }).replaceAll('\n', '').slice(0, 241) + '...',
          tags: form.tags.value.split(/\s*,\s*/),
          thumbnail: thumbnail.url,
          delete_urls
        })
      })

      if (response.ok) {
        alert("Created!")
        location.reload()
      } else {
        alert("An error occurred!")
      }
    })
  } catch (error) {
    alert("An error occurred!")
    console.error(error)
  }
}


const getArticles = async () => {
  const tbody = document.querySelector('#articles tbody')

  try {
    const response = await fetch(`${SERVER}/api/v1/blog/admin`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    const articles = await response.json()

    for (const article of articles) {
      const thumbnail = article.thumbnail ?? '/assets/images/no-img.webp'

      tbody.innerHTML += `<tr>
            <td><img src="${thumbnail}" width="75"></td>
            <td><h5>${article.title}</h5></td>
            <td><h5>${article.views}</h5></td>
            <td><h5>${new Date(article.createdAt).toDateString(article.createdAt)}</h5></td>
            <td><div class="d-flex gap-2">
                <div class="edit">
                    <button type="button" onclick='editArticle(${JSON.stringify(article)})' class="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#article-modal">Edit</button>
                </div>
                <div class="remove">
                    <button type="button" onclick="deleteArticle('${article._id}')" class="btn btn-sm btn-danger remove-item-btn">Delete</button>
                </div>
            </div>
            </td>
            </tr>`
    }
  } catch (error) {
    alert("An error occurred!")
    console.error(error)
  }

  new DataTable('#articles')
}


const editArticle = article => {
  form.title.value = article.title
  form.tags.value = article.tags?.join(',') ?? ''
  thumbnail.url = article.thumbnail
  delete_urls = article.delete_urls

  if (window.tiny)
    tinymce.activeEditor.setContent(article.body)
  else
    tinyEditor(article.body)

  form.addEventListener('submit', async event => {
    event.preventDefault()

    try {
      const response = await fetch(`${SERVER}/api/v1/blog/${article._id}`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
          title: form.title.value,
          body: tinymce.activeEditor.getContent(),
          summary: tinymce.activeEditor.getContent({ format: 'text' }).replaceAll('\n', '').slice(0, 241),
          tags: form.tags.value.split(/\s*,\s*/),
          thumbnail: thumbnail.url,
          delete_urls
        })
      })

      if (response.ok) {
        alert("Updated!")
        location.reload()
      } else {
        alert("An error occurred!")
      }
    } catch (error) {
      alert("An error occurred!")
      console.error(error)
    }
  })
}


const deleteArticle = async id => {
  if (!confirm('Are you sure? You want to delete this article?'))
    return

  try {
    const response = await fetch(`${SERVER}/api/v1/blog/${id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })

    if (response.ok) {
      const modalBody = document.querySelector('#urls-list')

      const deleteUrlsModal = new bootstrap.Modal('#delete-urls', {
        keyboard: false, backdrop: 'static'
      })

      const { delete_urls } = await response.json()

      for (const url of delete_urls) {
        modalBody.innerHTML += `<li><a href="${url}" target="_blank">${url}</a></</li>`
      }

      deleteUrlsModal.show()
    } else {
      alert("An error occurred!")
    }
  } catch (error) {
    alert("An error occurred!")
    console.error(error)
  }
}


const iDeletedThem = () => {
  location.reload()
}
