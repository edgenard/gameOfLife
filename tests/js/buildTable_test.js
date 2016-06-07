import {assert} from 'chai'
import {buildTable, attachElement} from '../../src/js/buildTable.js'

describe('Building Table', () => {
  it('returns a table element', () => {
    const grid = buildTable()

    assert.equal(grid.tagName, 'TABLE')
  })

  it('has default number of rows', () => {
    const grid = buildTable()
    const rows = grid.children

    assert.equal(rows.length, 24)
  })

  it('has a default number of columns', () => {
    const grid = buildTable()
    const firstRow = grid.children[0]
    const columns = firstRow.children

    assert.equal(columns.length, 24)
  })

  it('a cell has an initial class of dead', () => {
    const grid = buildTable()
    const cell = grid.children[0].children[0]

    assert.isTrue(cell.classList.contains('dead'))
  })

  it('cell has a class of cell', () => {
    const grid = buildTable()
    const cell = grid.children[0].children[0]

    assert.isTrue(cell.classList.contains('cell'))
  })

  it('cell the id of row and col', () => {
    const grid = buildTable()
    const cell = grid.children[0].children[0]

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

  it('attaches the grid to element with given selector', () => {
    const grid = buildTable()
    attachElement('#gridContainer', grid)

    assert.isTrue(section.contains(grid))
  })
})
