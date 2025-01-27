// ---------------------- Array --------------------

// array --

// let arr = [10, 20, 30, 40, 50]
// let arrStr = ["apple", "banana", "orang", "kiwi"]
// console.log(arr + " " + arrStr)
// console.log(arr [3])
// console.log(arrStr [2])


// multidimesional array --

// let num = [10, 20, 30, 40, [11, 22, 33, 44]] // array in side another array
// console.log(num [4][2])


// array iteration --

// Method 1 -
// let num = [10, 20, 30, 40, 50]
// let len = num.length
// for(let a = 0; a < len; a++){
//     console.log(num[a])
// }

// Method 2 -
// let num = [10, 20, 30, 40, 50]
// num.forEach((value) => {
//     console.log(value)
// });

// Method 3 -
// let arr = [10, 20, 30, 40, 50]
// arr.map((val) =>{
//     console.log(val)
// })

// Method 4 -
// let arr = [10, 20, 30, 40, 50]
// arr.filter((val) =>{
//     console.log(val)
// })


// array reverse --
// let arr = [10, 20, 30, 40, 50]
// let rev = arr.reverse() // reverse array
// rev.forEach((val) =>{ // reverse iteration
//     console.log(val)
// })

// or
// let arr = [10, 20, 30, 40, 50]
// let len = arr.length
// for(let a = len - 1; a >= 0; a--){
//     console.log(arr [a])
// }


// for of, for in --

// for of - // this always work with array and string, not with object !
// let arr = [10, 20, 30, 40, 50, 60]
// for(let a of arr){ // for of used to get index value
//     console.log(a)
// }

// for in -
// let arr = [10, 20, 30, 40, 50, 60]
// for(let a in arr){ // for in used to get index number
//     console.log(a) // to get index
//     console.log(a, arr[a]) // to get index with index value
// }


// array methods --

// push() -
// let arr = [10, 20, 30, 40, 50, 60]
// arr.push(70) // Inserts new elements to the end of an array
// console.log(arr)

// unshift() -
// let arr = [10, 20, 30, 40, 50, 60]
// arr.unshift(5) //Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(arr)

// pop() -
// let arr = [10, 20, 30, 40, 50, 60]
// arr.pop() // Removes the last element from an array and returns it.
// console.log(arr)

// shift() -
// let arr = [10, 20, 30, 40, 50, 60]
// arr.shift() // Removes the first element from an array and returns it.
// console.log(arr)

// splice() -
// let arr = [10, 20, 30, 40, 50, 60]
// // arr.splice(1, 3) // Removes elements from an array and, if necessary, inserts new elements in their place.
// arr.splice(1, 0, 12)
// console.log(arr)

// slice() -
// let arr = [10, 20, 30, 40, 50, 60]
// let newArr =  arr.slice(1, 3) // Returns a copy (new array) of a section of an array. For both start and end, end index will not slice.
// console.log(newArr)

// join() -
// let str = ["hello", "everyone", "all", "good ?"]
// let arr = [10, 20, 30]
// let newStr = str.join(" ") // Adds all the elements of an array into a string, separated by the specified separator string.
// let newArr = arr.join(" ")
// console.log(newStr)
// console.log(newArr)

// toString() -
// let arr = [10, 20, 30]
// let newValue = arr.toString() // Returns a string representation of an array.
// console.log(newValue, typeof newValue)

// flat() -
// let arr = [10, 20, 30, [5, 15, 25], 40, 50, 60, [35, 45, 55]]
// let newArr = arr.flat() // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(arr)
// console.log(newArr)

// concat() -
// let arr = [10, 20, 30]
// let str = ["apple", "game", "come"]
// let newValue = str.concat(arr) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(newValue)

// sort() -
// Number sort -
// let arr = [20, 13, 80, 56, 8]
// arr.sort((a, b) =>{ // Sorts an array in place. This method mutates the array and returns a reference to the same array.
//     return a - b
// })
// console.log(arr)

// String sort -
// let str = ["color", "boy", "apple", "table", "banana"]
// str.sort() // Sorts an array in place. This method mutates the array and returns a reference to the same array.
// console.log(str)

// reverce() -
// let arr = [10, 20, 30, 40, 50, 60]
// arr.reverse() // Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
// console.log(arr)

// update array -
// let arr = [10, 20, 30, 40, 50, 60]
// arr[2] = 25 // updating value by using index number
// console.log(arr)