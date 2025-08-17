// ------------------- Animação de Digitação -------------------
const textoElemento = document.querySelector(".typing-animation");
const palavras = ["Landing-Pages", "Sites Comerciais", "Portfólios Profissionais", "Lojas Virtuais"];
let palavraIndex = 0;
let letraIndex = 0;
let apagando = false;

function digitar() {
    let palavraAtual = palavras[palavraIndex];
    let textoAtual = palavraAtual.substring(0, letraIndex);
    textoElemento.textContent = textoAtual;

    if (!apagando && letraIndex < palavraAtual.length) {
        letraIndex++;
        setTimeout(digitar, 90);
    } else if (apagando && letraIndex > 0) {
        letraIndex--;
        setTimeout(digitar, 40);
    } else {
        apagando = !apagando;
        if (!apagando) {
            palavraIndex = (palavraIndex + 1) % palavras.length;
        }
        setTimeout(digitar, 800); // pausa antes de trocar a palavra
    }
}

digitar();

// ------------------- Tabs -------------------
const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove ativo de todos
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Ativa o botão clicado
        button.classList.add('active');
        const targetContent = document.querySelector(button.getAttribute('data-target'));
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// ------------------- Animação ao rolar (Contato + Scroll) -------------------
function scrollAnimation() {
    let elements = document.querySelectorAll(".scroll-animation, .contato");
    let windowHeight = window.innerHeight;

    elements.forEach((el) => {
        let elementTop = el.getBoundingClientRect().top;
        let elementBottom = el.getBoundingClientRect().bottom;

        // Aparece quando entra na tela
        if (elementTop < windowHeight - 100) {
            el.classList.add("show", "aparecer");
        }

        // Some se sair da tela (opcional, pode remover se quiser fixo)
        if (elementBottom < 0) {
            el.classList.remove("show", "aparecer");
        }
    });
}

document.addEventListener("scroll", () => {
    requestAnimationFrame(scrollAnimation);
});

// Dispara ao carregar
document.addEventListener("DOMContentLoaded", scrollAnimation);

