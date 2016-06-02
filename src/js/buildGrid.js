export const buildGrid = (rows = 24, cols = 24) => {
  let table = document.createElement('table')

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr')
    table.appendChild(tr)
    for (let j = 0; j < cols; j++) {
      let td = document.createElement('td')
      tr.appendChild(td)
    }
  }

  return table
}

export const attachElement = (selector, element) => document.querySelector(selector).appendChild(element)
