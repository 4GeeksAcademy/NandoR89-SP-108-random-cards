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



