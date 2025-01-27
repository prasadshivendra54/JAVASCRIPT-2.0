// console.log("hello JavaScript")

// --------------------- Statements ---------------------

// Conditional statetment (if, if else, else if, switch) --

// if --
// let num = 12
// if(num % 2 == 0){
//     console.log(num, "is even number")
// }

// if else --
// let num =
// Number(prompt("Enter the value")) // this is for brouser
// let num = 10
// if(num % 2 == 0){ // cheking number odd or even 
//     console.log(num, "is even number")
// }else{
//     console.log(num, "is odd number")
// }

// we can also write like this type of condition by using ternery operator (only in if else condition checking)
// let result = (num % 2 == 0) ?  "is even number" : "is odd number"
// console.log(num, result)



// else if --
// let num = Number(prompt("Enter the value")) // this is for brouser
// let num = 50
// if(num > 50){  
//     console.log(num, "is greter then 50")
// }else if(num == 50){
//     console.log(num, "number is equels to 50")
// }else{
//     console.log(num, "is less then 50")
// }


// switch --
// let month = 9
// switch(month){
//     case 1:
//         month = "jan"
//         break
//     case 2:
//         month = "feb"
//         break
//     case 3:
//         month = "mar"
//         break    
//     case 4:
//         month = "apr"
//         break
//     case 5:
//         month = "may"
//         break
//     case 6:
//         month = "jun"
//         break
//     case 7:
//         month = "jul"
//         break
//     case 8:
//         month = "aug"
//         break
//     case 9:
//         month = "sep"
//         break
//     case 10:
//         month = "oct"
//         break
//     case 11:
//         month = "nov"
//         break
//     case 12:
//         month = "dec"
//         break
//     default :
//         month = "Wrong Input"
// }
// console.log(month)

// or

// let bool = true
// switch (bool) {
//     case true:
//         console.log("yes")
//         break;
//     case false:
//         console.log("No")
//         break
//     default:
//         console.log("wrong input")
//         break;
// }



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


// ---------------------- Hoisting ---------------------

// var a ; // this is hoisting 
// console.log(a) // undefined
// var a = 10


// add(10, 20) // this is hoisting
// function add(a, b){
//     console.log(a + b)
// }


// subs(20, 40)
// let subs = (a, b) =>{ // hoistng does not work with callback function
//     console.log(a + b)
// }



// ----------------------- Closer ---------------------

// function fun(){
//     let a = 20
//     function fun2(){
//         console.log(a) // closer can take values form there parent function
//     }
//     fun2()
// }
// fun()



// --------------------------  Event Loops ---------------------

// console.log(20 + 22)
// setTimeout(() =>{ // setTimeout function is promise function
//     console.log("setTimeout")
// }, 0)
// console.log(10 - 5)