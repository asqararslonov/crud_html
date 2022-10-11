async function submitEngUzb(method, id) {
    console.log(method)
    const word = document.querySelector("#uzb-eng-field").value
    const desc = document.querySelector(".ProseMirror").innerHTML
    const create = __FetchCreateEngUzb;
    const update = __FetchUpdateEngUzb;
    const remove = __FetchDeleteUzbEng;
    let meth;
    if (method == "update") {
        meth = update
        console.log(method)
    } else if (method == "delete") {
        meth = remove
        console.log(method)
    } else if (method == "create") {
        meth = create
        console.log(method)
    }
    var regex = /(<([^>]+)>)/ig
    let hasText = !!desc.replace(regex, "").length;
    console.log(hasText, word)
    if (hasText && word) {
        try {
            await meth(word, desc).then(
                alert("Sucessfully created"))
        } catch (e) {
            alert("Something went wrong", e)
            console.log("Something went wrong", e)
        }
    } else {
        alert("Failed to create")
    }
}
async function submitUzbEng(method, id) {
    const word = document.querySelector("#uzb-eng-field").value
    const desc = document.querySelector(".ProseMirror").innerHTML
    let meth;
    if (method == "update") {
        meth = update
    } else if (method == "delete") {
        meth = remove
    } else if (method == "create") {
        meth = create
    } else {
        alert("Unknown method")

    }
    var regex = /(<([^>]+)>)/ig
    let hasText = !!desc.replace(regex, "").length;
    const create = await __FetchCreateUzbEng;
    const update = await __FetchUpdateUzbEng;
    const remove = await __FetchDeleteUzbEng;
    console.log(hasText, word)
    if (hasText && word) {
        await meth(id, word, desc).then(
            alert("Sucessfully created")
        )
    } else {
        // alert("Failed to create")
    }
}

async function WordEngUzb(method, id) {
    console.log(1);
    var addBtn = document.querySelector("#add-btn");
    addBtn.innerHTML = "Add Eng-Uzb"
    // addBtn.addEventListener("click", await submitEngUzb("create"));
    console.log(addBtn)
    addBtn.onclick = () => submitEngUzb(method, id);
}
async function WordUzbEng(method) {
    console.log(1);
    var addBtn = document.querySelector("#add-btn");
    addBtn.innerHTML = "Add Eng-Uzb"
    // addBtn.addEventListener("click", await submitEngUzb("create"));
    console.log(addBtn)
    addBtn.onclick = () => submitUzbEng(method, id);
}
