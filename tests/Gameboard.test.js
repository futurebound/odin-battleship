import Gameboard from '../modules/classes/Gameboard';
import Ship from '../modules/classes/Ship';

const setupBasicBoard = () => {
  const board = new Gameboard();
  const ship3 = new Ship(3);
  const coordinates = [
    [0, 0],
    [0, 1],
    [0, 2],
  ];
  board.addShip(ship3, coordinates);
  return board;
};

test('receiveAttack() properly updates missed coordinates', () => {
  const attack = [1, 0]; // miss
  const board = setupBasicBoard();
  expect(board.numMissedAttacks()).toBe(0);
  board.receiveAttack(attack); // should miss
  expect(board.numMissedAttacks()).toBe(1);
  expect(board.hasMissedAttack(attack)).toBe(true);
  expect(board.locationState.get(JSON.stringify([1, 0]))).toBe('miss');
});

test('receiveAttack() properly updates to correct misses on hit', () => {
  const attack = [0, 1]; // hit
  const board = setupBasicBoard();
  expect(board.numMissedAttacks()).toBe(0);
  board.receiveAttack(attack); // should hit
  expect(board.numMissedAttacks()).toBe(0);
  expect(board.hasMissedAttack(attack)).toBe(false);
  expect(board.locationState.get(JSON.stringify([0, 1]))).toBe('hit');
});

test('gameIsOver() properly triggers with single sunk ship', () => {
  const attack = [0, 1]; // hit
  const board = setupBasicBoard();
  expect(board.numMissedAttacks()).toBe(0);
  board.receiveAttack(attack); // should hit
  expect(board.numMissedAttacks()).toBe(0);
  expect(board.hasMissedAttack(attack)).toBe(false);
  expect(board.locationState.get(JSON.stringify([0, 1]))).toBe('hit');

  expect(board.gameIsOver()).toBe(false);
  board.receiveAttack([0, 0]); // should hit
  expect(board.locationState.get(JSON.stringify([0, 0]))).toBe('hit');

  expect(board.gameIsOver()).toBe(false);
  board.receiveAttack([0, 2]); // should hit
  expect(board.locationState.get(JSON.stringify([0, 2]))).toBe('hit');

  expect(board.gameIsOver()).toBe(true);
});
