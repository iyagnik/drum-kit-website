
var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    changeButton(this.innerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  playSound(event.key);
  changeButton(event.key);
});


function playSound(key) {
  switch (key) {
    case "W":
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "A":
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "S":
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "D":
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "J":
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "K":
    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "L":
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
  }
}

function changeButton(currentKey) {
  var pressedButton = document.querySelector("." + currentKey);
  pressedButton.classList.add("pressed");

  setTimeout(function () {
    pressedButton.classList.remove("pressed");
  }, 100);

}
