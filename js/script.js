// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Typing text animation script
var typed = new Typed(".typing", {
  strings: ["Web Expert", "Coder", "Programmer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Get Age
const age = new Date().getFullYear() - 2000;
document.getElementById('age').innerHTML = age;

// Get Year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;


// Lunch The Notifiaction
setTimeout(function lunchNotifiaction() {
  // Get the snackbar DIV
  var x = document.getElementById("notification");

  // Add the "show" class to DIV
  x.className = "show";

  // After 30 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "hide");
  }, 10000);
}, 10000);

// Initialize theNotification
document.body.onload = lunchNotifiaction();