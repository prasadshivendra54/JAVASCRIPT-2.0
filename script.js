// const startButton = document.getElementById('start')
// const stopButton = document.getElementById('stop')

// let timer;
// let count = 0

// function startTime() {
//     if(timer) clearInterval(timer)
//     timer = setInterval(()=>{
//         count ++
//         console.log(count)
//     }, 1000)
//    // console.log(timer)
// }


// function clearTime() {
//     count = 0
//     if(timer) clearInterval(timer) 
// }

// function pauseTime() {
//     if(timer) clearInterval(timer) 
// }

// startButton.addEventListener('click', startTime)
// stopButton.addEventListener('click', clearTime)








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


// let arr = [10, 7, 2, 9, 65, 25]
// let newArr = arr.sort((a, b) =>{
//     return a - b
// })
// console.log(newArr)


// var a = 10
// let b = 20;
// const c = 30

// let sum = (a, b, c) =>{
//     return a + b + c
// }
// let res = sum(a, b, c)
// console.log(res)



// Deep copy and Shallo copy

// let a = {myName : "Amit"}
// let b = a // shallo copy ( with reffernce )
// b.myName = "aman"
// console.log(a)
// console.log(b)


// let a = {myName : "Amit"}
// let b = JSON.parse(JSON.stringify(a)); // deep copy ( this will not take a reffrence  )
// // const b = Object.assign({}, a); // deep copy ( this will not take a reffrence  )
// b.myName = "Aman"
// console.log(a)
// console.log(b)




// -------------

// ----------------- Array --------------------

// Loops - 

// for(let a = 1; a <= 10; a++){
//     console.log(a)
// }

// let x = 1
// while(x < 5){
//     console.log(x)
//     x++
// }


// -----

// let num = [1, 2, 3, 4, 5]

// // map() -
// let newNum = num.map((value) =>{
//     return value + 1 // stetment
// })
// console.log(newNum)

// // filter() -
// let filterValue = num.filter((val) =>{
//     return val > 3 // condition
// })
// console.log(filterValue)

// // reduce() -
// let sum = num.reduce((prev, value) =>{ // it takes 4 parameter (accumuleter, item, index, array)
//     return prev + value
// }, 0)
// console.log(sum)

// // some() -
// let check = num.some((value) =>{
//     return value > 3
// })
// console.log(check)

// // every() -
// let checkValue = num.every((value) =>{
//     return value > 5
// })
// console.log(checkValue)

// // find() -
// let checkVal = num.find((value) =>{
//     return value > 4
// })
// console.log(checkVal)



// ...Spread and ...Rest Operators ----------

// // Spread -
// let arr1 = [1, 2, 3]
// let arr2 = [...arr1] // copying the existing array
// console.log(...arr2) // Spread, All element will be expand from an array like - 1 2 3
// let str = "Amit"
// console.log(...str) // like - A m i t
// // or
// let arr3 = [4, 5, 6]
// let arr4 = [7, 8, 9]
// let arr = [...arr3, ...arr4]
// console.log(arr) // [4, 5, 6, 7, 8, 9]
// // or
// let myStr = "Shivendra"
// let copyStr = [...myStr]
// console.log(copyStr) // ['S', 'h', 'i', 'v', 'e', 'n', 'd', 'r', 'a']

// // Rest -
// const myFun = (first, second, ...restValue) =>{ // remaining values is a rest operators or rest value
//     console.log(first)
//     console.log(second)
//     console.log(restValue)
// }
// myFun(1, 2, 3, 4, 5, 6)



