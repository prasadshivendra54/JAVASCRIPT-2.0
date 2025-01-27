let nameInput = document.querySelector('#name_input')
let button = document.querySelector("#button")
let myname = document.querySelector('#myname')

button.addEventListener('click', () =>{
    let value = nameInput.value
    localStorage.setItem('name', value) // this is use to set data in localStorage as an Key and value
    // let nameValue = localStorage.getItem('name') // this is use to get data that stored in localstorage
    // myname.innerText = nameValue
    location.reload() // when will click this event page will reload 
})

window.addEventListener('load', () =>{
    let value = localStorage.getItem('name') // this is use to get data that stored in localstorage
    myname.innerText = value
})