const incrementButton = document.querySelector("#increment-btn")
const incrementClickedButton = document.querySelector("#increment-btn_clicked")
const TriggeredCountButton = document.querySelector("#Triggered-count")

let clickCount = 0
let TriggeredCount = 0

// Pre Define Method -----

// // Debouncing - 
// // const debouncedCount = _.debounce(() =>{ // this is a (pre define method) debounce by lodash thats come by using there CDN 
// //     TriggeredCountButton.innerHTML = ++TriggeredCount
// // }, 800)

// // Throtteling - 
// const start = new Date().getTime()
// const throttleedCount = _.throttle(() =>{ // this is a (pre define method) throttle by lodash thats come by using there CDN 
//     const now = new Date().getTime()
//     console.log(now - start)
//     TriggeredCountButton.innerHTML = ++TriggeredCount
// }, 1000)

// incrementButton.addEventListener('click', () =>{ // click event
//     incrementClickedButton.innerHTML = ++clickCount
//     // TriggeredCountButton.innerHTML = ++TriggeredCount
//     // debouncedCount()
//     throttleedCount()
// })



// User ( OR Custom ) Define Method -----

// Debounce -
// const myDebounce = (callback, delay) =>{
//     let timer;
//     return (...args) =>{
//         if(timer) clearTimeout(timer)
//         timer = setTimeout(() =>{
//             callback(...args)
//         }, delay)
//     }
// }

// const debouncedCount = myDebounce(() =>{
//     TriggeredCount += 1
//     TriggeredCountButton.innerHTML = TriggeredCount
// }, 1000)


// Throttle -
const start = new Date().getTime();
const myThrottle = (callback, delay) =>{
    let last = 0;
    return (...args) =>{
        let now = new Date().getTime();
        if(now - last < delay) return;
        last = now
        return callback(...args)
    }
}

const throttleedCount = myThrottle(() =>{
    TriggeredCount += 1
    TriggeredCountButton.innerHTML = TriggeredCount
}, 1000)

incrementButton.addEventListener('click', () =>{ // click event
    incrementClickedButton.innerHTML = ++clickCount
    // TriggeredCountButton.innerHTML = ++TriggeredCount
    // debouncedCount()
    throttleedCount()
})