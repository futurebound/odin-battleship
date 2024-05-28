import renderOpponentBoard from './renderOpponentBoard.js';
import renderSelfBoard from './renderSelfBoard.js';
import Player from './classes/Player.js';
import Ship from './classes/Ship.js';

class GameController {
  constructor() {
    this.player = null;
    this.opponent = null;
    this.currentPlayer = null;
  }

  startNewGame() {
    const player = new Player('player1');
    const opponent = new Player('computer');
    this.player = player;
    this.opponent = opponent;
    this.currentPlayer = this.player;

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

    this.renderBoards(playerBoard, opponentBoard); // TODO: put this in own module
  }

  renderBoards(playerBoard, opponentBoard) {
    const contentDiv = document.getElementById('content');
    const player1Div = document.createElement('div');
    player1Div.classList.add('player1');
    const player1Name = document.createElement('h1');
    player1Name.textContent = 'player1';
    player1Div.appendChild(player1Name);

    const player2Div = document.createElement('div');
    player2Div.classList.add('player2');
    const player2Name = document.createElement('h1');
    player2Name.textContent = 'player2';
    player2Div.appendChild(player2Name);

    const playerBoardDiv = renderSelfBoard(playerBoard);
    const opponentBoardDiv = renderSelfBoard(opponentBoard);
    player1Div.appendChild(opponentBoardDiv);
    player2Div.appendChild(playerBoardDiv);

    // testing
    const opponentViewDiv = renderOpponentBoard(opponentBoard);
    const playerViewDiv = renderOpponentBoard(playerBoard);
    player1Div.appendChild(opponentViewDiv);
    player2Div.appendChild(playerViewDiv);

    contentDiv.appendChild(player1Div);
    contentDiv.appendChild(player2Div);
  }

  checkEndGame() {}
}

export default GameController;
