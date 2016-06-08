import {assert} from 'chai'
import {drawTable} from '../../src/js/table.js'
import {buildGrid} from '../../src/js/grid.js'

describe('Table', () => {
  let section
  beforeEach(() => {
    section = document.createElement('section')
    section.setAttribute('id', 'gridContainer')
    document.body.appendChild(section)
  })

  afterEach(() => {
    document.body.removeChild(section)
  })
  it('builds the table based on the grid', () => {
    drawTable({parent: section, grid: buildGrid(3, 3)})
    const table = document.querySelector('table')
    const rows = table.querySelectorAll('tr')
    const cols = table.children[0].querySelectorAll('td')

    assert.equal(rows.length, 3)
    assert.equal(cols.length, 3)
  })

  it('table is attached to dom', () => {
    drawTable({parent: section, grid: buildGrid(3, 3)})
    const table = document.querySelector('table')

    assert.isTrue(section.contains(table))
  })

  it('a cell has an initial class of dead', () => {
    drawTable({parent: section, grid: buildGrid(3, 3)})
    const table = document.querySelector('table')
    const cell = table.children[0].children[0]

    assert.isTrue(cell.classList.contains('dead'))
  })

  it('cell has a class of cell', () => {
    drawTable({parent: section, grid: buildGrid(3, 3)})
    const table = document.querySelector('table')
    const cell = table.children[0].children[0]

    assert.isTrue(cell.classList.contains('cell'))
  })

  it('cell has the id of row and col', () => {
    drawTable({parent: section, grid: buildGrid(3, 3)})
    const table = document.querySelector('table')
    const cell = table.children[0].children[0]

    assert.equal(cell.getAttribute('id'), '0_0')
  })
})
