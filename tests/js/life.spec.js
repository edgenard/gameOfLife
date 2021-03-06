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
      const cell = document.querySelector('[data="1_1"]')
      const grid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ]

      cell.click()

      assert.deepEqual(newGame.getGrid(), grid)
    })

    it('clicking clear resets the grid', () => {
      const cell = document.querySelector('[data="1_1"]')
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

    it('clicking clear sets isPlaying to false', () => {
      const clearButton = document.querySelector('#clear')

      clearButton.click()

      assert.isFalse(newGame.isPlaying())
    })

    it('clicking start computes the next grid', () => {
      const playButton = document.querySelector('#start')
      document.querySelector('[data="0_1"]').click()
      document.querySelector('[data="1_0"]').click()
      document.querySelector('[data="1_1"]').click()

      const newGrid = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]
      ]

      playButton.click()

      assert.deepEqual(newGame.getGrid(), newGrid)
    })

    it('clicking start updates the table', () => {
      const playButton = document.querySelector('#start')
      const cell1 = document.querySelector('[data="0_0"]')
      cell1.click()
      const cell2 = document.querySelector('[data="0_1"]')
      cell2.click()
      const cell3 = document.querySelector('[data="1_0"]')
      cell3.click()
      const cell4 = document.querySelector('[data="1_1"]')

      playButton.click()

      assert.isTrue(cell1.classList.contains('alive'))
      assert.isTrue(cell2.classList.contains('alive'))
      assert.isTrue(cell3.classList.contains('alive'))
      assert.isTrue(cell4.classList.contains('alive'))
    })

    it('clicking start sets isPlaying to true', () => {
      const playButton = document.querySelector('#start')

      playButton.click()

      assert.isTrue(newGame.isPlaying())
    })

    it('clicking start twice sets isPlaying to false', () => {
      const playButton = document.querySelector('#start')

      playButton.click()
      playButton.click()

      assert.isFalse(newGame.isPlaying())
    })

    it('table keeps updating', function (done) {
      this.timeout(3000)
      const playButton = document.querySelector('#start')
      const cell1 = document.querySelector('[data="0_1"]')
      cell1.click()
      const cell2 = document.querySelector('[data="1_1"]')
      cell2.click()
      const cell3 = document.querySelector('[data="2_1"]')
      cell3.click()
      const cell4 = document.querySelector('[data="1_0"]')
      const cell5 = document.querySelector('[data="1_2"]')

      playButton.click()

      setTimeout(() => {
        assert.isTrue(cell1.classList.contains('alive'))
        assert.isTrue(cell3.classList.contains('alive'))
        assert.isTrue(cell2.classList.contains('alive'))

        assert.isFalse(cell4.classList.contains('alive'))
        assert.isFalse(cell5.classList.contains('alive'))
        done()
      }, 1000)
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
