async function __FetchReadEngUzb() {
    let fetchData = await fetch("https://dictinary-api.vercel.app/user/read/eng-uzb")

    return await fetchData.json()
}


async function __FetchCreateEngUzb(id, name, desc) {
    let fetchData = await fetch("https://dictinary-api.vercel.app/admin/create/eng-uzb", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
        body: JSON.stringify({
            word: name,
            desc: desc
        })
    })

    return await fetchData.json()
}
async function __FetchCreateUzbEng(id, name, desc) {
    try {
        let fetchData = await fetch("https://dictinary-api.vercel.app/admin/create/uzb-eng", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                word: name,
                desc: desc
            })
        })

        return await fetchData.json()

    } catch (e) {
        return "Error fetching"
    }
}

async function __FetchReadUzbEng() {
    let fetchData = await fetch("https://dictinary-api.vercel.app/user/read/uzb-eng")

    return await fetchData.json()
}


async function __FetchUpdateEngUzb(id, name, desc) {
    try {
        let fetchData = await fetch("https://dictinary-api.vercel.app/admin/update/eng-uzb", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                id: id,
                desc: desc
            })
        })

        return await fetchData.json()
    } catch (e) {
        throw new Error("Error fetching", e)
    }
}
async function __FetchUpdateUzbEng(id, name, desc) {
    try {
        console.log(id, name, desc)
        let fetchData = await fetch("https://dictinary-api.vercel.app/admin/update/uzb-eng", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                id: id,
                desc: desc
            })
        })

        return await fetchData.json()

    } catch (e) {
        throw new Error("Error fetching", e)
    }
}

async function __FetchDeleteEngUzb(id) {
    try {
        console.log(id)
        let fetchData = await fetch("https://dictinary-api.vercel.app/admin/delete/eng-uzb", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                id: id,
            })
        })

        return await fetchData.json()
    } catch (error) {
        return "Error"
    }
}
async function __FetchDeleteUzbEng(id) {
    try {
        let fetchData = await fetch("https://dictinary-api.vercel.app/admin/delete/uzb-eng", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                id: id,
            })
        })

        return await fetchData.json()
    } catch (error) {
        return "Error"
    }
}
async function __FetchFilterEngUzb(search) {
    let fetchData = await fetch("https://dictinary-api.vercel.app/user/filter/eng-uzb", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
        body: JSON.stringify({
            word: search
        })
    })
    return await fetchData.json()
}
async function __FetchFilterUzbEng(search) {
    let fetchData = await fetch(`https://dictinary-api.vercel.app/user/filter/uzb-eng`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
        body: JSON.stringify({
            word: search
        })
    })
    return await fetchData.json()
};

async function __FetchFindEngUzb(id) {
    let fetchData = await fetch(`https://dictinary-api.vercel.app/user/find/eng-uzb`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
        body: JSON.stringify({
            id: id
        })
    })
    return await fetchData.json()
}
async function __FetchFindUzbEng(id) {
    let fetchData = await fetch(`https://dictinary-api.vercel.app/user/find/uzb-eng`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
        body: JSON.stringify({
            id: id
        })
    })
    return await fetchData.json()
}