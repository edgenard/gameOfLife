export const addCellHandler = (selector) => {
  let cells = document.querySelectorAll(selector)
  cells = [...cells]

  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      if (cell.classList.contains('dead')) {
        cell.classList.remove('dead')
        cell.classList.add('alive')
      } else if (cell.classList.contains('alive')) {
        cell.classList.remove('alive')
        cell.classList.add('dead')
      }
    })
  })
}
