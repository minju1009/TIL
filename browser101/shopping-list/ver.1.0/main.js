// 1. input에서 글을 작성한 걸 변수에 저장한다.
// 2. 버튼을 누르면 1) <li>가 만들어지며, 만들어진 <li>를 붙여넣는다.
// 3. trashcan을 누르면 해당 <li>가 사라진다. 

const lists = document.querySelector('.lists');
const input = document.querySelector('input');
const addBtn = document.querySelector('button');

function handleSubmit(){
    const li = document.createElement('li');
    li.innerHTML = input.value;
    lists.appendChild(li);
    input.value="";

    const btn = document.createElement('button');
    btn.innerHTML = "❌";
    btn.setAttribute("class","delete");
    li.appendChild(btn);

    const deleteBtn = document.querySelector('.delete');
    deleteBtn.addEventListener("click", () => {
        lists.removeChild(li);
    });
}

addBtn.addEventListener('click',handleSubmit);
document.addEventListener('keydown', (event) => {
   if(event.key === 'Enter' && event.isComposing === false){
       handleSubmit();
   } 
});



