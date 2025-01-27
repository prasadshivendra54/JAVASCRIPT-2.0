// ------------------------ Functions --------------------------

// User define function --

// Normal function -
// function add(a, b){
//     console.log(a + b)
// }
// add(10, 20)

// Anonymas function -
// let add = function (a, b){
//     console.log(a + b)
// }
// add(10, 30) 

// Immediately Invoked Function -
// (function (a, b){
//     console.log(a + b)
// })(10, 22)

// Arrow function -
// let add = (a, b) =>{
//     console.log(a + b)
// }
// add(1, 20)


// Pre define function --

// forEach() -
// let arr = [10, 20, 30, 40, 50]
// arr.forEach((val) =>{ // Performs the specified action for each element in an array.
//     console.log(val + 1)
// })
// console.log(arr)

// filter() -
// let arr = [10, 20, 30, 40, 50]
// let newArr = arr.filter((val) =>{ // Returns the elements of an array that meet the condition specified in a callback function.
//     if(val >= 30){
//         return val
//     }
// })
// console.log(newArr)
// console.log(arr)

// map() -
// let arr = [10, 20, 30, 40, 50]
// let newArr = arr.map((val) =>{ // Calls a defined callback function on each element of an array, and returns an array that contains the results.
//     return val + 5
// })
// console.log(newArr)
// console.log(arr)

// reduce() -
// let arr = [10, 20, 30, 40, 50]
// let newNum = arr.reduce((val, index) =>{ // Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
//     return val + index
// })
// console.log(newNum)
// console.log(arr)

