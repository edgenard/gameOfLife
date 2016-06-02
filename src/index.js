import {buildGrid, attachElement} from './js/buildGrid.js'
import {addCellHandler} from './js/clickHandlers.js'

const initialize = () => {
  attachElement('#gridContainer', buildGrid())
  addCellHandler('.cell')
}

window.onload = initialize
