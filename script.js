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
// Tabs Showreel/Certificados com animação
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active de todos os botões
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Fecha todos os conteúdos
    tabContents.forEach((c) => {
      c.classList.remove("active");
    });

    // Mostra o conteúdo da aba escolhida com leve atraso para transição
    const target = document.getElementById(btn.dataset.tab);
    target.style.display = "block"; // garante que aparece para animar
    setTimeout(() => target.classList.add("active"), 10);

    // Esconde os outros de forma suave
    tabContents.forEach((c) => {
      if (c !== target) {
        c.style.display = "none";
      }
    });
  });
});
// Formulário de serviços
const form = document.getElementById("serviceForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Pega os valores do formulário
  const pedido = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    servico: document.getElementById("servico").value,
    mensagem: document.getElementById("mensagem").value,
    data: new Date().toLocaleString()
  };

  // Armazena no localStorage
  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  pedidos.push(pedido);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));

  // Feedback visual
  feedback.style.display = "block";
  setTimeout(() => {
    feedback.style.display = "none";
  }, 3000);

  // Reseta formulário
  form.reset();
});
