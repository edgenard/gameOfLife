import {assert} from 'chai'
import {drawTable, updateTable} from '../../src/js/table.js'
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

  it('returns the table', function () {
    const table = drawTable({parent: section, grid: buildGrid(3, 3)})

    assert.isDefined(table)
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

  describe('Updating Table', () => {
    it('live cells are updated table', () => {
      const grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
      let table = drawTable({
        parent: section,
        grid
      })
      const newGrid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ]
      const cell = document.getElementById('1_1')

      updateTable(table, newGrid)

      assert.isTrue(cell.classList.contains('alive'))
    })

    it('dead cells are updated in new table', () => {
      const grid = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
      let table = drawTable({
        parent: section,
        grid
      })
      const newGrid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]

      updateTable(table, newGrid)
      const cell = document.getElementById('0_0')

      assert.isFalse(cell.classList.contains('alive'))
    })
  })
})
