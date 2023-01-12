const linksClickable = document.querySelectorAll(".link__clickable"); 
const burger = document.querySelector(".burger"); 
const iconClose = document.querySelector(".icon__close"); 
const links = document.querySelector(".links"); 
const overlay = document.querySelector(".overlay"); 

linksClickable.forEach((link, index) => {
    link.addEventListener("click", function() {
        link.lastElementChild.classList.toggle("arrow--rotated"); 
        link.nextElementSibling.classList.toggle("links__sublinks--shown"); 
    })
}); 

burger.addEventListener("click", ()=> {
    links.classList.add("links--shown");
    overlay.classList.add("overlay--shown"); 
})

iconClose.addEventListener("click", ()=> {
    links.classList.remove("links--shown"); 
    overlay.classList.remove("overlay--shown"); 
})

window.addEventListener("resize", function() {
    if (window.innerWidth > 999) {
        overlay.classList.remove("overlay--shown"); 
    }
})