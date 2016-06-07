import {assert} from 'chai'
import {buildTable, attachElement} from '../../src/js/buildTable.js'
import {buildGrid} from '../../src/js/life.js'

describe('Building Table', () => {
  it('builds the table based on the grid', () => {
    const table = buildTable(buildGrid(3, 3))
    const rows = table.querySelectorAll('tr')
    const cols = table.children[0].querySelectorAll('td')

    assert.equal(rows.length, 3)
    assert.equal(cols.length, 3)
  })

  it('a cell has an initial class of dead', () => {
    const table = buildTable(buildGrid(3, 3))
    const cell = table.children[0].children[0]

    assert.isTrue(cell.classList.contains('dead'))
  })

  it('cell has a class of cell', () => {
    const table = buildTable(buildGrid(3, 3))
    const cell = table.children[0].children[0]

    assert.isTrue(cell.classList.contains('cell'))
  })

  it('cell has the id of row and col', () => {
    const table = buildTable(buildGrid(3, 3))
    const cell = table.children[0].children[0]

    assert.equal(cell.getAttribute('id'), '0_0')
  })
})

describe('Attaching grid', () => {
  let section
  beforeEach(() => {
    section = document.createElement('section')
    section.setAttribute('id', 'gridContainer')
    document.body.appendChild(section)
  })

  afterEach(() => {
    document.body.removeChild(section)
  })

  it('attaches the grid to element with given selector', () => {
    const table = buildTable(buildGrid(3, 3))
    attachElement('#gridContainer', table)

    assert.isTrue(section.contains(table))
  })
})
