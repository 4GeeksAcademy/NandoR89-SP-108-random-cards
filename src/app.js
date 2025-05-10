import "bootstrap";
import "./style.css";


window.generateRandomCard = function generateRandomCard() {

  let symbols = ['♠', '♥', '♦', '♣'];
  let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

  let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  let randomRank = rank[Math.floor(Math.random() * rank.length)];

  let symbolUp = document.querySelector('#symbol-up');
  symbolUp.innerHTML = randomSymbol;

  let symbolDown = document.querySelector('#symbol-down');
  symbolDown.innerHTML = randomSymbol;

  let modifyRank = document.querySelector('#rank');
  modifyRank.innerHTML = randomRank;

  let colorSymbol = (randomSymbol === '♥' || randomSymbol === '♦') ? 'red' : 'black';
  symbolUp.style.color = colorSymbol;
  symbolDown.style.color = colorSymbol;

}
  
setInterval(generateRandomCard, 5000);

window.sizeCard = function sizeCard() {

  let card = document.querySelector('.card')
  let heightInput = document.querySelector('#heightInput')
  let widthInput = document.querySelector('#widthInput')

  if (heightInput.value) {
    card.style.height = heightInput.value + 'px';
  }   if (!heightInput.value) {
    card.style.height = '';
  }

    if (widthInput.value) {
    card.style.width = widthInput.value + 'px';
  } if (!widthInput.value) {
    card.style.width = '';
  }

}