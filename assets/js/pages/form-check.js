async function submitEngUzb(method, id) {
    const word = document.querySelector("#uzb-eng-field").value
    const desc = document.querySelector(".ProseMirror").innerHTML;
    const create = __FetchCreateEngUzb;
    const update = __FetchUpdateEngUzb;
    const remove = __FetchDeleteEngUzb;

    let meth;
    if (method == "edit") {
        meth = update
        console.log(method)
    } else if (method == "delete") {
        meth = remove
        console.log(method)
    } else if (method == "create") {
        meth = create
        console.log(method)
    } else {
        alert("Unknown method")
    }
    var regex = /(<([^>]+)>)/ig
    let hasText = !!desc.replace(regex, "").length;
    console.log(hasText, word)
    if (method == "delete") {

        console.log("id:", id)
        await meth(id, word, desc).then(
            alert("Sucessfully created"))

    } else {
        if (hasText && word) {
            try {
                console.log("id:", id)
                console.log(1, meth)
                await meth(id, word, desc).then(
                    alert("Sucessfully created"))
            } catch (e) {
                alert("Something went wrong", e)
                console.log("Something went wrong", e)
            }
        } else {
            alert("Failed to create")
        }
    }
}
async function submitUzbEng(method, id) {
    const word = document.querySelector("#uzb-eng-field").value
    const desc = document.querySelector(".ProseMirror").innerHTML
    const create = await __FetchCreateUzbEng;
    const update = await __FetchUpdateUzbEng;
    const remove = await __FetchDeleteUzbEng;
    let meth;
    if (method == "edit") {
        meth = update
        console.log(method)
    } else if (method == "delete") {
        meth = remove
        console.log(method)
    } else if (method == "create") {
        meth = create
        console.log(method)
    } else {
        alert("Unknown method")
    }
    var regex = /(<([^>]+)>)/ig
    let hasText = !!desc.replace(regex, "").length;
    console.log(hasText, word)
    console.log("LP", method)
    if (method == "delete") {

        console.log("id:", id)
        await meth(id, word, desc).then(
            alert("Sucessfully created"))

    } else {
        if (hasText && word) {
            try {
                console.log("id:", id)
                console.log(1, meth)
                await meth(id, word, desc).then(
                    alert("Sucessfully created"))
            } catch (e) {
                alert("Something went wrong", e)
                console.log("Something went wrong", e)
            }
        } else {
            alert("Failed to create")
        }
    }
}
async function WordEngUzb(method, id) {

    if (method == "delete") {
        const deleteModalBtn = document.querySelector("#delete-record")
        deleteModalBtn.onclick = () => submitEngUzb(method, id)
    } else {
        console.log(id, method)
        if (method == "edit") {
            const word = document.querySelector("#uzb-eng-field")
            let desc = document.querySelector(".ProseMirror")
            const fetchFind = await __FetchFindEngUzb(id)
            console.log(0, id)
            console.log(fetchFind.data["desc"])
            word.value = await fetchFind.data["word"]
            desc.innerHTML = fetchFind.data["desc"]
        }
        console.log(1);
        var addBtn = document.querySelector("#add-btn");
        addBtn.innerHTML = "Add Eng-Uzb"
        // addBtn.addEventListener("click", await submitEngUzb("create"));
        console.log(addBtn)
        addBtn.onclick = () => submitEngUzb(method, id);
    }
}
async function WordUzbEng(method, id) {
    console.log(method, method, method, id)
    if (method == "delete") {
        const deleteModalBtn = document.querySelector("#delete-record")
        deleteModalBtn.onclick = () => submitUzbEng(method, id)
    } else {
        if (method == "edit") {
            const word = document.querySelector("#uzb-eng-field")
            let desc = document.querySelector(".ProseMirror")
            const fetchFind = await __FetchFindUzbEng(id)
            console.log(0, id)
            console.log(fetchFind.data["desc"])
            word.value = await fetchFind.data["word"]
            desc.innerHTML = fetchFind.data["desc"]
        }
        console.log(1);
        var addBtn = document.querySelector("#add-btn");
        addBtn.innerHTML = "Add Uzb-Eng"
        // addBtn.addEventListener("click", await submitEngUzb("create"));
        console.log(addBtn)
        addBtn.onclick = () => submitUzbEng(method, id);
    }
}


async function searchEngUzb() {
    const search = document.querySelector(".search-eng-uzb").value
    const tbody = document.querySelector(".tbody-eng-uzb")
    if (search) {
        const data1 = await __FetchFilterEngUzb(search);
        data1.length = 30;
        const result = []
        data1.data.forEach((i) => {
            console.log(i)
            result.push(`<tr>
    <th scope="row">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
        </div>
    </th>
    <td class="id" style="display:none;"><a href="javascript:void(0);" class="fw-medium link-primary">${i["_id"]}</a></td>
    <td class="customer_name">${i["word"]}</td>
    <td class="customer_name">${i["transc"]}</td>
    <td class="phone">${i["desc"]}</td>
    <td>
        <div class="d-flex gap-2">
            <div class="edit">
                <button onclick="WordEngUzb('edit', '${i["_id"]}')" class="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
            </div>
            <div class="remove">
                <button onclick="WordEngUzb('delete', '${i["_id"]}')"class="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
            </div>
        </div>
    </td>
</tr>`)
        })
        tbody.innerHTML = result.join("")
    } else {
        readEngUzb()
    }
}
async function searchUzbEng() {
    const search = document.querySelector(".search-uzb-eng").value
    const tbody = document.querySelector(".tbody-uzb-eng")
    if (search) {
        const data1 = await __FetchFilterUzbEng(search);
        data1.length = 30;
        const result = []
        data1.data.forEach((i) => {
            console.log(i)
            result.push(`<tr>
    <th scope="row">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
        </div>
    </th>
    <td class="id" style="display:none;"><a href="javascript:void(0);" class="fw-medium link-primary">${i["_id"]}</a></td>
    <td class="customer_name">${i["word"]}</td>
    <td class="phone">${i["desc"]}</td>
    <td>
        <div class="d-flex gap-2">
            <div class="edit">
                <button onclick="WordUzbEng('edit', '${i["_id"]}')" class="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
            </div>
            <div class="remove">
                <button onclick="WordUzbEng('delete', '${i["_id"]}')"class="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
            </div>
        </div>
    </td>
</tr>`)
        })
        tbody.innerHTML = result.join("")
    } else {
        readUzbEng()
    }
}