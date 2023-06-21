
// random
function randomPeople(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// Array sum
const count = (arr) => arr.reduce((acc, num) => acc + num, 0);


// table heading rendering
function renderTableHeader(table, arr) {  
  const tableHeader = document.createElement('tr');
  table.append(tableHeader);
  tableHeader.append(document.createElement('td'));
  for(let i = 0; i < arr.length; i++) {
    const tableHeaderCell = document.createElement('th');
    tableHeader.append(tableHeaderCell);
    tableHeaderCell.textContent = arr[i];
  }
  const totalCell = document.createElement('th');
  tableHeader.append(totalCell);
  totalCell.textContent = "Daily Location Total";
}


