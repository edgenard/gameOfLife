import {assert} from 'chai'
import {buildGrid, attachElement} from '../../src/js/buildGrid.js'

describe('Building Grid', () => {
  it('returns a table element', () => {
    const grid = buildGrid()

    assert.equal(grid.tagName, 'TABLE')
  })

  it('has default number of rows', () => {
    const grid = buildGrid()
    const rows = grid.children

    assert.equal(rows.length, 24)
  })

  it('has a default number of columns', () => {
    const grid = buildGrid()
    const firstRow = grid.children[0]
    const columns = firstRow.children

    assert.equal(columns.length, 24)
  })

  it('a cell has an initial class of dead', () => {
    const grid = buildGrid()
    const cell = grid.children[0].children[0]

    assert.equal(cell.className, 'dead')
  })

  it('cell the id of row and col', () => {
    const grid = buildGrid()
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
    const grid = buildGrid()
    attachElement('#gridContainer', grid)

    assert.isTrue(section.contains(grid))
  })
})
