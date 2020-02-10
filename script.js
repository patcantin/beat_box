const bg = document.querySelector("#padbg");
const touchs = document.querySelectorAll(".touch");
const led = document.querySelector("#led");

const audio1 = new Audio('sounds/1.wav');
const audio2 = new Audio('sounds/2.wav');
const audio3 = new Audio('sounds/3.wav');
const audio4 = new Audio('sounds/4.wav');
const audio5 = new Audio('sounds/5.wav');
const audio6 = new Audio('sounds/6.wav');
const audio7 = new Audio('sounds/7.wav');
const audio8 = new Audio('sounds/8.wav');
const audio9 = new Audio('sounds/09.wav');

touchs.forEach((touch) => {
  touch.addEventListener("mousedown", () => {
    bg.classList.add("bgclick");
    touch.classList.add("pressed");
    let play = eval(touch.id);
    play.play();
    led.classList.add("green");
  });
  touch.addEventListener("mouseup", () => {
    bg.classList.remove("bgclick");
    touch.classList.remove("pressed");
    led.classList.remove("green");
  });
});

const keyNumber = { 49:"audio1", 50:"audio2", 51:"audio3", 52:"audio4", 53:"audio5", 54:"audio6", 55:"audio7", 56:"audio8", 57:"audio9" };

window.addEventListener("keydown", event => {
  const test = keyNumber[event.keyCode];
  const key = document.getElementById(test);
  if (keyNumber.hasOwnProperty(event.keyCode)) {
    audio = eval(keyNumber[event.keyCode]);
    audio.play();
    key.classList.add("pressed");
    led.classList.add("green");4
  }

  window.addEventListener("keyup", event => {
    const test = keyNumber[event.keyCode];
    const key = document.getElementById(test);
    if (keyNumber.hasOwnProperty(event.keyCode)) {
      key.classList.remove("pressed");
      led.classList.remove("green");
    }
  });
});













