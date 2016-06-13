import {buildGrid, resetGrid, changeCellState, nextGen, fillIn, isGridEmpty} from './grid.js'
import {drawTable, updateTable} from './table.js'
import {clickCellHandler, clearButtonHandler, playButtonHandler} from './clickHandlers.js'

export const gameOfLife = ({size, container}) => {
  const {rows, cols} = size
  let grid = resetGrid(buildGrid(rows, cols))
  let table = drawTable({parent: container, grid})
  let playing = false
  let intervalId
  return {
    isPlaying: () => playing,
    getGrid: () => grid,
    addClickCellHandler (selector) {
      let cells = document.querySelectorAll(selector)
      cells = [...cells]
      cells.forEach((cell) => {
        cell.addEventListener(
          'click',
          function (e) {
            clickCellHandler(cell)
            const pos = cell.getAttribute('data').split('_').map(n => Number(n))
            grid = changeCellState(grid, pos)
          }
        )
      })
    },
    addClearButtonHandler (clearSelector, playSelector) {
      let clearButton = document.querySelector(clearSelector)
      let playButton = document.querySelector(playSelector)
      clearButton.addEventListener('click', () => {
        playing = false
        clearButtonHandler(clearButton, playButton)
        grid = resetGrid(grid)
        table = updateTable(table, grid)
        clearInterval(intervalId)
      })
    },
    addStartButtonHandler (playSelector) {
      let playButton = document.querySelector(playSelector)

      playButton.addEventListener('click', () => {
        playing = playing === false
        playButtonHandler(playButton)
        grid = isGridEmpty(grid) ? fillIn(grid) : nextGen(grid)
        table = updateTable(table, grid)
        if (!playing && intervalId) {
          clearInterval(intervalId)
        } else {
          intervalId = setInterval(() => {
            grid = nextGen(grid)
            table = updateTable(table, grid)
          }, 1000)
        }
      })
    },
    addRandomButtonHandler (randomSelector) {
      const randomButton = document.querySelector(randomSelector)
      randomButton.addEventListener('click', () => {
        grid = fillIn(grid)
        updateTable(table, grid)
      })
    }
  }
}
