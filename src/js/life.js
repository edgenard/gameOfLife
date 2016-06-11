import {buildGrid, resetGrid, changeCellState, nextGen} from './grid.js'
import {drawTable, updateTable} from './table.js'
import {clickCellHandler, clearButtonHandler, playButtonHandler} from './clickHandlers.js'

export const gameOfLife = ({size, container}) => {
  const {rows, cols} = size
  let grid = resetGrid(buildGrid(rows, cols))
  let table = drawTable({parent: container, grid})

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
        table = updateTable(table, grid)
      })
    },
    addStartButtonHandler (playSelector) {
      let playButton = document.querySelector(playSelector)

      playButton.addEventListener('click', () => {
        playButtonHandler(playButton)
        grid = nextGen(grid)
        table = updateTable(table, grid)
      })
    }
  }
}
