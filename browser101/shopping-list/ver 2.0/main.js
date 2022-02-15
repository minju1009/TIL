const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__btn');
const form = document.querySelector('.form-tag');

// 플러스 버튼 눌렀을 때, 리스트 추가
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

// 버튼 눌렀을 때, 이벤트 추가
form.addEventListener('click', (event) => {
    event.preventDefault();
    onAdd();
})

let id = 0;
// 새로운 리스트 만들기
function createItem(text){
const itemRow = document.createElement('li');
itemRow.setAttribute('class', 'item__row');
itemRow.setAttribute('data-id', id);
itemRow.innerHTML = 
    `<div class="item">
        <span class="item__name">${text}</span>
        <button class="deleteBtn">
            <i class="fa fa-solid fa-trash" data-id="${id}"></i>
     </button>
    </div>
    <div class="item__divider"></div>`;
id++;

// itemRow.setAttribute('class', 'item__row');

// const item = document.createElement('div');
// item.setAttribute('class', 'item');

// const itemName= document.createElement('span');
// itemName.setAttribute('class', 'item__name');
// itemName.innerHTML = text;

// const deleteBtn = document.createElement('button');
// deleteBtn.setAttribute('class', 'deleteBtn');
// deleteBtn.innerHTML = '<i class="fa fa-solid fa-trash"></i>'

// items.addEventListener('click', (event) => if(event.target.tagName === 'LI'){
//     items.removeChild(itemRow);
// })

// const itemDivider = document.createElement('div');
// itemDivider.setAttribute('class', 'item__divider');

// itemRow.appendChild(item);
// itemRow.appendChild(itemDivider);

// item.appendChild(itemName);
// item.appendChild(deleteBtn);

return itemRow;
}

// 아래 부분 form tag로 한번에 처리해줌
// input.addEventListener('keypress', (event)=>{
//     if(event.key ==='Enter'){
//         onAdd();
//     }
// })


items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if(id){
        const tobeDeleted = document.querySelector(`.item__row[data-id="${id}"]`); 
        tobeDeleted.remove();
    }
})