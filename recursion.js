function countDown(num) {
  if (num <= 0) {
    console.log(`all done`);
    return
  }
  console.log(num)
  num--;
  countDown(num);
}

countDown(7);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(4));


function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4));

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1, 2, 4, 6, 7]));

// fibonacci

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}
console.log(recursiveRange(5));

function strReveerse(str) {
  if (str.length <= 1) return str;
  return strReveerse(str.slice(1)) + str[0];
}
console.log(strReveerse("hemant"));

console.log("hemant".slice("hemant".length-2));

function isPalindrom(str) {
  if (str.length === 1) return true;       
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrom(str.slice(1, -1));
  return false;
}
console.log(isPalindrom('jahaj'));

