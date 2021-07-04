


// when user clicks close-btn remove .open-modal from modal-overlay

// 
// .modal-overlay
// .open-modal

// select modal-btn,modal-overlay,close-btn
const closeBtn = document.querySelector('.close-btn');
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');

// listen for click events on modal-btn and close-btn
modalBtn.addEventListener('click', function() {
    modalOverlay.classList.add('open-modal')
});

closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('open-modal')
})



// when user clicks modal-btn add .open-modal to modal-overlay