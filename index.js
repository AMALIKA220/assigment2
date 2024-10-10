//Even number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

// Loop through the array and check for even numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    // Check if the number is even
    evenNumbers.push(numbers[i]); // Add even number to the new array
  }
}

// Print the even numbers
console.log("Even numbers:", evenNumbers);