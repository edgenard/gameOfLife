import {buildTable, attachElement} from './js/buildTable.js'
import {addCellHandler, addPlayHandler, addClearHandler} from './js/clickHandlers.js'
import {buildGrid, changeCellState, resetGrid} from './js/life.js'

const initialize = () => {
  const Life = () => {
    let grid = resetGrid(buildGrid(24,24))
    attachElement('#gridContainer', buildTable(grid))
    
  }
  let grid = resetGrid(buildGrid(24, 24))

  addCellHandler({selector: '.cell', grid, changeCellState})
  addPlayHandler('#start')
  addClearHandler('#clear', '#start')
  window.onclick = function () { console.log(grid[0]) }
}

window.onload = initialize
