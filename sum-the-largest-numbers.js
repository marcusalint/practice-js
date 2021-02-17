const sumLargestNumbers = function(data) {
  let sortedArray = data.sort((a, b) => a - b)

  let largestNumber = sortedArray[sortedArray.length - 1]
  let secondLargestNumber = sortedArray[sortedArray.length - 2]
  
  let sum = largestNumber + secondLargestNumber
  return sum
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


// Expected Output:
// 11
// 5
// 126
