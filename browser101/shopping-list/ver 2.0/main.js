const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__btn');


function onAdd(){

const text = input.value;
input.focus();
if(text === ''){
    return;
}
const item = createItem(text);
items.appendChild(item);
item.scrollIntoView({block : "center"});
input.value = '';
input.focus();
}

addBtn.addEventListener('click', () => {
    onAdd();
})

function createItem(text){
const itemRow = document.createElement('li');
itemRow.setAttribute('class', 'item__row');

const item = document.createElement('div');
item.setAttribute('class', 'item');

const itemName= document.createElement('span');
itemName.setAttribute('class', 'item__name');
itemName.innerHTML = text;

const deleteBtn = document.createElement('button');
deleteBtn.setAttribute('class', 'deleteBtn');
deleteBtn.innerHTML = '<i class="fa fa-solid fa-trash"></i>'
deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
})

const itemDivider = document.createElement('div');
itemDivider.setAttribute('class', 'item__divider');

itemRow.appendChild(item);
itemRow.appendChild(itemDivider);

item.appendChild(itemName);
item.appendChild(deleteBtn);

return itemRow;

}

input.addEventListener('keypress', (event)=>{
    if(event.key ==='Enter'){
        onAdd();
    }
})