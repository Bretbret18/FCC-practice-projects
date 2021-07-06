// MDN
// The DOMContentLoaded event fires when the initial HTML
// document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to
// finish loading.
// The load event is fired when the whole page has loaded,
// including all dependent resources such as stylesheets
// and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

//  *** starts / stops video *** //
// .slide / .switch : classes
// function: on click, if btn doesn't have class of .slide,
// add it. if does, than remove
btn.addEventListener('click', function() {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    }
});

// preLoader
const preLoader = document.querySelector('.preLoader');

window.addEventListener('load', function() {
    preLoader.classList.add('hide-preloader')
});