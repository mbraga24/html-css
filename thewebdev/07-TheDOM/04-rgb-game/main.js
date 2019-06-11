let numCircles = 6;
let colors = generateRandomColors(numCircles);
let circles = document.querySelectorAll(".circle");
let displayColor = document.getElementById("display-color");
let messageTop = document.querySelector("#display-message");
let h1 = document.querySelector("h1");
let header = document.querySelector("#header");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let pickedColor = pickRandomColor();

init();

function init() {
  // Buttons event listeners.
  for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // Ternary Operator
      this.textContent === "Easy" ? numCircles = 3 : numCircles = 6;
      reset()
    });
  }

  // Circles event listeners.
  for(let i = 0; i < circles.length; i++) {
    // Add colors to circles
    circles[i].style.backgroundColor = colors[i];
    // Add events to circles
    circles[i].addEventListener("click", function() {
      // Store clicked color to a variable
      let clickedColor =  this.style.backgroundColor; 
      // Compare clicked color to the color of 
      // pickedColor variable.
      if (clickedColor === pickedColor) {
        // Player wins.
        messageTop.textContent = "You got it !!";
        h1.style.backgroundColor = clickedColor;
        changeCircleColors(clickedColor);
        resetButton.textContent = "Play Again?";
        // Player guesses wrong.
      } else {
        this.style.backgroundColor = "#232323";
        messageTop.textContent = "Try again!";
      }
    })
  }

}

function reset() {
  // Reset the text on the resetButtons.
  resetButton.textContent = "New Colors";
  // Change displayColor to match picked color.
  displayColor.textContent = pickedColor;
  // Set the message in the top to an empty string.
  messageTop.textContent = "";
  // Set color of h1 to default color when game is reset. 
  h1.style.backgroundColor = "steelblue";
  // Generate all new colors.
  colors = generateRandomColors(numCircles);
  // Pick a new random color from array.
  pickedColor = pickRandomColor();
  
  // Change colors of circles.
  for(let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    if (!colors[i]) {
      circles[i].style.display = "none"
    } else {
      circles[i].style.display = "block"
    }
  }
    
}

resetButton.addEventListener("click", function() {
  reset();
})

displayColor.textContent = pickedColor;

// Chnages all the circles to the same color when player wins.
function changeCircleColors(color) {
  for(let i = 0; i < colors.length; i++) {
    circles[i].style.backgroundColor = color;
  }
}

// Chooses one color from the colors array (randomly).
function pickRandomColor() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index]
}

// Generates multiple random colors from the randomColors()  
// and stores random colors in an array.
function generateRandomColors(value) {
  let array = []
  for(let i = 0; i < value; i++) {
    array.push(randomColors());
  }
  return array;
}

// Generates one random color.
function randomColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}