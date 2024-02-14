function every(array, test) {
  let ret = true;
  for (const n of array) {
    if (ret) ret = test(n);
  }
  return ret
}

function every2(array, test) {
  return !array.some(a => {
    return !test(a);
  });
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true