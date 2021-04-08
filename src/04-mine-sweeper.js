/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let count = 0;
  const mas = [];
  const arr = matrix;
  let c = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        count--;
        for (let k = -1; k < 2; k++) {
          for (let s = -1; s < 2; s++) {
            if (i + k > -1 && j + s > -1 && i + k < matrix.length && j + s < matrix[i].length) {
              if (matrix[i + k][j + s] === true) {
                count++;
              }
            }
          }
        }
      } else {
        for (let k = -1; k < 2; k++) {
          for (let s = -1; s < 2; s++) {
            if (i + k > -1 && j + s > -1 && i + k < matrix.length && j + s < matrix[i].length) {
              if (matrix[i + k][j + s] === true) {
                count++;
              }
            }
          }
        }
      }
      mas[c] = count;
      c++;
      count = 0;
    }
  }
  c = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i][j] = mas[c];
      c++;
    }
  }
  return arr;
}

module.exports = minesweeper;
