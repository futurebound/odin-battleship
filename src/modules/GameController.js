import renderOpponentBoard from './renderOpponentBoard.js';
import renderSelfBoard from './renderSelfBoard.js';
import Player from './classes/Player.js';
import Ship from './classes/Ship.js';

class GameController {
  constructor() {}

  startNewGame() {
    const contentDiv = document.getElementById('content');

    const player = new Player('player1');
    const opponent = new Player('computer');

    const playerBoard = player.getBoard();
    const opponentBoard = opponent.getBoard();

    // add ships to boards
    playerBoard.addShip(new Ship(1), [[0, 0]]);
    playerBoard.addShip(new Ship(2), [
      [2, 0],
      [2, 1],
    ]);
    playerBoard.addShip(new Ship(3), [
      [0, 3],
      [1, 3],
      [2, 3],
    ]);

    opponentBoard.addShip(new Ship(1), [[1, 0]]);
    opponentBoard.addShip(new Ship(2), [
      [3, 1],
      [3, 2],
    ]);
    opponentBoard.addShip(new Ship(3), [
      [1, 4],
      [2, 4],
      [3, 4],
    ]);

    const playerBoardDiv = renderSelfBoard(playerBoard);
    const opponentBoardDiv = renderOpponentBoard(opponentBoard);
    contentDiv.appendChild(playerBoardDiv);
    contentDiv.appendChild(opponentBoardDiv);
  }

  checkEndGame() {}
}

export default GameController;
