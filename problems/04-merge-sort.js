// Implement Merge Sort

function merge(array1, array2) {
  let merged = [];
  console.log(array1, array2)
  while (array1.length || array2.length) {
    // let array1Num;
    // let array2Num;
    // if (array1.length > 0) {
      let array1Num = array1[0];
    // }
    // if (array2.length > 0) {
      let array2Num = array2[0];
    //}
    console.log(array1Num, array2Num)
    if( array1Num <= array2Num){
       merged.push(array1.shift())
       //console.log(merged);
    } else if (array2.length === 0 && array1.length > 0) {
      merged.push(array1.shift());
      //console.log(merged);
    } else {
      merged.push(array2.shift())
      //console.log(merged);
    }

  }
  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let middleIndex = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, middleIndex);
  let rightHalf = array.slice(middleIndex);
  let leftSorted = mergeSort(leftHalf);
  let rightSorted = mergeSort(rightHalf);
  return merge(leftSorted, rightSorted);
}

module.exports = {
  merge,
  mergeSort
};
