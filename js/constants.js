"use strict"

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const seattle = {
    name: "Seattle",
    minCust: 23,
    maxCust: 65,
    averageCookies: 6.3,
    randomCust: function() {
        return randomPeople(this.minCust, this.maxCust);
    },
    calculateCookies: function() {
        return Math.round(this.randomCust()*this.averageCookies);
    },
    cookiesAmount: [],
    addCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesAmount.push(this.calculateCookies());
        }
    }
}
seattle.randomCust();
seattle.calculateCookies();
seattle.addCookies();

const container = document.querySelector('.cookies-display');
const list = document.createElement('ul');





container.appendChild(list);

function displayList(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        const listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.textContent = `${arr1[i]}: ${arr2[i]} cookies`;
    }
}

displayList(hours, seattle.cookiesAmount);

function displayTotal(arr) {
    const listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent = `Total: ${count(arr)} cookies`;
}

displayTotal(seattle.cookiesAmount);

console.log(count(seattle.cookiesAmount));