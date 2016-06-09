export const clickCellHandler = function (cell) {
  if (cell.classList.contains('dead')) {
    cell.classList.remove('dead')
    cell.classList.add('alive')
  } else if (cell.classList.contains('alive')) {
    cell.classList.remove('alive')
    cell.classList.add('dead')
  }
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

export const clearButtonHandler = function (clearButton, playButton) {
  playButton.innerText = 'Start'
}
