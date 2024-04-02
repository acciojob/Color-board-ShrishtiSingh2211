//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('container');

  // Function to create and append squares to the container
  function createSquares() {
    for (let i = 0; i < 800; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }
  }

  // Event listener to change color on hover
  container.addEventListener('mouseover', function(event) {
    const target = event.target;
    if (target.classList.contains('square')) {
      target.style.backgroundColor = getRandomColor();
      setTimeout(() => {
        target.style.backgroundColor = ''; // Reset color after 1 second
      }, 1000);
    }
  });

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Initialize the board
  createSquares();
});
