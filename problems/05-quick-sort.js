// Implement Quick Sort

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter(function (ele) {
    return ele <= pivot;
  });
  let right = array.filter(function (ele) {
    return ele > pivot;
  });
  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);
  return leftSorted.concat([pivot]).concat(rightSorted);
}


module.exports = {
  quickSort
};
