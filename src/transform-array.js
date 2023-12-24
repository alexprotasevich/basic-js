/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case "--discard-next":
        index++;
        break;
      case "--discard-prev":
        if (index && arr[index - 2] !== "--discard-next") {
          result.pop();
        }
        break;
      case "--double-next":
        if (index < arr.length - 1) {
          result.push(arr[index + 1]);
        }
        break;
      case "--double-prev":
        if (index && arr[index - 2] !== "--discard-next") {
          result.push(arr[index - 1]);
        }
        break;
      default:
        result.push(arr[index]);
        break;
    }
  }

  return result;
}

module.exports = {
  transform,
};
