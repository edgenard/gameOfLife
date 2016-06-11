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

  describe('Clicking cells and controls', () => {
    beforeEach(() => {
      setupControls()
      newGame.addClickCellHandler('.cell')
      newGame.addClearButtonHandler('#clear', '#start')
      newGame.addStartButtonHandler('#start')
    })

    it('clicking a cell updates the grid', () => {
      const cell = document.getElementById('1_1')
      const grid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ]

      cell.click()

      assert.deepEqual(newGame.getGrid(), grid)
    })

    it('clicking clear resets the grid', () => {
      const cell = document.getElementById('1_1')
      const clearButton = document.querySelector('#clear')
      const grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]

      cell.click()
      clearButton.click()

      assert.deepEqual(newGame.getGrid(), grid)
    })

    it('clicking start computes the next grid', () => {
      const playButton = document.querySelector('#start')
      document.getElementById('0_1').click()
      document.getElementById('1_0').click()
      document.getElementById('1_1').click()

      const newGrid = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]
      ]

      playButton.click()

      assert.deepEqual(newGame.getGrid(), newGrid)
    })
  })
})

function setupControls () {
  const controls = document.createElement('section')
  controls.classList.add('controls')

  const playButton = document.createElement('button')
  playButton.setAttribute('id', 'start')
  playButton.innerText = 'Start'
  controls.appendChild(playButton)

  const clearButton = document.createElement('button')
  clearButton.setAttribute('id', 'clear')
  clearButton.innerText = 'Clear'
  controls.appendChild(clearButton)

  document.body.appendChild(controls)

  return {playButton, clearButton}
}
