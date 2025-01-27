let nameInput = document.querySelector('#name_input')
let button = document.querySelector("#button")
let myname = document.querySelector('#myname')

button.addEventListener('click', () =>{
    let value = nameInput.value
    sessionStorage.setItem('name', value) // this is use to set data in Session Storage as an Key and value
    let nameValue = sessionStorage.getItem('name') // this is use to get data that stored in sessionStorage
    myname.innerText = nameValue
    // location.reload() // when will click this event page will reload 
})

// window.addEventListener('load', () =>{
//     let value = sessionStorage.getItem('name') // this is use to get data that stored in Session Storage
//     myname.innerText = value
// })