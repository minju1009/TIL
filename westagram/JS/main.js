'use strict';

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

function addComment(event){
    event.preventDefault();
    // const new_id = prompt("What's your id?")
    const comment = document.createElement('div');
    comment.className = "feed__comment__item"
    comment.innerHTML = 
        `<a href="#" class="avatar__id">new_id</a>
            <span>${newComment.value}</span>
        <span>
            <i class="fa-solid fa-heart"></i>
        </span>`;
    comments.appendChild(comment);
    newComment.value="";
}

commentBtn.addEventListener('click', addComment);
