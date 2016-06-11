export const drawTable = ({grid, parent}) => {
  let table = document.createElement('table')

  grid.forEach((row, rindex) => {
    let tr = document.createElement('tr')
    table.appendChild(tr)
    row.forEach((col, cindex) => {
      let td = document.createElement('td')
      td.classList.add('dead')
      td.classList.add('cell')
      td.setAttribute('id', `${rindex}_${cindex}`)
      tr.appendChild(td)
    })
  })

  parent.appendChild(table)

  return table
}

export const updateTable = (table, newGrid) => {
  const parent = table.parentNode
  parent.removeChild(table)

  newGrid.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      let td = table.children[rIdx].children[cIdx]
      if (cell === 1 && td.classList.contains('dead')) {
        td.classList.remove('dead')
        td.classList.add('alive')
      } else if (cell === 0 && td.classList.contains('alive')) {
        td.classList.remove('alive')
        td.classList.add('dead')
      }
    })
  })

  parent.appendChild(table)

  return table
}
