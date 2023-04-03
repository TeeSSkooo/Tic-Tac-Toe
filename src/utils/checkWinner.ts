export default function checkWinner(gameField: string[][]) {
  for (let row = 0; row < 3; row++) {
    if (
      gameField[row][0] === gameField[row][1] &&
      gameField[row][1] === gameField[row][2] &&
      gameField[row][0] !== ''
    ) {
      return gameField[row][0];
    }
  }

  for (let col = 0; col < 3; col++) {
    if (
      gameField[0][col] === gameField[1][col] &&
      gameField[1][col] === gameField[2][col] &&
      gameField[0][col] !== ''
    ) {
      return gameField[0][col];
    }
  }

  if (gameField[0][0] === gameField[1][1] && gameField[1][1] === gameField[2][2] && gameField[0][0] !== '') {
    return gameField[0][0];
  }

  if (gameField[0][2] === gameField[1][1] && gameField[1][1] === gameField[2][0] && gameField[0][2] !== '') {
    return gameField[0][2];
  }

  return null;
}
