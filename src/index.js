import {buildTable, attachElement} from './js/buildTable.js'
import {addCellHandler, addPlayHandler, addClearHandler} from './js/clickHandlers.js'
import {buildGrid} from './js/life.js'

const initialize = () => {
  attachElement('#gridContainer', buildTable(buildGrid(24, 24)))
  addCellHandler('.cell')
  addPlayHandler('#start')
  addClearHandler('#clear', '#start')
}

window.onload = initialize
