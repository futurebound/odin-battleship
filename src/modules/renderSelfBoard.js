/**
 * Takes in a Gameboard and returns a div containing the rendered board state.
 * Renders a view of one's own board state, including ship locations and opponent
 * attacks as either hits or misses.
 */
const renderSelfBoard = (board) => {
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('gameboard');

  const size = board.getBoardSize();
  const boardStateMap = board.getBoardState();
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const coordinate = [col, row];
      const coordinateState = boardStateMap.get(JSON.stringify(coordinate));

      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.col = col;
      cell.dataset.row = row;

      if (coordinateState === 'ship') {
        cell.classList.add('ship');
      } else if (coordinateState === 'hit') {
        cell.classList.add('hit');
      } else if (coordinateState === 'miss') {
        cell.classList.add('miss');
      } else {
        cell.classList.add('empty');
      }

      boardDiv.appendChild(cell);
    }
  }

  return boardDiv;
};

export default renderSelfBoard;
