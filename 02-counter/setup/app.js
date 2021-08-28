let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
       let target = e.currentTarget.classList;
       if (target.contains('increase')) {
           count++;
           
       } else if (target.contains('decrease')) {
        count--
       } else {
        count = 0;
       }
       value.innerHTML = count;
    })
});


