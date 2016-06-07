import {buildTable, attachElement} from './js/buildGrid.js'
import {addCellHandler, addPlayHandler, addClearHandler} from './js/clickHandlers.js'

const initialize = () => {
  attachElement('#gridContainer', buildTable())
  addCellHandler('.cell')
  addPlayHandler('#start')
  addClearHandler('#clear', '#start')
}

window.onload = initialize
