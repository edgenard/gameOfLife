
export const buildGrid = (rows, cols) => {
  return new Array(rows).fill(new Array(cols).fill(null))
}

export const resetGrid = (grid) => {
  return grid.map(el => el.fill(0))
}

export const changeCellState = (grid, pos) => {
  const row = pos[0]
  const col = pos[1]

  console.log(`row is ${row}, col is ${col}`)
  console.log(`grid[row][col] is ${grid[row][col]}`)
  console.log('grid is  now', grid)
  grid[1][0] = 1
  console.log('grid is now', grid)
  return grid
}
