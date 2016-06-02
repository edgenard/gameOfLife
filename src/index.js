import {buildGrid, attachElement} from './js/buildGrid.js'

const initialize = () => {
  attachElement('#gridContainer', buildGrid())
}

window.onload = initialize
