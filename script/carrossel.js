const carrossel = document.getElementById('carrosselAmbientes');
const imagens = document.querySelectorAll('.img-carrossel');
const paginacao = document.getElementById('paginacao');

let indexAtual = 0;
const visiveis = 3;
const total = imagens.length;
const totalPaginas = Math.ceil(total / visiveis);

// Criar bolinhas
function criarPaginacao() {
    for (let i = 0; i < totalPaginas; i++) {
        const bolinha = document.createElement('span');
        if (i === 0) bolinha.classList.add('ativo');
        paginacao.appendChild(bolinha);
    }
}

function atualizarPaginacao() {
    const todas = paginacao.querySelectorAll('span');
    todas.forEach(b => b.classList.remove('ativo'));
    const ativa = Math.floor(indexAtual / visiveis);
    if (todas[ativa]) todas[ativa].classList.add('ativo');
}

function scrollCarrossel(quantidade) {
    indexAtual += quantidade;
    if (indexAtual < 0) indexAtual = 0;
    if (indexAtual > total - visiveis) indexAtual = total - visiveis;
    carrossel.style.transform = `translateX(-${(100 / visiveis) * indexAtual}%)`;
    atualizarPaginacao();
}

function autoScroll() {
    indexAtual++;
    if (indexAtual > total - visiveis) indexAtual = 0;
    scrollCarrossel(0);
}

setInterval(autoScroll, 4000); // Muda sozinho a cada 4s

// Fullscreen + Zoom
imagens.forEach(img => {
    img.addEventListener('click', () => {
        if (img.requestFullscreen) {
            img.requestFullscreen();
        } else if (img.webkitRequestFullscreen) {
            img.webkitRequestFullscreen();
        }
    });

    img.addEventListener('mousemove', e => {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            img.style.transform = 'scale(1.3)';
            img.style.transition = 'transform 0.3s ease';
        }
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

criarPaginacao();
