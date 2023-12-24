/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  return str.split("").reduce((acc, item, index, array) => {
    if (item === array[index + 1]) {
      count++;
    } else {
      acc = `${acc}${count === 1 ? "" : count}${item}`;
      count = 1;
    }

    return acc;
  }, "");
}

module.exports = {
  encodeLine,
};
