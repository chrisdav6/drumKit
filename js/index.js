let drums = document.querySelectorAll(".drum");
let sounds = {
  crash: new Audio("sounds/crash.mp3"),
  kick: new Audio("sounds/kick-bass.mp3"),
  snare: new Audio("sounds/snare.mp3"),
  tom1: new Audio("sounds/tom-1.mp3"),
  tom2: new Audio("sounds/tom-2.mp3"),
  tom3: new Audio("sounds/tom-3.mp3"),
  tom4: new Audio("sounds/tom-4.mp3")
};

function switching(switchVar) {
  switch(switchVar) {
    case "w":
      sounds.crash.play();
      break;
    case "a":
      sounds.kick.play();
      break;
    case "s":
      sounds.snare.play();
      break;
    case "d":
      sounds.tom1.play();
      break;
    case "j":
      sounds.tom2.play();
      break;
    case "k":
      sounds.tom3.play();
      break;
    case "l":
      sounds.tom4.play();
      break;
  }
}
  
drums.forEach(function(drum) {
  drum.addEventListener("click", function(e) {
    let keyLetter = e.target.innerText;
    console.log(keyLetter);
    switching(keyLetter);
  });
});

document.addEventListener("keypress", function(e) {
  let keyCode = String.fromCharCode(e.keyCode);
  console.log(keyCode);
  switching(keyCode);
});