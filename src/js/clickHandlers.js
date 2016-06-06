const clickCellHandler = function (e) {
  if (this.classList.contains('dead')) {
    this.classList.remove('dead')
    this.classList.add('alive')
  } else if (this.classList.contains('alive')) {
    this.classList.remove('alive')
    this.classList.add('dead')
  }
}

export const addCellHandler = (selector) => {
  let cells = document.querySelectorAll(selector)
  cells = [...cells]

  cells.forEach((cell) => {
    cell.onclick = clickCellHandler
  })
}

const playButtonHandler = function (e) {
  switch (this.innerText) {
    case 'Start':
      this.innerText = 'Pause'
      break
    case 'Pause':
      this.innerText = 'Continue'
      break
    default:
      return
  }
}

export const addPlayHandler = (selector) => {
  let playButton = document.querySelector(selector)
  playButton.onclick = playButtonHandler
}
