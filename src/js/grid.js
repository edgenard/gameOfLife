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
  // [3, 20]
  // [ [], [], [], []]
  let neighborsAbove, neighborsNext, neighborsBelow
  const rowAbove = pos[0] - 1 // 2
  const row = pos[0] // 3
  const rowBelow = pos[0] + 1 // 4
  const col = pos[1] // 20
  const colRight = pos[1] + 1 // 21
  const colLeft = pos[1] - 1 // 19

  if (rowAbove < 0 && colRight >= grid[pos[0]].length) { // top right, no row above, no right column
    neighborsAbove = []
    neighborsNext = [
      grid[row][colLeft]
    ]
    neighborsBelow = [
      grid[rowBelow][col],
      grid[rowBelow][colLeft]
    ]
  } else if (rowAbove < 0 && colLeft < 0) { // top left
    neighborsAbove = []
    neighborsNext = [
      grid[row][colRight] // 0 or 1
    ]
    neighborsBelow = [
      grid[rowBelow][col],
      grid[rowBelow][colRight]

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
  } else if (colRight >= grid[pos[0]].length && rowBelow >= grid.length) { // bottom right
    neighborsAbove = [
      grid[rowAbove][col],
      grid[rowAbove][colLeft]
    ]
    neighborsNext = [
      grid[row][colLeft]
    ]
    neighborsBelow = []
  } else if (colLeft < 0 && rowBelow >= grid.length) { // bottom left
    neighborsAbove = [
      grid[rowAbove][colRight],
      grid[rowAbove][col]
    ]

    neighborsNext = [
      grid[row][colRight]
    ]

    neighborsBelow = []
  } else if (rowBelow >= grid.length) { // bottom cell
    neighborsAbove = [
      grid[rowAbove][colRight],
      grid[rowAbove][col],
      grid[rowAbove][colLeft]
    ]
    neighborsNext = [
      grid[row][colRight],
      grid[row][colLeft]
    ]
    neighborsBelow = []
  } else if (colRight >= grid[pos[0]].length) { // right edge
    neighborsAbove = [
      grid[rowAbove][col],
      grid[rowAbove][colLeft]
    ]
    neighborsNext = [
      grid[row][colLeft]
    ]
    neighborsBelow = [
      grid[rowBelow][col],
      grid[rowBelow][colLeft]
    ]
  } else if (colLeft < 0) { // left edge
    neighborsAbove = [
      grid[rowAbove][colRight],
      grid[rowAbove][col]
    ]
    neighborsNext = [
      grid[row][colRight]
    ]
    neighborsBelow = [
      grid[rowBelow][colRight],
      grid[rowBelow][col]
    ]
  } else {
    neighborsAbove = [
      grid[rowAbove][colRight],
      grid[rowAbove][col],
      grid[rowAbove][colLeft]
    ]
    neighborsNext = [
      grid[row][colRight],
      grid[row][colLeft]
    ]
    neighborsBelow = [
      grid[rowBelow][colRight],
      grid[rowBelow][col],
      grid[rowBelow][colLeft]
    ]
  }
// [0, 1, 0], [ 1, 0], [1, 0, 0]
// [0, 1, 0, 1, 0, 1, 0, 0]
  return [...neighborsAbove, ...neighborsNext, ...neighborsBelow]
}

export const isGridEmpty = (grid) => {
  return grid.every((row) => row.every((cell) => cell === 0))
}

export const fillIn = (grid) => {
  let filledIn = 0
  const goal = Math.ceil((grid.length * grid[0].length) / 2)

  let newGrid = resetGrid(buildGrid(grid.length, grid[0].length))

  while (filledIn < goal) {
    let row = Math.floor(Math.random() * grid.length)
    let col = Math.floor(Math.random() * grid[0].length)

    if (newGrid[row][col] === 0) {
      newGrid[row][col] = 1
      filledIn += 1
    }
  }

  return newGrid
}

export const nextGen = (oldGrid) => {
  let newGrid = []

// //[ [0, 1, 0], [1, 0 ,0], [0, 0, 0]]
// oldGrid.forEach(function(row, rowIndex){
//   // [[]]
//   row.forEach(function(cell, columnIndex){
// // [ 1, 0, 1, 0, 1]
//     neighbors.reduce(function(accumulator, value){
//       return accumulator + value
//     , 0)
//   })
// })
  oldGrid.forEach((row, rIdx) => {
    newGrid.push([])
    row.forEach((cell, cIdx) => {
      let neighbors = getNeighbors(oldGrid, [rIdx, cIdx])
      let sum = neighbors.reduce((a, b) => a + b)
      if (cell === 1 && (sum < 2 || sum > 3)) {
        newGrid[rIdx][cIdx] = 0
      } else if (cell === 0 && sum === 3) {
        newGrid[rIdx][cIdx] = 1
      } else {
        newGrid[rIdx][cIdx] = cell
      }
    })
  })

  return newGrid
}
