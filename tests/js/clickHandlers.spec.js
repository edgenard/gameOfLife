import {assert} from 'chai'
import {drawTable, attachElement} from '../../src/js/table.js'
import {buildGrid, changeCellState, resetGrid} from '../../src/js/grid.js'
import {addCellHandler, addPlayHandler, addClearHandler} from '../../src/js/clickHandlers.js'

describe('Clicking a cell', function () {
  let section
  beforeEach(() => {
    section = document.createElement('section')
    section.setAttribute('id', 'gridContainer')
    document.body.appendChild(section)
    const grid = resetGrid(buildGrid(24, 24))
    attachElement('#gridContainer', drawTable(grid))
    addCellHandler({selector: '.cell', grid, changeCellState})
  })

  afterEach(() => {
    document.body.removeChild(section)
  })

  it('clicking a dead cell make it alive', () => {
    const cell = document.getElementById('11_10')

    cell.click()

    assert.isTrue(cell.classList.contains('alive'))
    assert.isFalse(cell.classList.contains('dead'))
  })

  it('clicking a live cell makes it dead', () => {
    const cell = document.getElementById('20_0')
    cell.click()
    cell.click()

    assert.isTrue(cell.classList.contains('dead'))
    assert.isFalse(cell.classList.contains('alive'))
  })
})

describe('Clicking Buttons', () => {
  beforeEach(() => {
    const fixture = `<section class="controls" id="fixture">
      <button id="start">
        Start
      </button>
      <button id="clear">
        Clear
      </button>
    </section>`
    document.body.innerHTML = fixture
    addPlayHandler('#start')
    addClearHandler('#clear', '#start')
  })

  afterEach(() => {
    document.body.removeChild(document.getElementById('fixture'))
  })
  it('clicking "Start" changes the text to "Pause"', () => {
    const playButton = document.getElementById('start')

    playButton.click()

    assert.equal(playButton.innerText, 'Pause')
  })

  it('clicking "Pause" changes the text "Continue"', () => {
    const playButton = document.querySelector('#start')

    playButton.click()
    playButton.click()

    assert.equal(playButton.innerText, 'Continue')
  })

  it('clicking "Continue" changes text to "Pause"', () => {
    const playButton = document.querySelector('#start')

    playButton.click()
    playButton.click()
    playButton.click()

    assert.equal(playButton.innerText, 'Pause')
  })

  it('clicking "Clear" changes "Pause" to "Start" ', () => {
    const playButton = document.querySelector('#start')
    const clearButton = document.querySelector('#clear')

    playButton.click()
    clearButton.click()

    assert.equal(playButton.innerText, 'Start')
  })
})
