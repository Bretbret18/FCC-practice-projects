const colors = ["green", "red", "rgba(133,122,200)",
    "#f15025"];

const colorSpan = document.querySelector('.color');
const btn = document.getElementById('btn');

let randomNumber = getRandomNumber();

btn.addEventListener('click', function() {
    
  const color = document.querySelector('.background').style.backgroundColor = colors[getRandomNumber()];
    colorSpan.innerHTML = color;
});


function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}

