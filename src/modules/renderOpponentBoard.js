/**
 * Takes in a Gameboard and returns a div containing the rendered board state,
 * differentiating only between 'hit', 'miss' and 'unknown' cell states.
 * Intended to be the view of the opponent's board where a player is making
 * attack guesses.
 */
const renderOpponentBoard = (board) => {
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

      if (coordinateState === 'hit') {
        cell.classList.add('hit');
      } else if (coordinateState === 'miss') {
        cell.classList.add('miss');
      } else {
        cell.classList.add('unknown');
      }

      boardDiv.appendChild(cell);
    }
  }

  return boardDiv;
};

export default renderOpponentBoard;
