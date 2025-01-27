const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')

let timer;
let count = 0

function startTime() {
    if(timer) clearInterval(timer)
    timer = setInterval(()=>{
        count ++
        console.log(count)
    }, 1000)
   // console.log(timer)
}


function clearTime() {
    count = 0
    if(timer) clearInterval(timer) 
}

function pauseTime() {
    if(timer) clearInterval(timer) 
}

startButton.addEventListener('click', startTime)
stopButton.addEventListener('click', clearTime)








// console.log(window);
// console.log(document);

// console.log(localStorage);

// function setCookie(name, value, days) {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }
// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(";");
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == " ") c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }
// function eraseCookie(name) {
//   document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
// }



// const customerId = "customerId";
// const tokenKey = "token";
// const tokenValue = {
//   key: "adsfihabsdufaishf637834245y29yn5234",
//   refreshKey: "madfaiusdf98rqewrewrqwerqwherqwer",
// };

// //setCookie(tokenKey, JSON.stringify(tokenValue), 1)

// console.log(JSON.parse(getCookie(tokenKey)))


// //localStorage.setItem('customerId','10001')

// //console.log(localStorage.getItem(customerId))

// //localStorage.setItem(tokenKey, JSON.stringify(tokenValue))

// function setStorage(key, value) {}

// const getToken = localStorage.getItem(tokenKey)
//   ? JSON.parse(localStorage.getItem(tokenKey))
//   : null;
// console.log(getToken);

// localStorage.removeItem(tokenKey);

// //sessionStorage.setItem(tokenKey, JSON.stringify(tokenValue))


// // ------


