const playBtn = document.querySelector('.playbtn');
const gameField = document.querySelector('.gamefield');
const carrotCount = document.querySelector('.catched-carrot');
const gameResultBox = document.querySelector('.game-result');
const resultText = document.querySelector('.game-result__text');
const replayBtn = document. querySelector('.replaybtn');

let numOfCarrots = 10; 
let result = 0;
let started = false;

playBtn.addEventListener('click', () => {
    if(started){
        stopPlaying();
    }else{
        startPlaying();
    }   
})


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

let bugs = createItems(10, 'img/bug.png', 'bug', 2);
let carrots = createItems(10, 'img/carrot.png', 'carrot', 1);

// play game
function playGame(){
    playBtn.innerHTML = `<i class="fa fa-solid fa-stop"></i>`;
    let paintbugs = "";
    let paintcarrots = "";
    paintbugs = placeRandomly(bugs, 50, 50);
    paintcarrots = placeRandomly(carrots, 80, 80);
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
}

// code needs to be fixed!
unction startGame(){
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}

function stopGame(){
    started = false;
    stopGameTimer();
    hideGameButton();
    showPopUpWithText('REPLAY❓');
}

function finishGame(win){
    started = false;
    hideGameButton();
    showPopUpWithText(win? 'YOU WON 😉' : 'YOU LOST 💩');
}


function showStopButton(){
    const icon = gameBtn.querySelector('.fa');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function hideGameButton(){
    gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore(){
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function showPopUpWithText(text){
    popUpText.innerText = text;
    popUp.classList.remove('pop-up--hide');
}

function hidePopUp(){
    popUp.classList.add('pop-up--hide');
}

function startGameTimer(){
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(()=>{
        if(remainingTimeSec <= 0){
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000)
}

function stopGameTimer(){
    clearInterval(timer);
}

function updateTimerText(time){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function initGame(){
    field.innerHTML = '';
    gameScore.innerText = CARROT_COUNT;
    // 벌레와 당근을 생성한 뒤 field에 추가해줌
    addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/bug.png');
}

function onFieldClick(event){
    if(!started){
        return;
    }
    const target = event.target;
    if(target.matches('.carrot')){
        //당근!!
        target.remove();
        score++;
        updateScoreBoard();
        if(score === CARROT_COUNT){
            finishGame(true)
        }
    }else if(target.matches('.bug')){
        stopGameTimer();
        finishGame(false);
        //벌레!!
    }
}


function updateScoreBoard(){
    gameScore.innerText = CARROT_COUNT - score;
}


function addItem(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for(let i = 0; i < count ; i++){
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }    
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}







