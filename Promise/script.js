
// Promises - 


// let x;
// // let x = 9;
// let firstPromises = new Promise((resolve, reject) =>{
//     if(x){
//         resolve(console.log("Promise Resolve"))
//     }else{
//         reject(console.log("Promise Reject"))
//     }
// })
// console.log(firstPromises)



// Event Loop - 
console.log("Start")
setTimeout(() =>{
    console.log("SettimeOUT")
}, 3000)
Promise.resolve().then(() =>{
    console.log("Promise")
})
console.log("end")
