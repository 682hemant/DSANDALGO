//  buttble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([13, 12, 15, 9, 20, 21]));

// selection sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort([3, 18, 4, 2, 35, 0]))

// insertion sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// merge sort

// merging arrays

function merge(arr1, arr2) {
  let results = []
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++
    }

  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  return results;

}

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left,right);
}

console.log(mergeSort([10,24,76,73,72,1,9]));


// quick sort



function pivot(arr,start=0,end=arr.length+1){
  function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;
  for(let i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i)
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}
console.log(pivot([9,4,8,2,1,5,7,6,3]))



