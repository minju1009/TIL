function loadItems(){
    return fetch("../data/data.json")
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items){
    const container = document.querySelector('.lists');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item){
    return `<li class="lists__item">
    <img src="${item.image}" class="lists__item__img" /> 
    <span class="lists__item__text">${item.gender}, ${item.size}size</span>
    </li>`;
}

function onButtonClick(event, items){
    console.log(event.target.dataset.key);
    console.log(event.target.dataset.value);
}

function setEventListeners(items){
    const logo = document.querySelector('h1');
    const buttons= document.querySelector('.filter');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
} 

// main
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log); 
