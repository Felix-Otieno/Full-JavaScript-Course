const guests = ['John', 'Jane', 'Adam', 'Olivia', 'Alan', 'Amy', 'Joe']

function bookTables (list) {
  // Declares variable - let tables -> O(1)
  let tables = []
  // Declares variable - let i -> O(1)
  for (let i = 0; i < list.length; i++) {
    // Pushes values based on the list length - O(n)
    tables.push(`Table ${i + 1} is reserved for ${list[i]}`)
  }
  return tables
}

// Big O total => O(1) + O(1) + O(n)
// Big O space complexity after dropping constants => O(n) Linear

const bookedList = bookTables(guests)
console.log(bookedList)

/* OUTPUT:
[
  'Table 1 is reserved for John',
  'Table 2 is reserved for Jane',
  'Table 3 is reserved for Adam',
  'Table 4 is reserved for Olivia',
  'Table 5 is reserved for Alan',
  'Table 6 is reserved for Amy',
  'Table 7 is reserved for Joe'
]
*/