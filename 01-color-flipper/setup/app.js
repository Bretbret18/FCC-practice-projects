const colors = ["green", "red", "rgba(133,122,200)",
    "#f15025"];


const colorSpan = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
 const randomNumber = getRandomNumber();

 document.body.style.backgroundColor = colors[randomNumber];
 colorSpan.innerHTML = colors[randomNumber];
});

function getRandomNumber() {
return Math.floor(Math.random() * colors.length);
};


 



 


  


