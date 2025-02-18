//your JS code here. If required.
// Function to simulate a delay using Promises
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to manipulate the array using chained promises
function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Initial array
  const initialArray = [1, 2, 3, 4];

  // Step 1: Resolve the initial array after 3 seconds
  delay(3000)
    .then(() => {
      // Step 2: Filter out odd numbers
      const evenNumbers = initialArray.filter((num) => num % 2 === 0);
      outputDiv.textContent = evenNumbers.join(","); // Update the output div
      return delay(1000); // Wait for 1 second
    })
    .then(() => {
      // Step 3: Multiply even numbers by 2
      const evenNumbers = initialArray.filter((num) => num % 2 === 0);
      const multipliedNumbers = evenNumbers.map((num) => num * 2);
      outputDiv.textContent = multipliedNumbers.join(","); // Update the output div
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the function to start the process
manipulateArray();