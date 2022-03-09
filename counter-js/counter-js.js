const countDisplay = document.getElementById('count-display')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')

let num = 0
countDisplay.innerText = num

increment.addEventListener('click', () => {
   num++
   countDisplay.innerText = num
})

decrement.addEventListener('click', () => {
   num--
   countDisplay.innerText = num
})

