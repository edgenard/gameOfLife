import {assert} from 'chai'
import {buildGrid, resetGrid, changeCellState, getNeighbors} from '../../src/js/grid.js'

describe('Grid', () => {
  it('builds grid', () => {
    const grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]

    assert.deepEqual(buildGrid(3, 3), grid)
  })

  it('resets the grid', () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]

    assert.deepEqual(resetGrid(buildGrid(3, 3)), grid)
  })

  it('changes a cells state from 0 to 1', () => {
    const resultingGrid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]

    const oldGrid = resetGrid(buildGrid(3, 3))
    const newGrid = changeCellState(oldGrid, [1, 1])

    assert.deepEqual(newGrid, resultingGrid)
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

describe('Getting neighbors', () => {
  it('gets the neigbors of central cell', () => {
    const oldGrid = [
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]

    const neighbors = [1, 0, 1, 0, 0, 0, 0, 0]

    assert.deepEqual(getNeighbors(oldGrid, [1, 1]), neighbors)
  })

  it('gets the neighbors of top right cell', () => {
    const oldGrid = [
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]

    const neighbors = [0, 0, 1]

    assert.deepEqual(getNeighbors(oldGrid, [0, 0]), neighbors)
  })

  it('gets the neighbors of top left cell', () => {
    const oldGrid = [
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]

    const neighbors = [0, 1, 0]

    assert.deepEqual(getNeighbors(oldGrid, [0, 2]), neighbors)
  })

  it('gets the neighbors of top cell', () => {
    const oldGrid = [
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]

    const neighbors = [1, 1, 0, 1, 0]

    assert.deepEqual(getNeighbors(oldGrid, [0, 1]), neighbors)
  })

  it('gets the neighbors of bottom right cell', () => {
    const oldGrid = [
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]

    const neighbors = [0, 1, 0]

    assert.deepEqual(getNeighbors(oldGrid, [2, 0]), neighbors)
  })

  it('gets the neighbors of bottom left cell', () => {
    const oldGrid = [
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]

    const neighbors = [1, 0, 0]

    assert.deepEqual(getNeighbors(oldGrid, [2, 2]), neighbors)
  })
})
