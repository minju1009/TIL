const playBtn = document.querySelector('.playbtn');
const gameField = document.querySelector('.gamefield');
const carrotCount = document.querySelector('.catched-carrot');
const gameResultBox = document.querySelector('.game-result');
const resultText = document.querySelector('.game-result__text');
let numOfCarrots = 10; 
let clickBug = 0;
let result = 0;

// create Items with class, src, z-index
const createItems = (num, src, className, zIndex) => {
    const itemArray = [];
    for(i=0; i<num; i++){
    const item = document.createElement('img');
    item.setAttribute('src', `${src}`);
    item.setAttribute('class', `${className}`);
    item.style.zIndex = zIndex;
    item.style.position = 'absolute';
    itemArray.push(item);
    }   
    return itemArray;
}

// place Items randomly
const gameFieldCoordinates = gameField.getBoundingClientRect();
const gameFieldWidth = gameFieldCoordinates.width;
const gameFieldHeight= gameFieldCoordinates.height;

const placeRandomly = (itemarray, width, height) => {
    itemarray.forEach(element => {
        gameField.appendChild(element);
        const randomX = Math.ceil(Math.random() * (gameFieldWidth - width));
        const randomY = Math.ceil(Math.random() * (gameFieldHeight - height));
        element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
};

// Timer starts!
const countdown = document.querySelector('.countdown')
let timeSecond = 10;
let interval;

function startCountdown(){
    interval = setInterval(()=>{
        timeSecond--;
        paintTimer(timeSecond);
    }, 1000);
}

function paintTimer(sec){
    if(sec <= 0){
        countdown.innerHTML = `00:00`;
        countdown.style.backgroundColor = 'red';
    }else if(sec>0){
        countdown.innerHTML = `00:${sec<10?'0':''}${sec}`;
    }
}

// addEventlistener to carrots and bugs
function handleClick(event){
    if(event.target.className === 'bug'){
        bugMusic.play();
        bgMusic.pause();
        loseGame();
        result = 1;

    }else if(event.target.className === 'carrot'){
        carrotMusic.play();
        const clickedCarrot = event.target;
        gameField.removeChild(clickedCarrot);
        numOfCarrots = numOfCarrots-1
        carrotCount.innerHTML = numOfCarrots;
    }
}

// make music objects
const bgMusic = new Audio('sound/bg.mp3');
const alertMusic = new Audio('sound/alert.wav');
const bugMusic = new Audio('sound/bug_pull.mp3');
const carrotMusic = new Audio('sound/carrot_pull.mp3');
const gameWinMusic = new Audio('sound/game_win.mp3');


// **Click the start button!!!!**
playBtn.addEventListener('click',() => {
    playBtn.innerHTML = `<i class="fa fa-solid fa-stop"></i>`;
    const bugs = createItems(10, 'img/bug.png', 'bug', 2);
    const carrots = createItems(10, 'img/carrot.png', 'carrot', 1);
    placeRandomly(bugs, 50, 50);
    placeRandomly(carrots, 80, 80);
    startCountdown();
    paintTimer(timeSecond);
    bgMusic.play();
    carrotCount.innerHTML = numOfCarrots;
    gameField.addEventListener('click', handleClick);
    let gameResult = setInterval(()=>{
        if(numOfCarrots === 0){
            winGame();
            clearInterval(gameResult);
            result = 1;
        }},15);   
    setTimeout(()=>{
        if(result <=0){
            loseGame();
        }
    }, 10000);   
})

// lose game
function loseGame(){
    finishGame();
    resultText.innerHTML = 'YOU LOSE👎';
    alertMusic.play();
}

// win game
function winGame(){
    finishGame();
    resultText.innerHTML = 'YOU WIN👍';
    gameWinMusic.play();
}

function finishGame(){
    clearInterval(interval);  
    gameResultBox.style.display = 'block';  
    bgMusic.pause(); 
}












