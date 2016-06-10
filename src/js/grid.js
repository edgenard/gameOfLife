
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

export const getNeighbors = (grid, position) => {

}
