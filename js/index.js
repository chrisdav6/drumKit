let drums = document.querySelectorAll(".drum");

//Sounds object
let sounds = {
  crash:  new Audio("sounds/crash.mp3"),
  kick:   new Audio("sounds/kick-bass.mp3"),
  snare:  new Audio("sounds/snare.mp3"),
  tom1:   new Audio("sounds/tom-1.mp3"),
  tom2:   new Audio("sounds/tom-2.mp3"),
  tom3:   new Audio("sounds/tom-3.mp3"),
  tom4:   new Audio("sounds/tom-4.mp3")
};

//Stop sound then restart sound - to be able to play multiple times and not have to wait for sound to end
function stopThenPlay(obj) {
  obj.pause();
  obj.currentTime = 0;
  obj.play();
}

//Switch for key press and clicks
function switching(switchVar) {
  switch(switchVar) {
    case "a":
      stopThenPlay(sounds.crash);
      break;
    case "s":
      stopThenPlay(sounds.kick);
      break;
    case "d":
      stopThenPlay(sounds.snare);
      break;
    case "h":
      stopThenPlay(sounds.tom1);
      break;
    case "j":
      stopThenPlay(sounds.tom2);
      break;
    case "k":
      stopThenPlay(sounds.tom3);
      break;
    case "l":
      stopThenPlay(sounds.tom4);
      break;
    default: 
      console.log("This letter is not asscoiated with a sound");
      break;
  }
}

//Handle Clicks
drums.forEach(function(drum) {
  drum.addEventListener("mousedown", function(e) {
    let keyLetter = e.target.innerText;
    // let keyLetter = e.target.classList[0]; Another way to select by class "w"
    console.log(keyLetter);
    switching(keyLetter);
  });
});

//Handle Keypress
document.addEventListener("keydown", function(e) {
  let keyCode = String.fromCharCode(e.which).toLowerCase();
  console.log(keyCode);
  switching(keyCode);

  //animate drum when key is pressed like a hover event
  drums.forEach(function(drum) {
    if(keyCode == drum.innerText) {
      drum.classList.add("red");
      setTimeout(() => {
        drum.classList.remove("red");
      }, 1);
    }
  });
});