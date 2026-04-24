// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  const color="lightgray";
  document.body.style.backgroundColor=color;
 
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor="pink";
}

// Capture Keyboard Input


// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const display=document.getElementById("keyPressDisplay");
  if(display){
    display.textContent="You pressed: ${event.key}";
  }

}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const input=document.getElementById("textInput").value;
  document.getElementById("textInputDisplay").textContent=input;
  const display=document.getElementById("textInputDisplay");
  if (display){
    display.textContent= input;
  }
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
const colorBtn=document.getElementById("changeColorButton");


  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)
    if (colorBtn){
  colorBtn.addEventListener("click", changeBackgroundColor)
    }
  

  // Attach event listener to reset background color when the body is double-clicked
  const resetBtn=document.getElementById("resetColorButton")
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)
    if (resetBtn){
      resetBtn.addEventListener("dblclick", resetBackgroundColor)
    }

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
