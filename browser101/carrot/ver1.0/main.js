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

playBtn.addEventListener('click',() => {
    playBtn.innerHTML = `<i class="fa fa-solid fa-stop"></i>`;
    const bugs = createItems(10, 'img/bug.png', 'bug', 2);
    const carrots = createItems(10, 'img/carrot.png', 'carrot', 1);
    placeRandomly(bugs, 50, 50);
    placeRandomly(carrots, 80, 80);
    // startTimer();
    // countCarrots();
    // playBgm();
})

// Timer starts!

const countdown = document.querySelector('.countdown')

function startTimer(){
    countdown.innerHTML = '10:00';
}

startTimer();










