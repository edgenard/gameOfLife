import {assert} from 'chai'
import {drawTable} from '../../src/js/table.js'
import {buildGrid, resetGrid} from '../../src/js/grid.js'
import {clickCellHandler, playButtonHandler, clearButtonHandler} from '../../src/js/clickHandlers.js'

describe('Clicking a cell', function () {
  let section, cell
  beforeEach(() => {
    section = document.createElement('section')
    section.setAttribute('id', 'gridContainer')
    document.body.appendChild(section)
    const grid = resetGrid(buildGrid(24, 24))
    drawTable({parent: section, grid})
    cell = document.querySelector('[data="11_11"]')
    cell.addEventListener('click', () => {
      clickCellHandler(cell)
    })
  })

  afterEach(() => {
    document.body.removeChild(section)
  })

  it('clicking a cell changes its class', () => {
    cell.click()

    assert.isTrue(cell.classList.contains('alive'))
    assert.isFalse(cell.classList.contains('dead'))
  })

  it('clicking cell twice changes it to the og class', () => {
    cell.click()
    cell.click()

    assert.isTrue(cell.classList.contains('dead'))
    assert.isFalse(cell.classList.contains('alive'))
  })
})

describe('Clicking Buttons', () => {
  let playButton, clearButton
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
    playButton = document.querySelector('#start')
    playButton.addEventListener('click', () => { playButtonHandler(playButton) })
    clearButton = document.querySelector('#clear')
    clearButton.addEventListener('click', () => {
      clearButtonHandler(clearButton, playButton)
    })
  })

  afterEach(() => {
    document.body.removeChild(document.getElementById('fixture'))
  })
  it('clicking "Start" changes the text to "Pause"', () => {
    playButton.click()

    assert.equal(playButton.innerText, 'Pause')
  })

  it('clicking "Pause" changes the text "Continue"', () => {
    playButton.click()
    playButton.click()

    assert.equal(playButton.innerText, 'Continue')
  })

  it('clicking "Continue" changes text to "Pause"', () => {
    playButton.click()
    playButton.click()
    playButton.click()

    assert.equal(playButton.innerText, 'Pause')
  })

  it('clicking "Clear" changes "Pause" to "Start" ', () => {
    const clearButton = document.querySelector('#clear')

    playButton.click()
    clearButton.click()

    assert.equal(playButton.innerText, 'Start')
  })
})
