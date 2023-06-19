console.log(seattle.cookiesAmount);
console.log(seattle.custAmount);
console.log(seattle);

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
