// Implement Insertion Sort

function insertionSort(list) {
  //console.log(list);
  for(let i = 0; i < list.length; i++){
    const currentNum = list[i];
    let holePosition = i;
    for(let j = i - 1; j >= 0 && list[j] > currentNum; j--){
      list[j + 1] = list[j];
      holePosition = j;
    }
    list[holePosition] = currentNum;
  }
  return list;
}

module.exports = {
  insertionSort
};
