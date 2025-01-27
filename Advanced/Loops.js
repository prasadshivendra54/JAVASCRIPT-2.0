
// --------------------- Loops ---------------------

// for loop --
// Printing Table by using for loop-
// let num = 306
// for(let n = 1; n <= 10; n++){
//     let table = num * n
//     console.log(`${num} * ${n} = ${table}`)
// }


// break & continue --

// for(let i = 1; i <= 10; i++){
//     if(i == 6){
//         break // to break our statement
//     }
//     console.log(i)
// }

// for(let i = 1; i <= 10; i++){
//     if(i == 6){
//         continue // to skip our condition 
//     }
//     console.log(i)
// }


// nested for loop --
// print ***** for 5 times patern - 
// for(let a = 1; a <= 5; a++){
//     for(let b = 1; b <= 5; b++){
//         document.write("*")
//     }
//     document.write("<br/>") // for next line
// }

// *
// **
// ***
// ****
// ***** patern -
// for(let i = 1; i <=5; i++){
//     for(let a = 1; a <= i; a++){
//         // console.log("*")
//         document.write("*") // to show in brouser 
//     }
//     // console.log("<br/>")
//     document.write("<br/>")
// }

// *****
// ****
// ***
// **
// * patern -
// for(let i = 5; i >= 1; i--){
//     for(let a = 1; a <= i; a++){
//         // console.log("*")
//         document.write("*") // to show in brouser 
//     }
//     // console.log("<br/>")
//     document.write("<br/>")
// }

// 1
// 12
// 123
// 1234
// 12345 patern -
// for(let i = 1; i <= 5; i++){
//     for(let a = 1; a <= i; a++){
//         // console.log("*")
//         document.write(a) // to show in brouser 
//     }
//     // console.log("<br/>")
//     document.write("<br/>")
// }

// 12345
// 1234
// 123
// 12
// 1 patern -
// for(let i = 5; i >= 1; i--){
//     for(let a = 1; a <= i; a++){
//         // console.log("*")
//         document.write(a) // to show in brouser 
//     }
//     // console.log("<br/>")
//     document.write("<br/>")
// }

// 1
// 22
// 333
// 4444
// 55555 patern -
// for(let i = 1; i <= 5; i++){
//     for(let a = 1; a <= i; a++){
//         // console.log("*")
//         document.write(i) // to show in brouser 
//     }
//     // console.log("<br/>")
//     document.write("<br/>")
// }

// while loop -
// let a = 1
// while (a <= 6){
//     console.log(a)
//     a++
// }

// do while -
// let a = 1
// do{ // this loop will execute one time bfere checking condition
//     console.log(a)
//     a++
// }while(a > 5)



// Event Loops --

// console.log(20 + 22)
// setTimeout(() =>{ // setTimeout function is promise function
//     console.log("setTimeout")
// }, 0)
// console.log(10 - 5)