import renderGameboard from './renderGameboard';
import Player from '../classes/Player';

const contentDiv = document.getElementById('content');
const player1 = new Player('player1');
const player2 = new Player('player2');

const player1BoardDiv = renderGameboard(player1.getBoard());
const player2BoardDiv = renderGameboard(player2.getBoard());

contentDiv.appendChild(player1BoardDiv);
contentDiv.appendChild(player2BoardDiv);
