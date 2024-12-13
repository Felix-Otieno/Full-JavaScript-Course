const unsortedNrs = [4,2,6,3,1,5,9,7,8,10]

const twoSumBrute = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[i] + list[j] === target) {
          return [i, j]
      }
    }
  }
}

console.log(twoSumBrute(unsortedNrs, 7));
// OUTPUT => [0, 3]