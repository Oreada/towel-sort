
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let resultArray = [];

  if (matrix) {
    for (let i = 1; i < matrix.length; i += 2) {
      matrix[i] = matrix[i].reverse();
    };

    matrix.forEach((innerArray) => resultArray.push(...innerArray));
  };

  return resultArray;
};
