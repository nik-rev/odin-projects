const unsorted1 = [
  3, 2, 1, 13, 8, 5, 0, 1, 534, 234, 11, 324, 324, 23, 234, 2342, 2, 2, 42234,
  2, 43234, 534, 5, 43, 543, 33, 445, 3345, 34, 5, 33, 2, 342,
];
const unsorted2 = [105, 79, 100, 110];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.ceil(array.length / 2);
  const arr1 = array.slice(0, middle);
  const arr1modified = mergeSort(arr1);
  const arr2 = array.slice(middle);
  const arr2modified = mergeSort(arr2);

  let sortedArray = [];

  while (true) {
    if (arr1modified.length === 0) {
      sortedArray = [...sortedArray, ...arr2modified];
      return sortedArray;
    }
    if (arr2modified.length === 0) {
      sortedArray = [...sortedArray, ...arr1modified];
      return sortedArray;
    }
    if (arr1modified.at(0) >= arr2modified.at(0)) {
      sortedArray.push(arr2modified.shift());
    }
    if (arr1modified.at(0) < arr2modified.at(0)) {
      sortedArray.push(arr1modified.shift());
    }
  }
}

document.getElementById("unsorted-data").textContent = `Unsorted: ${unsorted1}`;
document.getElementById("sorted-data").textContent = `Merge sorted: ${mergeSort(
  unsorted1
)}`;
