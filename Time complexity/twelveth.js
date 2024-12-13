const fruits = ["apple", "strawberry", "watermelon"]

// function recieves a single input
function printAndPair (arr) {
  // iterates through list -> O(n) Linear time
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  
  // declares variable -> O(1) Constant time
  const totalPairs = arr.length * arr.length
  // prints given value -> O(1) Constant time
  console.log('Estimated paired elements length:', totalPairs)

  // nested loop using the same array -> O(n ^ 2) Quadratic time
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      console.log(`${arr[j]} - ${arr[k]}`)
    }
  }
}

printAndPair(fruits)

// Big O total => O (n) + O(1) + O(1) + O(n ^ 2)

/*
OUTPUT:
'apple'
'strawberry'
'watermelon'

'Estimated paired elements length:' 9

'apple - apple'
'apple - strawberry'
'apple - watermelon'
'strawberry - apple'
'strawberry - strawberry'
'strawberry - watermelon'
'watermelon - apple'
'watermelon - strawberry'
'watermelon - watermelon'
*/