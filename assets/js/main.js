'use strict'

const SERVER = 'https://dictionary-blog-api.vercel.app' // 'http://localhost:4000'
const form = document.querySelector('#article-form')
const thumbnail = { url: null }


class UploadAdapter {
  constructor(loader) {
    this.loader = loader
  }


  upload() {
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        this._initRequest()
        this._initListeners(resolve, reject, file)
        this._sendRequest(file)
      }))
  }


  abort() {
    if (this.xhr) this.xhr.abort()
  }


  _initRequest() {
    const xhr = this.xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://api.imgbb.com/1/upload', true)
    xhr.responseType = 'json'
  }


  _initListeners(resolve, reject, file) {
    const xhr = this.xhr
    const loader = this.loader
    const genericErrorText = `Couldn't upload file: ${file.name}.`

    xhr.addEventListener('error', () => reject(genericErrorText))
    xhr.addEventListener('abort', () => reject())
    xhr.addEventListener('load', () => {
      const response = xhr.response

      if (!response || response.error)
        return reject(response?.error ? response.error.message : genericErrorText)

      if (!thumbnail.url) thumbnail.url = response.data.thumb.url
      resolve({ default: response.data.image.url })
    })

    if (xhr.upload)
      xhr.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          loader.uploadTotal = event.total
          loader.uploaded = event.loaded
        }
      })
  }


  _sendRequest(file) {
    const data = new FormData()

    data.append('image', file)
    data.append('key', '8aeecb1733dae9a0cb13b96cb0cbc45e')
    this.xhr.send(data)
  }
}


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


const ckEditor = () => {
  ClassicEditor
    .create(document.querySelector('#editor'))
    .then(newEditor => {
      window.ck = newEditor

      newEditor.plugins.get('FileRepository').createUploadAdapter = loader => {
        return new UploadAdapter(loader)
      }
    })
    .catch(error => {
      alert("An error occurred!")
      console.error(error)
    })
}


const addArticle = () => {
  if (!window.ck) ckEditor()

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
          body: form.body.value,
          tags: form.tags.value.split(/\s*,\s*/),
          thumbnail: thumbnail.url
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
    alert("An erro occurred!")
    console.error(error)
  }
}


const getArticles = async () => {
  const tbody = document.querySelector('#articles tbody')

  try {
    const response = await fetch(`${SERVER}/api/v1/blog`)
    const articles = await response.json()

    for (const article of articles) {
      const thumbnail = article.thumbnail ?? '/assets/images/no-img.webp'

      tbody.innerHTML += `<tr>
            <td><img src="${thumbnail}" width="75"></td>
            <td><h5>${article.title}</h5></td>
            <td><h5>${article.views}</h5></td>
            <td><h5>${new Date('2022-10-10T10:45:27.335Z').toDateString(article.createdAt)}</h5></td>
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
    // alert("An error occurred!")
    console.error(error)
  }

  new DataTable('#articles')
}


const editArticle = article => {
  form.title.value = article.title
  form.body.value = article.body
  form.tags.value = article.tags.join(',')
  thumbnail.url = article.thumbnail

  if (!window.ck) ckEditor()

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
          body: form.body.value,
          tags: form.tags.value.split(/\s*,\s*/),
          thumbnail: thumbnail.url
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
      alert("Deleted!")
      location.reload()
    } else {
      alert("An error occurred!")
    }
  } catch (error) {
    alert("An error occurred!")
    console.error(error)
  }
}
