// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  const color="lightgray";
  document.body.style.backgroundColor=color;
 
}
// Reset background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

function displayKeyPress(event) {
  const display = document.getElementById("keyPressDisplay");
  if (display) {
    
    display.textContent = `Key pressed: ${event.key}`;
  }
}
// Displaying user input
function displayUserInput() {
  const inputVal = document.getElementById("textInput").value;
  const display = document.getElementById("textInputDisplay");
  if (display) {
    display.textContent = `You typed: ${inputVal}`;
  }
}
// setting up event listeners
function setupEventListeners() {
  const colorBtn = document.getElementById("changeColorButton");
  const resetBtn = document.getElementById("resetColorButton");
  const textInput = document.getElementById("textInput");

  // Click to change color
  if (colorBtn) {
    colorBtn.addEventListener("click", changeBackgroundColor);
  }

  // Doubleclick to reset color
  if (resetBtn) {
    resetBtn.addEventListener("dblclick", resetBackgroundColor);
  }

  // Global keydown listener
  document.addEventListener("keydown", displayKeyPress);

  // input listener
  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
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
