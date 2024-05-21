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
    this.hits = 0;
    this.length = length;
  }

  hit() {
    if (this.hits < this.length) this.hits++;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}
