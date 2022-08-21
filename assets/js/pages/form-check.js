async function submitEngUzb(){
    const word  = document.querySelector("#eng-uzb-field-field").value 
    const desc  = document.querySelector(".ck-content").innerHTML
    var regex = /(<([^>]+)>)/ig
    let hasText = !!desc.replace(regex, "").length;
    console.log(hasText, word)
    if(hasText && word) {
        try{
            await __FetchCreateEngUzb(word, desc).then(
                alert("Sucessfully created"))
            }
            catch(e){
                alert("Something went wrong", e)
                console.log("Something went wrong", e)
            }
    } else {
        alert("Failed to create")
    }
}
async function submitUzbEng(){
    const word  = document.querySelector("#uzb-eng-field").value 
    const desc  = document.querySelector(".ck-content").innerHTML
    var regex = /(<([^>]+)>)/ig
    let hasText = !!desc.replace(regex, "").length;
    console.log(hasText, word)
    if(hasText && word) {
        await __FetchCreateUzbEng(word, desc).then(
            alert("Sucessfully created")
        )
    } else {
        alert("Failed to create")
    }
}