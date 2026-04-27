

// changing the background color
function changeBackgroundColor() {
 // declaring the background color
  document.body.style.backgroundColor = "lightblue";
}

// Reseting the background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// Capturing keyboard input
function displayKeyPress(event) {
  const display = document.getElementById("keyPressDisplay");
  if (display) {
    
    display.textContent = `Key pressed: ${event.key}`;
  }
}

// Processing text input
function displayUserInput() {
  const inputVal = document.getElementById("textInput").value;
  const display = document.getElementById("textInputDisplay");
  if (display) {
    display.textContent = `You typed: ${inputVal}`;
  }
}

// Combining multiple events
function setupEventListeners() {
  const colorBtn = document.getElementById("changeColorButton");
  const textInput = document.getElementById("textInput");

  // Click listener for background change
  if (colorBtn) {
    colorBtn.addEventListener("click", changeBackgroundColor);
  }

  
  document.body.addEventListener("dblclick", resetBackgroundColor);

  // Global keydown listener
  document.addEventListener("keydown", displayKeyPress);

  // Input listener for real-time text
  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
}


if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}


if (typeof module !== 'undefined') {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  };
}