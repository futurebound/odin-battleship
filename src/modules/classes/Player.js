/**
 * Player class to represent both human & computer players.
 * Player's hold a reference to their own Gameboards.
 */

import Gameboard from './Gameboard';

class Player {
  constructor(name) {
    this.board = new Gameboard();
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  getBoard() {
    return this.board;
  }

  makeAttack(coordinate) {}
}

export default Player;
