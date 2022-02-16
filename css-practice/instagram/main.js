const heart = document.querySelector('.feed__icon:first-child');
const heartIcon = document.querySelector('.fa-heart');
let heartCounter = 0;
heart.addEventListener('click',()=>{ 
    heartIcon.classList.toggle('far');
    heartIcon.classList.toggle('fa-solid')
    heartIcon.classList.toggle('fa');
    heartIcon.classList.toggle('red');
    heartCounter++;
});

