'use strict';
import * as sound from './sound.js'
import Field from './field.js'

export default class Game{
    constructor(carrotCount, bugCount, gameDuration){
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.gameDuration = gameDuration;

        this.gameBtn = document.querySelector('.game__button');
        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');

        this.started = false;
        this.score = 0;
        this.timer = undefined;

        this.gameBtn.addEventListener('click', () => {
            if(this.started) {
                this.stop();
            }else{
                this.start();
            }
        })

        this.gameField = new Field(carrotCount, bugCount);  
        this.gameField.setClickListener(this.onItemClick);

    }
    
    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }

    start(){
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.playBackground();
    }

    stop(){
        this.started = false;
        this.stopGameTimer();
        this.hideGameButton();
        sound.playAlert();
        sound.stopBackground();
        this.onGameStop && this.onGameStop('cancel');
    }


    finish(win){
        this.started = false;
        this.hideGameButton();
        if(win){
            sound.playWin();
        }else{
            sound.playBug();
        }
        sound.stopBackground();
        this.stopGameTimer();
        this.onGameStop && this.onGameStop(win? 'win' : 'lose');
    }

    
    showStopButton(){
        const icon = this.gameBtn.querySelector('.fa');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }

    hideGameButton(){
        this.gameBtn.style.visibility = 'hidden';
    }

    showTimerAndScore(){
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }

    startGameTimer(){
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);
        this.timer = setInterval(()=>{
            if(remainingTimeSec <= 0){
                clearInterval(this.timer);
                this.finish(this.carrotCount === this.score);
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000)
    }

    stopGameTimer(){
        clearInterval(this.timer);
    }

    updateTimerText(time){
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`;
    }

    initGame(){
        this.score = 0;
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init();
    }

    onItemClick = (item)=>{
        if(!this.started){
            return;
        }
        if(item === 'carrot'){
            this.score++;
            this.updateScoreBoard();
            if(this.score === this.carrotCount){
                this.finish(true)
            }
        }else if(item === 'bug'){
            this.finish(false);
        }
    }

    updateScoreBoard(){
        this.gameScore.innerText = this.carrotCount - this.score;
    }



}
