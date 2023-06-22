
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


//rendering the total of the hours in all locations
function renderTableFooter(table){
  const tableFooter = document.createElement('tr');
  tableFooter.style.fontWeight = "bold";
  table.append(tableFooter);
  const sumName = document.createElement('td');
  tableFooter.append(sumName);
  sumName.textContent = "The sum";
  
  for(let i = 1; i < hours.length + 2; i++) {
    const cells = document.querySelectorAll(`td:nth-of-type(${i+1})`);
    const cellsNum = [];
    for(let i = 0; i < cells.length; i++) {
      cellsNum.push(parseInt(cells[i].textContent));   
    }
    const tableFooterCell = document.createElement('td');
    tableFooter.append(tableFooterCell);
    tableFooterCell.textContent = count(cellsNum);
  }
}




//putting cities names into array
function takeCities() {
  const citiesNode = document.querySelectorAll('table td:first-of-type');
  const cities = [];
  for(let i = 0; i < citiesNode.length; i++) {
    if(citiesNode[i].textContent && citiesNode[i].textContent != "The sum"){
    cities.push(citiesNode[i].textContent.toLowerCase());
    }
  }
  return cities;
}


// add the cities objects to the array
function pushCitiesToArr(item) {  
  citiesObjects.push(item);
}


