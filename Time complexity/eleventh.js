const numbers = [1, 2, 3]

// function recieves a single input
function printTwiceForNoReason (list) {
  // iterates through list -> O(n) Linear time
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
  }
  // iterates through the same list again -> O(n) Linear time
  for (let j = 0; j < list.length; j++) {
    console.log(list[j])
  }
}

printTwiceForNoReason(numbers)

// Big O total => O (n + n) => O (2n)

/*
OUTPUT:
1
2
3
1
2
3
*/