const playBtn = document.querySelector('.playbtn');
const gameField = document.querySelector('.gamefield');

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


// count carrots
const carrotCount = document.querySelector('.catched-carrot');
function countCarrots(carrots){
    carrotCount.innerHTML = carrots.length;
    for(i = 0; i<carrots.length; i++){
    carrots[i].addEventListener('click', (event) => {
        const clickedCarrot = event.target;
        const indexOfClickedCarrot = carrots.indexOf(clickedCarrot);
        carrots.splice(indexOfClickedCarrot,1);
        carrotCount.innerHTML = carrots.length;
        gameField.removeChild(clickedCarrot);
        playMusic('sound/carrot_pull.mp3');        
    })
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
    countCarrots(carrots);
    playMusic('sound/bg.mp3');
})















