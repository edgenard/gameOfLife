const clickCellHandler = function (cell) {
  if (cell.classList.contains('dead')) {
    cell.classList.remove('dead')
    cell.classList.add('alive')
  } else if (cell.classList.contains('alive')) {
    cell.classList.remove('alive')
    cell.classList.add('dead')
  }
}

const getPosition = (idString) => {
  return idString.split('_').map(n => Number(n))
}

export const addCellHandler = ({selector, grid, changeCellState}) => {
  let cells = document.querySelectorAll(selector)
  cells = [...cells]

  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      clickCellHandler(cell)
      grid = changeCellState(grid, getPosition(cell.getAttribute('id')))
    })
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
