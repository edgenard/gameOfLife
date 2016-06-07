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

  it('changes a cells state from 0 to 1', () => {
    const arrayOfArrays = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]

    const grid = resetGrid(buildGrid(3, 3))
    const newGrid = changeCellState(grid, [1, 1])

    assert.deepEqual(newGrid, arrayOfArrays)
  })

  it('changes cells state from 1 to 0', function () {
    const oldGridState = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]
    const newGridState = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]

    assert.deepEqual(changeCellState(oldGridState, [1, 1]), newGridState)
  })

  it('produces a new grid - no mutation', () => {
    const grid = resetGrid(buildGrid(3, 3))
    const newGrid = changeCellState(grid, [1, 1])

    assert.notDeepEqual(newGrid, grid)
  })
})
