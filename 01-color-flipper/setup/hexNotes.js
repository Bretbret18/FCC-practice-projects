
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    let hexColor = '#';
  for(let i = 0; i < 6; i++) {
      // you don't have to run i with the for loop, code
      // within the for loop will consider it's own arguement
      // and run the result.

      // here we are physically adding the hex symbol onto
      // hex array while running the randomNumber() function
      // within the hex variable.
    hexColor += hex[randomNumber()];
    console.log(hexColor);
  }
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
});

function randomNumber() {
    return Math.floor(Math.random() * hex.length)
};