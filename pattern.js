//pattern

const rows = 5; // Number of rows

for (let i = rows; i >= 1; i--) {
  let pattern = ""; // Initialize an empty string for each row
  for (let j = 1; j <= i; j++) {
    pattern += "* "; // Append '*' to the string
  }
  console.log(pattern); // Print the pattern for the current row
}
