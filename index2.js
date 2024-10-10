//odd number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = [];

// Loop through the array and check for odd numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    // Check if the number is odd
    oddNumbers.push(numbers[i]); // Add odd number to the new array
  }
}

// Print the odd numbers
console.log("Odd numbers:", oddNumbers);
