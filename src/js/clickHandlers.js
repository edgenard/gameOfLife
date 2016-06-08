export const clickCellHandler = function () {
  if (this.classList.contains('dead')) {
    this.classList.remove('dead')
    this.classList.add('alive')
  } else if (this.classList.contains('alive')) {
    this.classList.remove('alive')
    this.classList.add('dead')
  }
}

// const getPosition = (idString) => {
//   return idString.split('_').map(n => Number(n))
// }

export const addHandler = ({selector, handler, type = 'click'}) => {
  let elements = document.querySelectorAll(selector)
  elements = [...elements]

  elements.forEach((element) => {
    element.addEventListener(type, handler)
  })
}

export const playButtonHandler = function (e) {
  switch (this.innerText) {
    case 'Start':
      this.innerText = 'Pause'
      break
    case 'Pause':
      this.innerText = 'Continue'
      break
    default:
      this.innerText = 'Pause'
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
