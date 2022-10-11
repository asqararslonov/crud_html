Array.from(document.querySelectorAll("form .auth-pass-inputgroup")).forEach(function(e){Array.from(e.querySelectorAll(".password-addon")).forEach(function(r){r.addEventListener("click",function(r){var o=e.querySelector(".password-input");"password"===o.type?o.type="text":o.type="password"})})});
// var passwordInput = document.querySelector(".password-input");
// var userInput = document.getElementById("username");
// var authError = document.querySelector(".auth-error");
// function showPassword() {
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//     } else {
//         passwordInput.type = "password";
//     }
// }

// async function postData() {
//     const token = await __FetchLogin(userInput.value, passwordInput.value)
//     if(token){
//     if(authError.style != "display: none"){
//         authError.style = "display: none"
//     }
//         let fetchAccess = await fetch(
//             "https://dictinary-api.vercel.app/auth/access", {
//                 method: 'POST',
//                 headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 "Authorization": "Bearer " + token
//             },
//         })  
//    const access = await JSON.parse(await JSON.stringify(await fetchAccess.json())).message;
//     if(access) {
//        document.cookie = "token" + "=" + token;
//        window.location.href  = "/admin.html";
//     } else  {
//     }
//    } else {
//     authError.style =""
//     console.log("Wrong password or username");
//    }
// }