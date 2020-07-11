const fristRange = document.querySelector('.fristRange')
const secondRange = document.querySelector('.secondRange')
const thirdRange = document.querySelector('.thirdRange')
const fristValue = document.querySelector('#fristRange')
const secondValue = document.querySelector('#secondRange')
const thirdValue = document.querySelector('#thirdRange')
const backgroundValue = document.querySelector('.container')

window.addEventListener('load', backgroundynamic())

function backgroundynamic () {
  let valueRed = 0
  let valueBlue = 0
  let valueGreen = 0

  fristRange.addEventListener('change', () => {
    fristValue.textContent = fristRange.value
    valueRed = fristRange.value
    console.log(valueRed)
  })
  secondRange.addEventListener('change', () => {
    secondValue.textContent = secondRange.value
    valueGreen = secondRange.value
    console.log(valueGreen)
  })
  thirdRange.addEventListener('change', () => {
    thirdValue.textContent = thirdRange.value
    valueBlue = thirdRange.value
    console.log(valueBlue)
  })

  backgroundValue.addEventListener('change', () => {
    backgroundValue.style.background = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`
  })
}
