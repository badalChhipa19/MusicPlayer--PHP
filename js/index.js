function fillHeartIcon() {
  console.log("Heart icon pressed");
  let heartIcon = document.querySelector(".heart_icon");
  if (heartIcon.style.fill == "red") {
    heartIcon.style.fill = "white";
  } else {
    heartIcon.style.fill = "red";
  }
}

function fillMenuIcon() {
  let menuContainer = document.querySelector(".menuContainer");
  console.log("Menu icon pressed");
  if (menuContainer.style.visibility == "visible") {
    menuContainer.style.visibility = "hidden";
  } else {
    menuContainer.style.visibility = "visible";
  }
}

let resumeButton = 0;

function onResume() {
  let resumeIcon = document.querySelector("#resume_icon");
  // console.log("Resume icon pressed");
  if (resumeButton == 0) {
    resumeIcon.setAttribute(
      "xlink:href",
      "img/sprite.svg#icon-controller-play"
    );
    document.querySelector(".musicPlayed").style.animationPlayState = "paused";

    resumeButton += 1;
  } else {
    resumeIcon.setAttribute(
      "xlink:href",
      "img/sprite.svg#icon-controller-paus"
    );
    document.querySelector(".musicPlayed").style.animationPlayState = "running";
    resumeButton = 0;
  }
}

let loopButton = 0;
function onLoop() {
  let loopIcon = document.querySelector("#loop_icon");
  // console.log("Resume icon pressed");
  if (loopButton == 0) {
    loopIcon.style.fill = "white";
    loopButton += 1;
  } else {
    loopIcon.style.fill = "#5e5a5a";
    loopButton = 0;
  }
}

let shuffleButton = 0;
function onShuffle() {
  let shuffleIcon = document.querySelector("#shuffle_icon");
  // console.log("Resume icon pressed");
  if (shuffleButton == 0) {
    shuffleIcon.style.fill = "white";
    shuffleButton += 1;
  } else {
    shuffleIcon.style.fill = "#5e5a5a";
    shuffleButton = 0;
  }
}

let volumeButton = 0;
function onVolume() {
  let volumeIcon = document.querySelector("#volume_icon");
  if (volumeButton == 0) {
    volumeIcon.textContent = "volume_off";
    volumeButton += 1;
  } else {
    volumeIcon.textContent = "volume_up";
    volumeButton = 0;
  }
}

let queueButton = 0;
function onQueue() {
  console.log("you clicked the queue button");

  if (queueButton == 0) {
    document.querySelector(".queueContainer").style.right = "-5%";
    queueButton = queueButton + 1;
  } else {
    document.querySelector(".queueContainer").style.right = "-28%";
    queueButton = 0;
  }
}
