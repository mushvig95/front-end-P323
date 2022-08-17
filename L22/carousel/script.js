const sliderWidth = document.querySelector(".slider-box").offsetWidth;
const sliderContainer = document.querySelector(".slider");
const nextSlideBtn = document.querySelector(".right");
const prevSlideBtn = document.querySelector(".left");
const sliderContainerChildren = sliderContainer.children;
let position = 1;
const sliderCount = document.querySelector(".slider-count");


(function() {
    for(let i = 0; i < sliderContainerChildren.length; i ++) {
        sliderCount.insertAdjacentElement("afterbegin", document.createElement("div"));
    }
    sliderCount.children[0].className = "active"
})();


nextSlideBtn.addEventListener("click", () => {
    for(let i=0; i < sliderContainerChildren.length; i++) {
        if(position === sliderContainerChildren.length) {
            sliderContainerChildren[i].style.transform = `translate(0)`;
        } else {
            sliderContainerChildren[i].style.transform = `translate(-${position * sliderWidth}px)`;
        }
        sliderCount.children[i].classList.remove("active");
    }
    position = position === sliderContainerChildren.length ? 1 : position + 1;
    sliderCount.children[position-1].className = "active";
});

prevSlideBtn.addEventListener("click", () => {
    for(let i=0; i< sliderContainerChildren.length; i++) {
        if(position === 1) {
            sliderContainerChildren[i].style.transform = `translate(-${(sliderContainerChildren.length - 1) * sliderWidth}px)`;
        } else {
            sliderContainerChildren[i].style.transform = `translate(${((position - 1) * -sliderWidth) + sliderWidth}px)`;
        }
        sliderCount.children[i].classList.remove("active");
    }
    position = position === 1 ? sliderContainerChildren.length : position - 1;
    sliderCount.children[position-1].className = "active";
})