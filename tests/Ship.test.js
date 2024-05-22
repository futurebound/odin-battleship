import Ship from '../src/modules/classes/Ship';

test('big ship not sunk with less than 4 hits', () => {
  const bigShip = new Ship(4);
  expect(bigShip.isSunk()).toBe(false);
  bigShip.hit();
  expect(bigShip.isSunk()).toBe(false);
  bigShip.hit();
  bigShip.hit();
  expect(bigShip.isSunk()).toBe(false);
  bigShip.hit();
  expect(bigShip.isSunk()).toBe(true);
});

test('small ship not sunk with less than 1 hits', () => {
  const smallShip = new Ship(1);
  expect(smallShip.isSunk()).toBe(false);
  smallShip.hit();
  expect(smallShip.isSunk()).toBe(true);
});
