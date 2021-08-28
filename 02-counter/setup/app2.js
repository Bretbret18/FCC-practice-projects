// set initial count. Since the HTML won't be able to change the
// count accordingly, create a variable that represents the count
// and use it when the time comes to change the count in your js

//// **** SAVE FOR REFERENCE **** ////

// Within teacher method: //
// ** contains ** //
// connect variable to contains to check if something is within
// that variable, in this case the variable is the event (e),
// connected to currentTarget, then the classList. so contains
// is checking wether or not something is within the classList.

// // // MY METHOD: WORKS // // //
// ______________________________________________________ //

// let count = 0;

// const btns = document.querySelectorAll('.btn');
// const value = document.querySelector('#value');


// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     if (btn.innerHTML === 'increase') {
//       count++;
//     } else if (btn.innerHTML === 'decrease') {
//       count--;
//     } else {
//       count = 0;
//     }
//     value.innerHTML = count;
//   })
// })

// // // TEACHER METHOD // // //
// ______________________________________________________ //

// const btns = document.querySelectorAll('.btn');
// const value = document.querySelector('#value');

// let count = 0;

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains('increase')) {
//       count++;
//     } else if (styles.contains('decrease')) {
//       count--;
//     } else {
//       count = 0;
//     }
//     value.innerHTML = count;
//   })
// })
