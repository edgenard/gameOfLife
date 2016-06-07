import {assert} from 'chai'
import {buildGrid, resetGrid, changeCellState} from '../../src/js/life.js'

describe('Grid', () => {
  it('builds grid', () => {
    const arrayOfArrays = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]

    assert.deepEqual(buildGrid(3, 3), arrayOfArrays)
  })

  it('resets the grid', () => {
    const arrayOfArrays = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]

    assert.deepEqual(resetGrid(buildGrid(3, 3)), arrayOfArrays)
  })

  it('changes a cells state', () => {
    const arrayOfArrays = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]

    const grid = resetGrid(buildGrid(3, 3))
    const newGrid = changeCellState(grid, [1, 1])

    assert.deepEqual(newGrid, arrayOfArrays)
  })
})
