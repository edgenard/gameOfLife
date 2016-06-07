import {assert} from 'chai'
import {buildTable, attachElement} from '../../src/js/buildTable.js'
import {buildGrid} from '../../src/js/life.js'
import {addCellHandler, addPlayHandler, addClearHandler} from '../../src/js/clickHandlers.js'

describe('Clicking a cell', function () {
  beforeEach(() => {
    const section = document.createElement('section')
    section.setAttribute('id', 'gridContainer')
    document.body.appendChild(section)
    attachElement('#gridContainer', buildTable(buildGrid(24, 24)))
    addCellHandler('.cell')
  })

  afterEach(() => {
    document.body.removeChild(document.querySelector('#gridContainer'))
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
