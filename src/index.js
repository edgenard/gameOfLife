import {gameOfLife} from './js/life.js'

const initialize = () => {
  const life = gameOfLife({
    size: {
      rows: 24,
      cols: 24
    },
    container: document.getElementById('gridContainer')
  })

  life.addClickCellHandler('.cell')
  life.addClearButtonHandler('#clear', '#start')
  life.addStartButtonHandler('#start')
}

window.onload = initialize
