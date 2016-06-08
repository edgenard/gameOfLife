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
