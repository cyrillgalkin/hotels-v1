function findCommonDivisors(arr) {
  const minValue = Math.min(...arr);
  const commonDivisors = [];

  for (let num = 2; num <= minValue; num++) {
    if (arr.every((element) => element % num === 0)) {
      commonDivisors.push(num);
    }
  }

  return commonDivisors;
}

console.log(findCommonDivisors([42, 12, 18]));
