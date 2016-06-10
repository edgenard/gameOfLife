
export const buildGrid = (rows, cols) => {
  return new Array(rows).fill(new Array(cols).fill(null))
}

export const resetGrid = (grid) => {
  return grid.map(el => el.map(cell => 0))
}

export const changeCellState = (grid, pos) => {
  const [row, col] = pos
  const newValue = grid[row][col] === 1 ? 0 : 1
  return [...grid.slice(0, row),
    [...grid[row].slice(0, col), newValue, ...grid[row].slice(col + 1)],
    ...grid.slice(row + 1)
  ]
}

export const getNeighbors = (grid, pos) => {
  let neighborsAbove, neighborsNext, neighborsBelow
  const rowAbove = pos[0] - 1
  const row = pos[0]
  const rowBelow = pos[0] + 1
  const col = pos[1]
  const colRight = pos[1] - 1
  const colLeft = pos[1] + 1

  if (rowAbove < 0 && colRight < 0) { // top right
    neighborsAbove = []
    neighborsNext = [
      grid[row][colLeft]
    ]
    neighborsBelow = [
      grid[rowBelow][col],
      grid[rowBelow][colLeft]
    ]
  } else if (rowAbove < 0 && colLeft >= grid[pos[0]].length) { // top left
    neighborsAbove = []
    neighborsNext = [
      grid[row][colRight]
    ]
    neighborsBelow = [
      grid[rowBelow][colRight],
      grid[rowBelow][col]
    ]
  } else if (rowAbove < 0) { // top cell
    neighborsAbove = []
    neighborsNext = [
      grid[row][colRight],
      grid[row][colLeft]
    ]
    neighborsBelow = [
      grid[rowBelow][colRight],
      grid[rowBelow][col],
      grid[rowBelow][colLeft]
    ]
  } else {
    neighborsAbove = [
      grid[rowAbove][colRight],
      grid[rowAbove][col],
      grid[rowAbove][colLeft]
    ]
    neighborsBelow = [
      grid[rowBelow][colRight],
      grid[rowBelow][col],
      grid[rowBelow][colLeft]
    ]
    neighborsNext = [
      grid[row][colRight],
      grid[row][colLeft]
    ]
  }

  return [...neighborsAbove, ...neighborsNext, ...neighborsBelow]
}
