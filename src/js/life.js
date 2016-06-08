import {buildGrid, resetGrid, changeCellState} from './grid.js'
import {drawTable} from './table.js'
import {clickCellHandler} from './clickHandlers.js'

export const gameOfLife = ({size, container, cellSelector}) => {
  const {rows, cols} = size
  let grid = resetGrid(buildGrid(rows, cols))
  drawTable({parent: container, grid})
  let cells = document.querySelectorAll(cellSelector)
  cells = [...cells]
  cells.forEach((cell) => {
    cell.addEventListener(
      'click',
      function (e) {
        clickCellHandler.bind(cell)()
        const pos = cell.getAttribute('id').split('_').map(n => Number(n))
        grid = changeCellState(grid, pos)
      }
    )
  })
  return {
    getGrid: () => grid
  }
}
