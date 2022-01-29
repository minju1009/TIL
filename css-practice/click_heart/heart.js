const heart = document.querySelector("div");
const emptyHeart = document.querySelector(".empty")
const fullHeart = document.querySelector(".full");

heart.addEventListener("click", () => {
    emptyHeart.classList.toggle("hidden");
    fullHeart.classList.toggle("hidden");
})
