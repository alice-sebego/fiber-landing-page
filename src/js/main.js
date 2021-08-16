const $cardsDev = document.querySelectorAll(".slider > aside");
const $next = document.querySelector(".left");
const $previous = document.querySelector(".right");
let index = 0;

const nextSlide = () => {

    if(index < 2){

        $cardsDev[index].classList.remove('active');
        index++;
        $cardsDev[index].classList.add('active');

    } else if (index === 2) {

        $cardsDev[index].classList.remove('active');
        index = 0;
        $cardsDev[index].classList.add('active');

    }

}

const previousSlide = () => {

    if(index > 0){

        $cardsDev[index].classList.remove('active');
        index--;
        $cardsDev[index].classList.add('active');

    } else if (index === 0) {

        $cardsDev[index].classList.remove('active');
        index = 2;
        $cardsDev[index].classList.add('active');

    }
    
}

let intervalId = setInterval(nextSlide, 9000);

$next.addEventListener("click", () => {
    clearInterval(intervalId);
    nextSlide();
});

$previous.addEventListener("click", () => {
    clearInterval(intervalId);
    previousSlide();
});

const keyPressed = (event) => {
    clearInterval(intervalId);
    switch (event.code) {
        case "ArrowLeft":
            previousSlide();
            break;
        case "ArrowRight":
            nextSlide();
            break;
    }
}

document.addEventListener("keydown", keyPressed);