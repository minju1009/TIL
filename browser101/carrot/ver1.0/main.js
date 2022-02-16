const playBtn = document.querySelector('.playbtn');
const gameField = document.querySelector('.gamefield');
const carrotCount = document.querySelector('.catched-carrot');
let numOfCarrots = 10; 

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
function startTimer(){
    let timeSecond = 10;
    paintTimer(timeSecond);
    setInterval(() => {
        timeSecond--;
        paintTimer(timeSecond);
        if(timeSecond <= 0){
            stopCounting();
        }
    }, 1000);

    function paintTimer(sec){
        countdown.innerHTML = `00:${sec<10?'0':''}${sec}`;
    }

    function stopCounting(){
        countdown.innerHTML = `00:00`;
        countdown.style.backgroundColor = 'red';       
    }
}


// addEventlistener to carrots and bugs
function handleClick(event){
    if(event.target.className === 'bug'){
        playMusic('sound/bug_pull.mp3');
        // loseGame();
    }else if(event.target.className === 'carrot'){
        const clickedCarrot = event.target;
        gameField.removeChild(clickedCarrot);
        playMusic('sound/carrot_pull.mp3');
        numOfCarrots = numOfCarrots-1
        carrotCount.innerHTML = numOfCarrots;
    }
}


// play music
function playMusic(source){
    const music = new Audio(source);
    music.play();
}


// **Click the start button!!!!**
playBtn.addEventListener('click',() => {
    playBtn.innerHTML = `<i class="fa fa-solid fa-stop"></i>`;
    const bugs = createItems(10, 'img/bug.png', 'bug', 2);
    const carrots = createItems(10, 'img/carrot.png', 'carrot', 1);
    placeRandomly(bugs, 50, 50);
    placeRandomly(carrots, 80, 80);
    startTimer();
    playMusic('sound/bg.mp3');
    carrotCount.innerHTML = numOfCarrots;
    gameField.addEventListener('click', handleClick);
})















