let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(arr) {
    let total = 0; // Initialize total to 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; // Add the array element to total
    }
    return total; // Return the total after the loop
}

console.log(sum(array)); // Outputs: 45
