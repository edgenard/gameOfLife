import {drawTable} from './js/table.js'
import {addCellHandler, addPlayHandler, addClearHandler} from './js/clickHandlers.js'
import {buildGrid, changeCellState, resetGrid} from './js/grid.js'

const initialize = () => {
  let grid = resetGrid(buildGrid(24, 24))
  drawTable({grid, parent: document.querySelector('#gridContainer')})
  addCellHandler({selector: '.cell', grid, changeCellState})
  addPlayHandler('#start')
  addClearHandler('#clear', '#start')
  window.onclick = function () { console.log(grid[0]) }
}

window.onload = initialize
