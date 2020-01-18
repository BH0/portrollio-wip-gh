/* this file runs at runtime */ 
var pswpElement = document.querySelectorAll('.pswp')[0];

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
}); 

document.querySelectorAll('.grid-item').forEach(gridItem => gridItem.addEventListener('click', e => {
    let index = 0; 
    items.forEach((slide, i) => {
        if (slide.src == e.target.src) {
            index = i; 
        } 
    }); 
    var options = {
        index: index
    }
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init(); 
})); 


document.querySelector(".nav").addEventListener("click", e => {
    if (!e.target.classList.value.includes("fa")) {
        e.preventDefault(); 
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView 
        var element = document.getElementById(e.target.href.split("#")[1]);
        element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    } 
}); 


ScrollReveal().reveal('.grid');
ScrollReveal().reveal('.grid-item');
ScrollReveal().reveal('.dummy-section');

// More code to come 
