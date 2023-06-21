"use strict"

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
const table = document.querySelector('.cookies-display__table');

function SalesCity(name, minCust, maxCust, averageCookies) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.averageCookies = averageCookies;
    this.cookiesAmount = [];
    this.addAllCookies(hours, this.cookiesAmount, this.cookiesPerHour);
    this.render(table, this.cookiesAmount);
}

SalesCity.prototype.generateCookiesPerHour = function(minCust, maxCust) {
    return Math.round(randomPeople(minCust, maxCust)*this.averageCookies);
}

SalesCity.prototype.addAllCookies = function(arr1,arr2) {
    for(let i = 0; i < arr1.length; i++) {
        arr2.push(this.generateCookiesPerHour(this.minCust, this.maxCust));
    }
}

SalesCity.prototype.render = function(table, arr) {
    const row = document.createElement('tr');
    table.appendChild(row);
    const cityName = document.createElement('td');
    row.append(cityName);
    cityName.textContent = this.name;
    for(let i = 0; i < arr.length; i++) {
        const cell = document.createElement('td');
        row.append(cell);
        cell.textContent = arr[i];
    }
    const total = document.createElement('td');
    row.append(total);
    total.textContent = count(arr);
}

