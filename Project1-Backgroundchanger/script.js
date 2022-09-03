const btnGenerate = document.querySelector('#btn-color')
const ColorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let body = document.querySelector('body')
let hexColor = document.querySelector('#color-code')
function generateColorCode() {
  let hexCode = '#'
  for (let i = 0; i < 6; i++) {
    let randomcode = Math.abs(Math.floor(Math.random() * ColorCode.length - 1))

    hexCode += ColorCode[randomcode]
  }
  hexColor.textContent = hexCode
  body.style.background = `${hexCode}`
}

btnGenerate.addEventListener('click', generateColorCode)
