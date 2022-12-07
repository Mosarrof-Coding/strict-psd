let nav = document.querySelector("#nav");
let acme = document.querySelector(".acme");
let design = document.querySelector("#design");

window.addEventListener("scroll", function(){
    let scroll_value = window.scrollY;
    if (scroll_value > 100) {
        nav.classList.add("sticky");
        acme.classList.add("show");
    } else {
        nav.classList.remove("sticky");
        acme.classList.remove("show");
    }
});

// cursor----------------------------------------
let cursor = document.getElementById("cursor");
var cursor_dot = document.getElementById("cursor_dot");

document.onmousemove = function(e){
    cursor.style.left = (e.pageX - 20) + "px";
    cursor.style.top = (e.pageY - 20) + "px";
    cursor_dot.style.left = (e.pageX - 2.5) + "px";
    cursor_dot.style.top = (e.pageY - 2.5) + "px";
};
