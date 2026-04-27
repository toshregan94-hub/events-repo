function changeBackgroundColor() {
  const colors = ["#FFDDC1", "#C1FFD7", "#C1D4FF", "#FFFAC1", "#FFC1C1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color 
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const input = document.getElementById("textInput").value;
  document.getElementById("textInputDisplay").textContent = `You typed: ${input}`;
}

// Attach Event Listeners
function setupEventListeners() {
  document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);
  document.getElementById("resetColorButton").addEventListener("dblclick", resetBackgroundColor);
  document.addEventListener("keydown", displayKeyPress);
  document.getElementById("textInput").addEventListener("input", displayUserInput);

  //changing background when typing
  document.getElementById("textInput").addEventListener('input', () => {
    document.body.style.backgroundColor = "#E0F7FA"; 
  });
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
