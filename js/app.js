
renderTableHeader(table, hours);

renderCities();

renderTableFooter(table);


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    table.innerHTML = "";
    renderTableHeader(table, hours);
    renderCities();
    const cityName = e.target.cityName.value.trim();
    
    const minAmount = parseInt(e.target.minCustomers.value);
    const maxAmount = parseInt(e.target.maxCustomers.value);
    const averageOfCookies = parseFloat(e.target.averageCookies.value);

    if (!minAmount || !maxAmount || !averageOfCookies) {
        alert("Please input numbers in the appropriate fields!");
    }
    
    const newCity = new SalesCity(cityName, minAmount, maxAmount, averageOfCookies);
    renderTableFooter(table);
    document.querySelector('form').reset();
})

