// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  let swapsThisTime = true;
  while (swapsThisTime) {
    swapsThisTime = false;
    for (let i = 0; i < array.length - 1; i++) {
      let currentValue = array[i];
      let nextValue = array[i + 1];
      if (nextValue < currentValue) {
        swap(array, i, i + 1);
        swapsThisTime = true;
      }
    }
  }
}

module.exports = {
  bubbleSort,
  swap
};
