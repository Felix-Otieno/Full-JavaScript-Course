const numbers = [1, 2, 3, 4, 5, 6]

// function recieves a single input
function printFirstHalf (list) {
  // iterates through list -> O(n) Linear time
  for (let i = 0; i < list.length / 2; i++) {
    console.log(list[i])
  }
}

printFirstHalf(numbers)
// Big O total => O (n / 2)

/* 
OUTPUT:
1
2
3
*/