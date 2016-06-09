import {assert} from 'chai'
import {gameOfLife} from '../../src/js/life.js'

describe('Game of Life', () => {
  let newGame, section
  beforeEach(() => {
    section = document.createElement('section')
    section.setAttribute('id', 'gridContainer')
    document.body.appendChild(section)
    newGame = gameOfLife({
      size: {rows: 3, cols: 3},
      container: section
    })
  })

  afterEach(() => {
    document.body.removeChild(section)
  })

  it('getGrid returns current state of the grid', () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]

    assert.deepEqual(newGame.getGrid(), grid)
  })

  it('attaches a table to the DOM', () => {
    const table = document.querySelector('table')

    assert.isNotNull(table)
  })

  it('clicking a cell updates the grid', () => {
    newGame.addClickCellHandler('.cell')
    const cell = document.getElementById('1_1')
    cell.click()

    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]

    assert.isTrue(cell.classList.contains('alive'))
    assert.deepEqual(newGame.getGrid(), grid)
  })
})
