// Define an array to store the questions
var questions = [
    "Is it true that...",
    "Is it absolutely true that...",
    "How do you react to the thought that...",
    "What would you do without the thought that...",
    "What are the turnarounds to the thought that..."
];

// Function to process user input
function processInput() {
    console.log("processInput() function called");

    // Get the user input from the text box
    var userInput = document.getElementById('userInput').value;
    console.log("User Input:", userInput);

    // Retrieve the user input from session storage
    var storedUserInput = sessionStorage.getItem('userInput');
    console.log("Stored User Input:", storedUserInput);

    // Check if the user input is not empty
    if (userInput.trim() !== "") {
        // Concatenate userInput with a random question from the array
        var randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        console.log("Random Question:", randomQuestion);
        var combinedString = randomQuestion + " " +  userInput;
        console.log("Combined String:", combinedString);

        // Display the combined string on the HTML page
        document.getElementById('output').innerText = combinedString;
    } else {
        // Display the message when user input is empty
        document.getElementById('output').innerText = "This works when you work";
    }

    // Clear the input field
    document.getElementById('userInput').value = "";
}
