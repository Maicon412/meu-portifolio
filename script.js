// Botão menu hamburguer
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("active");
});

// Scroll reveal com reset
const reveals = document.querySelectorAll(".scroll-reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;
    const revealBottom = el.getBoundingClientRect().bottom;

    // Se o elemento está visível na tela → adiciona .show
    if (revealTop < windowHeight - revealPoint && revealBottom > revealPoint) {
      el.classList.add("show");
    } 
    // Se saiu da tela → remove .show (reset)
    else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
