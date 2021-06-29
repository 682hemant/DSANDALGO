
// linear search
function linearSearch(arr,num){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === num){
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1,2,3,4,5],5));


// Binary search
function binarySearch(arr,num){
  left = 0;
  right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while(left < right){
    if(arr[mid] === num){
      return mid;
    }
    else if(arr[mid] < num){
      left = mid + 1;
    }
    else {
      right = mid -1;
    }
  }
}

// naive string algorithm


function naiveSearch(long , short){
  let count = 0
  for(let i = 0 ; i < long.length;  i++){
    for(let j = 0 ;j < short.length; j++){
      if(short[j] !== long[i + j]) break;
      if( j === short.length-1) count++
    }
  }
  return count;
}
console.log(naiveSearch("hemant","hem"));

