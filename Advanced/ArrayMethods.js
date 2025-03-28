// Array Methods - 

// -----

let num = [1, 2, 3, 4, 5]

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



// ...spred and ...rest Operators -

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr = [...arr1, ...arr2]
console.log(arr)