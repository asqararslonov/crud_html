async function __FetchLogin(user, password) {
    let fetchData = await fetch(
        "https://dictinary-api.vercel.app/auth/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                password: password
            })
        })
        document.cookie = ""
        // alert(await JSON.parse(await JSON.stringify(await fetchData.json())).token)
    return await JSON.parse(await JSON.stringify(await fetchData.json())).token;
}

async function __FetchReadEngUzb() {
    let fetchData = await fetch("https://dictinary-api.vercel.app/user/read/eng-uzb")

    return await fetchData.json()
}
async function __FetchCreateEngUzb(name, desc) {
    let fetchData = await fetch("https://dictinary-api.vercel.app/admin/create/eng-uzb", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("token"),
        },
        body: JSON.stringify({
            word: name,
            desc: desc
        })
    })

    return await fetchData.json()
}
async function __FetchCreateUzbEng(name, desc) {
    try {
        let fetchData = await fetch("https://dictinary-api.vercel.app/admin/create/uzb-eng", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("token"),
            },
            body: JSON.stringify({
                word: name,
                desc: desc
            })
        })
    
        return await fetchData.json()
        
    } catch(e) {
        return "Error fetching"
    }
}

async function __FetchReadUzbEng() {
    let fetchData = await fetch("https://dictinary-api.vercel.app/user/read/uzb-eng")

    return await fetchData.json()
}

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}
