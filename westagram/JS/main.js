'use strict';
import {Users} from './user.js'
console.log(Users)


const newComment = document.querySelector('.feed__addComment__input')
const commentBtn = document.querySelector('.feed__addComment__button');
commentBtn.disabled = true;

// Activate post button
const newCommentContainer = document.querySelector('.feed__addComment');

newCommentContainer.addEventListener('keydown',() => {
    const newCommentLength = newComment.value.length;
    if(newCommentLength >= 1){
        commentBtn.classList.add('activate');
        commentBtn.disabled = false;
    }else{
        commentBtn.classList.remove('activate');
        commentBtn.disabled = true;
    }
});


// Add New Comment
const comments = document.querySelector('.feed__comments');
let datanum = 2;

function addComment(event){
    event.preventDefault();
    // const new_id = prompt("What's your id?")
    const comment = document.createElement('div');
    comment.className = "feed__comment__item"
    comment.setAttribute('data-num', datanum);
    comment.innerHTML = 
        `<a href="#" class="avatar__id">new_id</a>
            <span>${newComment.value}</span>
        <span class="feed__comment__more">
            <i class="fa-solid fa-x" data-num=${datanum}></i>
            <i class="fa-regular fa-heart" data-like=${datanum}></i>
        </span>`;
    comments.appendChild(comment);
    newComment.value="";
    datanum++;
}

commentBtn.addEventListener('click', addComment);

// delete Comment that is clicked
comments.addEventListener('click', (event)=>{
    const datanum = event.target.dataset.num;
    if(datanum){
        const deletedComment = document.querySelector(`.feed__comment__item[data-num="${datanum}"]`)
        deletedComment.remove();
    }
})

// make the heart full-red when clicked
comments.addEventListener('click', (event)=>{
    const likenum = event.target.dataset.like;
    if(likenum){
        const clickedHeartNum = document.querySelector(`.fa-heart[data-like="${likenum}"]`);
        clickedHeartNum.classList.toggle(`red`);
        clickedHeartNum.classList.toggle(`fa-solid`)
    }
})

// search bar
const searchBar = document.querySelector('.navbar__searchBar');
const searchResultBox = document.querySelector('.searched__items');
const searchToggleBox = document.querySelector('.searchToggle');
searchBar.addEventListener('keyup', (event)=> {
    searchToggleBox.classList.add('toggleOpen');
    if(searchBar.value === ''){
        searchResultBox.innerHTML='';
        searchToggleBox.classList.remove('toggleOpen');
    }else{
    let keyword = event.target.value;
    const filteredArr = Users.filter(user => user.id.includes(keyword));
    searchResultBox.innerHTML = "";
    createElement(filteredArr); 
}});

function createElement(filteredArr){
    filteredArr.forEach(user => {
        const avatar = document.createElement('div');
        avatar.setAttribute('class', 'searched__items__item');
        avatar.innerHTML =` 
            <div class="img__container">
                <img class="avatar__img" src=${user.src} alt="">
            </div>   
            <div class="id__container">
                <div class="avatar__id">${user.id}</div>
                <div class="avatar__description">${user.description}</div>
            </div>`;
        searchResultBox.appendChild(avatar);
    });
}



