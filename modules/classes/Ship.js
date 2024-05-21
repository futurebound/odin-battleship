/**
 * Ships are objects that include their length, number of times hit, and whether
 * they are sunk yet or not.
 *
 * Only test object's public interface.
 *
 * Should have hit() function to increase # hits on ship.
 * Should have isSunk() function to calculate based on length & # hits received.
 */

class Ship {
  constructor(length) {
    this._hits = 0;
    this.length = length;
  }

  get hits() {
    return this._hits;
  }

  set hits(n) {
    this._hits = n;
  }

  hit() {
    if (this._hits < this.length) this._hits++;
  }

  isSunk() {
    return this._hits >= this.length;
  }
}

export default Ship;
