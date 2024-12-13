const drinks = ['water', 'coffee']
const persons = ['person 1', 'person 2', 'person 3', 'person 4']

// function recieves 2 different inputs, let's call them 'a' and 'b'
function servingDrinks(drinkList, personsList) {
  // iterates through input 'drinkList' -> O(a) Linear time
  for (let i = 0; i < drinkList.length; i++) {
    // iterates through input 'personsList' -> O(b) Linear time
    for (let j = 0; j < personsList.length; j++) {
      console.log(`Gives ${drinkList[i]} to ${personsList[j]}`)
    }
  }
}

servingDrinks(drinks, persons)