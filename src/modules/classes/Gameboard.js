/**
 * Gameboards should be able to place ships at specific coordinates by calling
 * the Ship class.
 *
 * Should have receiveAttack() that takes a pair of coordinates, determines whether
 * attack hit a ship or not, and send the hit() function to the correct ship or
 * records the coordinates of the missed shot.
 *
 * Track missed attacks to display them properly (Set?)
 *
 * Able to report whether or not all ships have been sunk.
 */

class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.missedAttacks = 0;
    this.sunkShips = 0;
    this._ships = new Map();
    this.boardState = this.initializeBoardState();
  }

  /**
   * Populates and returns a Map representing initial unknown board state
   */
  initializeBoardState() {
    const boardState = new Map();
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        const coordinate = [x, y];
        boardState.set(JSON.stringify(coordinate), 'unknown');
      }
    }

    return boardState;
  }

  getBoardState() {
    return this.boardState;
  }

  getBoardSize() {
    return this.size;
  }

  /**
   * Adds a Ship with given coordinates to the Gameboard.
   * e.g. ShipA -> [[0, 0] [0, 1], [0, 2]]
   */
  addShip(ship, coordinates) {
    if (!this._ships.has(ship)) {
      const shipCoordinates = new Set();
      coordinates.forEach((coordinate) => {
        shipCoordinates.add(JSON.stringify(coordinate));
      });
      this._ships.set(ship, shipCoordinates);
    }
  }

  numMissedAttacks() {
    return this.missedAttacks;
  }

  hasMissedAttack(coordinate) {
    return this.boardState.get(JSON.stringify(coordinate)) === 'miss';
  }

  getCoordinateState(coordinate) {
    return this.boardState.get(JSON.stringify(coordinate));
  }

  receiveAttack(coordinate) {
    // confirm that attack has not already been made on coordinate to simplify logic
    coordinate = JSON.stringify(coordinate); // for equality checks
    if (this.boardState.get(coordinate) !== 'unknown') {
      throw new Error('invalid input: attack coordinate already entered');
    }

    // check all ships to see if attack is a hit on any
    this._ships.forEach((shipCoordinates, ship) => {
      // console.log(ship);
      // console.log(coordinates);
      if (shipCoordinates.has(coordinate)) {
        ship.hit();
        // console.log(ship);
        this.boardState.set(coordinate, 'hit');
        if (ship.isSunk()) {
          this.sunkShips++;
          if (this.gameIsOver()) {
            console.log('all ships sunk! game over!');
          }
        }
      }
    });

    // not a hit, add to misses
    if (this.getCoordinateState(coordinate) !== 'hit') {
      this.boardState.set(coordinate, 'miss');
      // console.log(this.boardState.get(attack));
      this.missedAttacks++;
    }
  }

  gameIsOver() {
    return this.sunkShips >= this._ships.size;
  }
}

export default Gameboard;
