export const clickCellHandler = function (cell) {
  if (cell.classList.contains('dead')) {
    cell.classList.remove('dead')
    cell.classList.add('alive')
  } else if (cell.classList.contains('alive')) {
    cell.classList.remove('alive')
    cell.classList.add('dead')
  }
}

// const getPosition = (idString) => {
//   return idString.split('_').map(n => Number(n))
// }

export const addHandler = ({selector, handler, type = 'click'}) => {
  let elements = document.querySelectorAll(selector)
  elements = [...elements]

  elements.forEach((element) => {
    element.addEventListener(type, () => {
      handler(element)
    })
  })
}

export const playButtonHandler = function (button) {
  switch (button.innerText) {
    case 'Start':
      button.innerText = 'Pause'
      break
    case 'Pause':
      button.innerText = 'Continue'
      break
    default:
      button.innerText = 'Pause'
  }
}

const clearButtonHandler = function (e, playButton) {
  playButton.innerText = 'Start'
}

export const addPlayHandler = (selector) => {
  let playButton = document.querySelector(selector)
  playButton.onclick = playButtonHandler
}

export const addClearHandler = (clearSelector, playSelector) => {
  const clearButton = document.querySelector(clearSelector)
  const playButton = document.querySelector(playSelector)
  clearButton.addEventListener('click', (e) => {
    clearButtonHandler(e, playButton)
  })
}
