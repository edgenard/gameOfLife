import 'babel-polyfill'
import {assert} from 'chai'
import {buildGrid, attachElement} from '../../src/js/buildGrid.js'
import {addCellHandler} from '../../src/js/clickHandlers.js'

describe('Clicking a cell', function () {
  beforeEach(() => {
    const section = document.createElement('section')
    section.setAttribute('id', 'gridContainer')
    document.body.appendChild(section)
    attachElement('#gridContainer', buildGrid())
    addCellHandler('.cell')
  })

  it.only('clicking a dead cell make it alive', () => {
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
