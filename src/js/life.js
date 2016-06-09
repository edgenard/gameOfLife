import {buildGrid, resetGrid, changeCellState} from './grid.js'
import {drawTable} from './table.js'
import {clickCellHandler, clearButtonHandler} from './clickHandlers.js'

export const gameOfLife = ({size, container}) => {
  const {rows, cols} = size
  let grid = resetGrid(buildGrid(rows, cols))
  drawTable({parent: container, grid})

  return {
    getGrid: () => grid,
    addClickCellHandler (selector) {
      let cells = document.querySelectorAll(selector)
      cells = [...cells]
      cells.forEach((cell) => {
        cell.addEventListener(
          'click',
          function (e) {
            clickCellHandler(cell)
            const pos = cell.getAttribute('id').split('_').map(n => Number(n))
            grid = changeCellState(grid, pos)
          }
        )
      })
    },
    addClearButtonHandler (clearSelector, playSelector) {
      let clearButton = document.querySelector(clearSelector)
      let playButton = document.querySelector(playSelector)
      clearButton.addEventListener('click', () => {
        clearButtonHandler(clearButton, playButton)
        grid = resetGrid(grid)
      })
    }
  }
}
