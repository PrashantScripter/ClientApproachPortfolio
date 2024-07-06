const hamburger = document.querySelector(".hamburger");
const navlink2 = document.querySelector("#nav-links2")
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");


hamburger.addEventListener('click',()=>{
    span1.classList.toggle("line1");
    span2.classList.toggle("line2");
    span3.classList.toggle("line3");
    navlink2.classList.toggle("navlinkblock")
})

