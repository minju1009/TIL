const currentWidth = window.innerWidth;
const fullScreenWidth = window.screen.width;
const body = document.querySelector('body');

function handleResize(){
    const currentWidth = window.innerWidth;
  if(currentWidth <= fullScreenWidth * 0.5){
    body.style.backgroundColor = "#2d8cd5"; 
  }else if(currentWidth > fullScreenWidth * 0.9){
    body.style.backgroundColor = "#914ead";
  }else if(currentWidth>fullScreenWidth*0.5 && currentWidth<=fullScreenWidth*0.9){
    body.style.backgroundColor = "#eebc11";
  }
}

window.addEventListener("resize", handleResize);

console.log(currentWidth, body.style.backgroundColor);