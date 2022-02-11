'use strict';

// 1. 먼저 마우스의 좌표를 윈도우가 감지해야 한다.
// 2. 그리고 그 좌표에 이미지를 넣어야 한다.
// 3. 그 이미지 밑에 x 좌표와 y 좌표가 수치로 따라다녀야 한다.
// 4. 그 이미지까지 선이 나와야 한다.
// 4번까지 모두 해결.
// 페이지 업로드와 동시에 선이 나오도록 하는 부분 추가 학습 필요.

const numberbox = document.querySelector('.coordinates');
const target = document.querySelector('img');
const row = document.querySelector('.row');
const column = document.querySelector('.column');


//엘리님 스타일로 맞춰 다시 써보는 코드
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    column.style.left = `${x}px`;
    row.style.top = `${y}px`;
    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    numberbox.style.top = `${y}px`;
    numberbox.style.left = `${x}px`;
    numberbox.innerHTML = `${x}px, ${y}px`;    
})




/* 내가 작성한 코드
function getCoordinates(event){
    const pageX = event.pageX;
    const pageY = event.pageY;
   
    target.style.left = `${pageX - 60}px `;
    target.style.top = `${pageY - 60}px`;
    
    numberbox.innerHTML = `${pageX}px, ${pageY}px`;
    numberbox.style.left = `${pageX + 20}px`;
    numberbox.style.top = `${pageY + 20}px`;

    row.style.top = `${pageY}px`;
    row.style.width = `${window.innerWidth}px`;
    column.style.left = `${pageX}px`;
    column.style.height = `${window.innerHeight}px`//;

}

window.addEventListener('mouseover', getCoordinates);
*/
