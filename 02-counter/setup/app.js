// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// can target individual buttons without 
// selecting each button seperately
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = (e.currentTarget.classList);
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        // note: ===
        if (count === 0) {
            value.style.color = '#222';
        }
            // changes text content of span
            value.textContent = count;
    });
});
