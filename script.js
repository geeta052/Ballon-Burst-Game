// Section: DOM Elements
const balloonContainer = document.getElementById("balloon-container");
const pump = document.getElementById("pump");

// Section: Data Arrays
const balloonAlphabets = [
  "assets/Symbol 10001.png",
  "assets/Symbol 10002.png",
  "assets/Symbol 10003.png",
  "assets/Symbol 10004.png",
  "assets/Symbol 10005.png",
  "assets/Symbol 10006.png"
];
const balloonColors = [
  "assets/Symbol 100001.png",
  "assets/Symbol 100002.png",
  "assets/Symbol 100003.png",
  "assets/Symbol 100004.png",
  "assets/Symbol 100005.png",
  "assets/Symbol 100006.png"
];

// Section: Utility Functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Section: Balloon Creation and Animation
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  const pumpRect = pump.getBoundingClientRect();
  const size = getRandomInt(100, 150);
  const posX = pumpRect.left + pumpRect.width / 2 - size / 2 - 20;
  const posY = pumpRect.top + pumpRect.height / 2 - size / 2;

  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
  balloon.style.left = `${posX}px`;
  balloon.style.top = `${posY}px`;

  const balloonImg = document.createElement("img");
  const randomColor = balloonColors[getRandomInt(0, balloonColors.length - 1)];
  balloonImg.src = randomColor;
  balloonImg.alt = "Balloon";
  balloonImg.style.width = "100%";
  balloonImg.style.height = "100%";
  balloonImg.style.position = "absolute";

  const alphabetImg = document.createElement("img");
  const randomAlphabet = balloonAlphabets[getRandomInt(0, balloonAlphabets.length - 1)];
  alphabetImg.src = randomAlphabet;
  alphabetImg.alt = "Alphabet";
  alphabetImg.classList.add("alphabet");

  balloon.appendChild(balloonImg);
  balloon.appendChild(alphabetImg);
  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.style.transition = "all 10s linear";
    balloon.style.left = `-100px`;
    balloon.style.top = `${getRandomInt(50, 150)}px`;
  }, 100);

  balloon.addEventListener("click", () => {
    balloon.remove();
    playPopSound();
  });
}

// Section: Balloon Inflation
function inflateBalloons() {
  createBalloon();
}

pump.addEventListener("click", inflateBalloons);

// Section: Sound Effects
function playPopSound() {
  const popSound = new Audio("assets/pop.mp3");
  popSound.currentTime = 0;
  popSound.play();
}
