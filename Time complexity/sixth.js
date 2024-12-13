const productList = [
    { name: 'Laptop', price: 18487 },
    { name: 'Keyboard', price: 356 },
    { name: 'Monitor', price: 8345 },
    // ...assuming 10000 more items here in between
    { name: 'Tablet', price: 9875 },
  ]
  
  function lookupPrice (name, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === name) {
        console.log(`Price of '${list[i].name}' is: ${list[i].price}`)
        break;
      }
    }
  }
  
  lookupPrice('Monitor', productList) 
  // => OUTPUT: "Price of 'Monitor' is: 8345"