class TicTacToe {

  constructor() {
    this.counter = 0; 
    this.currentPlayer = "x"; 
    this.winner = null; 
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {  
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {   
    if (this.gameField[rowIndex][columnIndex] === null) {
      this.gameField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
      this.counter++;
      return true;
    }
    return false;
  }

  isFinished() {   
    return this.getWinner() !== null || this.isDraw();
  }

  getWinner() {   
    let arr = this.gameField;

    arr.forEach((item) => {
      if (item[0] === item[1] && item[0] === item[2] && item[0] !== null) {
        this.winner = item[0];
        return item[0];
      }
    });

    for (let i = 0; i < 3; i++) {
      if (
        arr[0][i] === arr[1][i] &&
        arr[0][i] === arr[2][i] &&
        arr[0][i] !== null
      ) {
        this.winner = arr[0][i];
        return arr[0][i];
      }
    }

    if (
      arr[1][1] === arr[0][0] &&
      arr[1][1] === arr[2][2] &&
      arr[1][1] !== null
    ) {
      this.winner = arr[1][1];
      return arr[1][1];
    }

    if (
      arr[1][1] === arr[0][2] &&
      arr[1][1] === arr[2][0] &&
      arr[1][1] !== null
    ) {
      this.winner = arr[1][1];
      return arr[1][1];
    }

    return this.winner;
  }

  noMoreTurns() {
    // return this.counter >= 9;
    let result = true;
    for (let i = 0; i < 3; i++) {
      if (this.gameField[i].includes(null)) {
        result = false;
      }
    }
    return result;
  }

  isDraw() {
    return this.noMoreTurns() && this.getWinner() === null;
  }

  getFieldValue(rowIndex, colIndex) {
    // return this.map[rowIndex][colIndex];
    if (rowIndex <= 3 && colIndex <= 3) {
      return this.gameField[rowIndex][colIndex];
    } else {
      return null;
    }
  }
}

module.exports = TicTacToe;
