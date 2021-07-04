// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // console.log(links.classList);
    // classList , contains() , 
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));
    // if show links is assigned, then remove it
    // ** this is adding and removing, vs toggling shown below
    // if(links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links');
    // }
    // ** toggle
    links.classList.toggle('show-links');
});

