// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (min != i) {
      swap(list, i, min);
    }
  }
}

module.exports = {
  selectionSort,
  swap
};
