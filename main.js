// Initialize an empty large array
const largeArray = [];

// Define the list of numbers for random selection
const numberList = [0, 99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

// Select all buttons with the class "table_button"
const buttons = document.querySelectorAll(".table_button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    // Get the subarray data from data-subarray attribute (assuming valid JSON)
    const subarrayDataString = button.dataset.subarray;

    // Check if data-subarray exists and parse it if valid JSON
    if (subarrayDataString) {
      const subarrayData = JSON.parse(subarrayDataString);
      largeArray.push(subarrayData);
      console.log("Subarray added from button:", this.id, subarrayData);
    } else {
      console.warn("Button", this.id, "has no data-subarray attribute or invalid format");
    }
  });
});

// Get the spin button and the display elements
const spinButton = document.getElementById("spinbutton");
const numberDisplay = document.querySelector(".Display_Number");
const totalDisplay = document.querySelector(".Display_total");

spinButton.addEventListener("click", function() {
  // Check if largeArray is empty before processing
  if (largeArray.length === 0) {
    console.warn("The largeArray is currently empty. Add subarrays from buttons first.");
    return; // Exit the function if largeArray is empty
  }

  // Select a random number from the numberList
  const randomNumber = numberList[Math.floor(Math.random() * numberList.length)];

  console.log("Random number selected:", randomNumber);

  // Update the number display element
  numberDisplay.textContent = `Number: ${randomNumber}`;

  // Array to store match counts with weighting
  const weightedMatchCounts = Array(largeArray.length).fill(0);

  // Loop through each subarray in largeArray
  largeArray.forEach((subarray, subarrayIndex) => {
    // Check elements from index 3 (skipping the first 3 elements)
    for (let i = 3; i < subarray.length; i++) {
      if (subarray[i] === randomNumber) {
        weightedMatchCounts[subarrayIndex] = subarray[0] * subarray[subarray.length - 1] * subarray[subarray.length - 2]; // Calculate weighted match count
        break; // Exit the inner loop after finding a match
      }
    }
  });

  console.log("Weighted match counts:", weightedMatchCounts);

  // Calculate total score
  let totalScore = 0;
  for (let i = 0; i < largeArray.length; i++) {
    totalScore += weightedMatchCounts[i];
  }

  console.log("Total score:", totalScore);

  // Update the total display element (assuming $5000 is a placeholder)
  totalDisplay.textContent = `Total: $${totalScore}`;
});
