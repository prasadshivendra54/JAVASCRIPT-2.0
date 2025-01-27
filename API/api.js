let data = async () =>{
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    return data = await data.json()
    // console.log(data)
}

let btn = document.querySelector('#show-data__id')
btn.addEventListener('click', (e) =>{
    console.log("btn clicked")
})
