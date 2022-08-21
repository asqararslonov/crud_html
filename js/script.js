// function includeHTML(filename) {
//     var z, i, elmnt, file, xhttp;
//     /*loop through a collection of all HTML elements:*/
//     z = document.getElementsByTagName("*");
//     for (i = 0; i < z.length; i++) {
//       elmnt = z[i];
//       /*search for elements with a certain attribute:*/
//       file = elmnt.getAttribute(filename);
//       if (file) {
//         /*make an HTTP request using the attribute value as the file name:*/
//         xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4) {
//             if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//             if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//             /*remove the attribute, and call this function once more:*/
//             elmnt.removeAttribute(filename);
//             includeHTML();
//           }
//         }      
//         xhttp.open("GET", file, true);
//         xhttp.send();
//         /*exit the function:*/
//         return;
//       }
//     }
//   };
//   includeHTML("w3-login-html")
function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}
function redirect() {
  if(getCookie("token")){
    window.location.href = "/admin.html";
  } else {
    window.location.href = "/login.html";
  }
}
redirect()
console.log("Hello")