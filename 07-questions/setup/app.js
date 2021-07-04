//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        // when using method class does not use . in front of chosen class,
        // unlike querySelector. querySelector needs to know what type
        // of element reference is being used (id, class, etc)
        question.classList.toggle('show-text');
    });
});




