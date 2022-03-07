const loginForm = document.querySelector('.loginForm');

loginForm.addEventListener('keydown', checkValidation);

function checkValidation(){
    const id = document.querySelector('.loginForm__id').value.length;
    const pwd = document.querySelector('.loginForm__pwd').value.length;
    const loginBtn = document.querySelector('.loginForm__submit');
    if(id >= 1 && pwd >=1){
        loginBtn.classList.add('checked');
    }else{
        loginBtn.classList.remove('checked');
    }
    
}




