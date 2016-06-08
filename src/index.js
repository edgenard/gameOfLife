import {drawTable, attachElement} from './js/table.js'
import {addCellHandler, addPlayHandler, addClearHandler} from './js/clickHandlers.js'
import {buildGrid, changeCellState, resetGrid} from './js/grid.js'

const initialize = () => {
  let grid = resetGrid(buildGrid(24, 24))
  attachElement('#gridContainer', drawTable(grid))
  addCellHandler({selector: '.cell', grid, changeCellState})
  addPlayHandler('#start')
  addClearHandler('#clear', '#start')
  window.onclick = function () { console.log(grid[0]) }
}

window.onload = initialize
