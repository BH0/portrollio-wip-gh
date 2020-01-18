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

        document.querySelectorAll('.grid-item').forEach(gridItem => gridItem.addEventListener('click', e => {
            let items = [{"src":"https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&dpr=1","info":"Junior $40"},{"src":"https://images.pexels.com/photos/1300361/pexels-photo-1300361.jpeg?auto=compress&cs=tinysrgb&dpr=1","info":"Elder $80"},{"src":"https://images.pexels.com/photos/787840/pexels-photo-787840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","info":"Adult $70"},{"src":"https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&dpr=1","info":"Junior $40"},{"src":"https://images.pexels.com/photos/1300361/pexels-photo-1300361.jpeg?auto=compress&cs=tinysrgb&dpr=1","info":"Elder $80"},{"src":"https://images.pexels.com/photos/787840/pexels-photo-787840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","info":"Adult $70"}]
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
        