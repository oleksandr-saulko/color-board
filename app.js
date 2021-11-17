
const board = document.querySelector('#board');
const countOfSquares = 500;

for (let i = 0; i < countOfSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseleave' , () => {
    removeColor(square);
  })

  board.append(square);
}

board.addEventListener('mouseover' , (e) => {
  if(e.target.className !== 'square') {
    return
  }
  setColor(e.target);
})

function setColor(element) {
  const color = randomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 20px ${color}`;
}

function removeColor (element) {
  const color = '#1d1d1d';
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}`;
}

function randomColor() {
  //pick a "red" from 0 - 255
  const r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  const g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}