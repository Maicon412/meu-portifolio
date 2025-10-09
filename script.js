// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// js carrousel

const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  const indicators = document.querySelector(".indicators");
  let index = 0;
  let autoplay;

  // Criar bolinhas
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    indicators.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  function updateCarousel() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === index)
    );
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function goToSlide(i) {
    index = i;
    updateCarousel();
  }

  // Controles
  document.getElementById("next").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", prevSlide);

  // Autoplay
  function startAutoplay() {
    autoplay = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplay);
  }

  document.querySelector(".carousel").addEventListener("mouseenter", stopAutoplay);
  document.querySelector(".carousel").addEventListener("mouseleave", startAutoplay);

  startAutoplay();
