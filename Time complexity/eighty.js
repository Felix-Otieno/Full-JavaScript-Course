const sortedNrs = [1,2,3,4,5,6,7,8,9,10]

const twoSumUsingTwoPointers = (sortedNums, target) => {
  let left = 0;
  let right = sortedNums.length - 1;
  
  while (left < right) {
    let sum = sortedNums[left] + sortedNums[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoSumUsingTwoPointers(sortedNrs, 7));
// OUTPUT => [0, 5]