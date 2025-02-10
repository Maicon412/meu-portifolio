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
        setTimeout(digitar, 30);
    } else {
        apagando = !apagando;
        if (!apagando) {
            palavraIndex = (palavraIndex + 1) % palavras.length;
        }
        setTimeout(digitar, 100);
    }
}

digitar();
 
// Lógica para alternar entre os conteúdos
const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

// Adiciona evento de clique nos botões
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe ativa de todos os botões e conteúdos
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Adiciona a classe ativa no botão e no conteúdo correspondente
        button.classList.add('active');
        const targetContent = document.querySelector(button.getAttribute('data-target'));
        targetContent.classList.add('active');
    });
});

// Função para mostrar os elementos com fade-in ao rolar a página
window.addEventListener('scroll', function() {
    const contato = document.querySelector('.contato');
    const contatoPosition = contato.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (contatoPosition < windowHeight - 100) {
        contato.classList.add('aparecer');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let ticking = false;

    function scrollAnimation() {
        let elements = document.querySelectorAll(".scroll-animation");
        let windowHeight = window.innerHeight;

        elements.forEach((el) => {
            let elementTop = el.getBoundingClientRect().top;
            let elementBottom = el.getBoundingClientRect().bottom;

            if (elementTop < windowHeight - 100) {
                el.classList.add("show");
            }

            if (elementBottom < 0) {
                el.classList.remove("show");
            }
        });

        ticking = false; // Libera para a próxima animação
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(scrollAnimation);
        }
    }

    window.addEventListener("scroll", onScroll);
    scrollAnimation();
});


