import renderGameboard from './modules/renderGameboard.js';
import Player from './modules/classes/Player.js';

const contentDiv = document.getElementById('content');
console.log(contentDiv);

const player1 = new Player('player1');
const player2 = new Player('player2');

const player1BoardDiv = renderGameboard(player1.getBoard());
const player2BoardDiv = renderGameboard(player2.getBoard());
console.log(player1BoardDiv);
console.log(player2BoardDiv);

contentDiv.appendChild(player1BoardDiv);
contentDiv.appendChild(player2BoardDiv);
