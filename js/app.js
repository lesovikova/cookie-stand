"use strict"
renderTableHeader(table, hours);


const seattle = new SalesCity("Seattle", 23, 65, 6.3);
seattle.render(table, seattle.cookiesAmount);
pushCitiesToArr(seattle);
const tokyo = new SalesCity('Tokyo', 3, 24, 1.2);
tokyo.render(table, tokyo.cookiesAmount);
pushCitiesToArr(tokyo);
const dubai = new SalesCity('Dubai', 11, 38, 3.7);
dubai.render(table, dubai.cookiesAmount);
pushCitiesToArr(dubai);
const paris = new SalesCity('Paris', 20, 38, 2.3);
paris.render(table, paris.cookiesAmount);
pushCitiesToArr(paris);
const lima = new SalesCity('Lima', 2, 16, 4.6);
lima.render(table, lima.cookiesAmount);
pushCitiesToArr(lima);

console.log(citiesObjects);

// takeCities();


renderTableFooter(table);


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const currentCities = takeCities();
 
    const cityName = e.target.cityName.value.trim();    
    const minAmount = parseInt(e.target.minCustomers.value);
    const maxAmount = parseInt(e.target.maxCustomers.value);
    const averageOfCookies = parseFloat(e.target.averageCookies.value);
    
   

    table.innerHTML = "";
    renderTableHeader(table, hours);
    renderCitiesFromArr(currentCities);
    
    

    if (!minAmount || !maxAmount || !averageOfCookies) {
        alert("Please input numbers in the appropriate fields!");
    }
    
    const newCity = new SalesCity(cityName, minAmount, maxAmount, averageOfCookies);
    newCity.render(table, newCity.cookiesAmount);
    citiesObjects.push(newCity);
    
    
   
    // console.log(currentCities);

    renderTableFooter(table);
    document.querySelector('form').reset();
})

