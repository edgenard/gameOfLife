export const buildTable = (grid) => {
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

  return table
}

export const attachElement = (selector, element) => document
  .querySelector(selector).appendChild(element)
