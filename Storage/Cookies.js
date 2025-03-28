// document.cookie = "name=shivendra"
// document.cookie = "name1=Abhishek" // this will add in cookie
// document.cookie = "name2=A" // this will add in cookie
// console.log(document.cookie)

// key & value - 
// let key = prompt("Enter Your Key..")
// let value = prompt("Enter Your Value..")
// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
// console.log(document.cookie)

// Expires - Format - [Day [Mon] Date [10] Month [Jan] Year [2025] Time [12:00:00] UTC [Country standerd time UTC]]
document.cookie = `name = shivendra; expires = Thu 30 Jan 2025 12:00:00 UTC`
document.cookie = `age = 23; expires = Thu 30 Jan 2025 12:00:00 UTC`
document.cookie = `name = rahul; expires = Fri 31 Jan 2025 12:00:00 UTC` // to change value
// document.cookie = `name = rahul; expires = Mon 27 Jan 2025 12:00:00 UTC` // to delete cookie JUST GIVE EXPIRES TIME OF Past Time
document.cookie = `name = shivendra, aman; expires = Fri 31 Jan 2025 12:00:00 UTC` // to update value

let showCookie = document.cookie // to read or see cookies
console.log(showCookie)