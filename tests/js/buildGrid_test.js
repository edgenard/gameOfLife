import {assert} from 'chai'
import {buildGrid} from '../../src/js/buildGrid.js'

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
})
