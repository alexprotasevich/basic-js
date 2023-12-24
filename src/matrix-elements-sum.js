/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;

  for (let columnId = 0; columnId < matrix[0].length; columnId++) {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      if (matrix[rowIndex][columnId]) {
        result += matrix[rowIndex][columnId];
      } else {
        break;
      }
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum,
};
