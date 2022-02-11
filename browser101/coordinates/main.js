'use strict';

// 1. 먼저 마우스의 좌표를 윈도우가 감지해야 한다.
// 2. 그리고 그 좌표에 이미지를 넣어야 한다.
// 3. 그 이미지 밑에 x 좌표와 y 좌표가 수치로 따라다녀야 한다.
// 4. 그 이미지까지 선이 나와야 한다.

const numberbox = document.querySelector('.coordinates');
const target = document.querySelector('img');
const row = document.querySelector('.row');
const column = document.querySelector('.column');


function getCoordinates(event){
    const pageX = event.pageX;
    const pageY = event.pageY;
   
    target.style.position = 'absolute';
    target.style.left = `${pageX - 60}px `;
    target.style.top = `${pageY - 60}px`;
    
    numberbox.innerHTML = `${pageX}px, ${pageY}px`;
    numberbox.style.position = 'absolute';
    numberbox.style.left = `${pageX + 20}px`;
    numberbox.style.top = `${pageY + 20}px`;

    /*
    row.style.top = `${pageY}px`;
    row.style.width = window.innerWidth;
    row.style.height = 1;
    column.style.left = `${pageX}px`;
    column.style.height = window.innerHeight;
    column.style.width = 1; 
    */



}

function placeTarget(){
    window.addEventListener('mouseover', getCoordinates)
};


setInterval(placeTarget,100);

