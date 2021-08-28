const colors = ["green", "red", "rgba(133,122,200)",
    "#f15025"];

const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
 const newColor = document.body.style.backgroundColor = colors[randomColor()];
  color.innerHTML = newColor;
});

function randomColor () {
  return Math.floor(Math.random() * colors.length)
}