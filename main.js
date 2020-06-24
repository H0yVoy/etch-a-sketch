const randomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);

const reset = (size) => {
  const grid = document.querySelector('.grid');
  grid.innerHTML = ''; // purge grid contents
  grid.style.gridTemplateColumns = `repeat(${size}, ${1/size*100}%)`

  for (let i = 0; i < size**2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
  }

  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener("mouseenter", function( event ) {   
      rainbow = document.getElementById("rainbow").checked;
      const color = rainbow ? randomColor() : "darkgrey";
      event.target.style.backgroundColor = color;
    });
  });
}

const setSize = () => {
  const size = prompt("Size: ");
  reset(size);
}

const purge = () => {
  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

setSize();