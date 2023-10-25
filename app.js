const diceOne = document.getElementById("imgOne");
const diceTwo = document.getElementById("imgTwo");
const title = document.getElementById("title");
const rollBtn = document.getElementById('rollBtn')

const imageArray = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];

let randomIndexOne = Math.floor(Math.random() * imageArray.length);

let randomIndexTwo = Math.floor(Math.random() * imageArray.length);

let resultOne = (diceOne.src = imageArray[randomIndexOne]);
let resultTwo = (diceTwo.src = imageArray[randomIndexTwo]);

if (resultOne > resultTwo) {
  title.innerHTML = "Player One Wins ";
} else if (resultOne < resultTwo) {
  title.innerHTML = "Player Two Wins";
} else if (resultOne === resultTwo && resultTwo === resultOne) {
  title.innerHTML = "Draw";
}

rollBtn.addEventListener('click', () => {
    location.reload()
})
