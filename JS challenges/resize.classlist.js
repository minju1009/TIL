const body = document.querySelector('body');
const fullScreenWidth = window.screen.width;

function handleResize() {
    const currentWidth = window.innerWidth;
    if(currentWidth <= fullScreenWidth*0.5){
        body.classList.remove("yellow","violet");
        body.classList.add("blue");
    } else if(currentWidth > fullScreenWidth*0.8){
        body.classList.remove("blue","violet");
        body.classList.add("yellow");
    } else if(currentWidth>fullScreenWidth*0.5 && currentWidth <= fullScreenWidth*0.8){
        body.classList.remove("blue","yellow");
        body.classList.add("violet");
    }
}

window.addEventListener("resize", handleResize);
