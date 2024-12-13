const numbers = [1, 2, 3, 4]
const letters = ['a', 'b']

function printLists (listOne, listTwo) {
  for (let i = 0; i < listOne.length; i++) {
    console.log(listOne[i])
  }

  for (let i = 0; i < listTwo.length; i++) {
    console.log(listTwo[i])
  }
}

printLists(numbers, letters)

