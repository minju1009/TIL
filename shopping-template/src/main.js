const tShirtBtn = document.querySelector('.t');
const pantsBtn = document.querySelector('.p');
const skirtBtn = document.querySelector('.s');
const blueBtn = document.querySelector('.blue');
const yellowBtn = document.querySelector('.yellow');
const pinkBtn = document.querySelector('.pink');

const lists = document.querySelector('.lists');

class ListItem {
    constructor(color, type, sex, size){
        this.color = color;
        this.type = type;
        this.sex = sex;
        this.size = size;
    }

    createListsItem(){
        const listsItem = document.createElement('li');
        listsItem.classList = `lists__item`;

        const itemImg = document.createElement('img');
        itemImg.setAttribute('src', `img/${this.color}_${this.type}.png`);
        itemImg.setAttribute('class', `lists__item__img`);

        const itemText = document.createElement('span');
        itemText.classList = 'lists__item__text';
        itemText.innerHTML = `${this.sex}, ${this.size} size`;

        listsItem.appendChild(itemImg);
        listsItem.appendChild(itemText);
        lists.appendChild(listsItem);
    }
}

const items = [
    new ListItem('pink', 's', 'women', 'small'),
    new ListItem('blue', 'p', 'man', 'large'),
    new ListItem('yellow', 't', 'man', 'medium'),
    new ListItem('pink', 's', 'women', 'small'),
    new ListItem('blue', 'p', 'man', 'large'),
    new ListItem('pink', 's', 'man', 'large'),
    new ListItem('pink', 't', 'woman', 'large'),
    new ListItem('yellow', 't', 'woman', 'yellow'),
    new ListItem('blue', 's', 'woman', 'medium'),    
];



function runFilterType(type) {
    lists.innerHTML="";
    const filteredArr = items.filter(item => item.type ===`${type}`);
    createItems(filteredArr);
};

function runFilterColor(color){
    lists.innerHTML="";
    const filteredArr = items.filter(item => item.color ===`${color}`);
    createItems(filteredArr);
}

function createItems(items){
    items.forEach(item => item.createListsItem());
}

createItems(items);

tShirtBtn.addEventListener('click', () => runFilterType('t'));
pantsBtn.addEventListener('click', () => runFilterType('p'));
skirtBtn.addEventListener('click', () => runFilterType('s'));
blueBtn.addEventListener('click', () => runFilterColor('blue'));
yellowBtn.addEventListener('click',() => runFilterColor('yellow'));
pinkBtn.addEventListener('click', () => runFilterColor('pink'));
