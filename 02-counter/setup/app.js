// set initial count. Since the HTML won't be able to change the
// count accordingly, create a variable that represents the count
// and use it when the time comes to change the count in your js
let count = 0;


// select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// querySelectorAll capturing each button click
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // catches current button that user clicked and displays
        // all classList items accordingly
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        // change HTML content placed at bottom of function
        // as it applies to all if/ else statements
        value.textContent = count;
        
        
        
    })
})






