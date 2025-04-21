const galeriaFotos = [
  './imagens/galeria/1.jpg',
  './imagens/galeria/2.jpg',
  './imagens/galeria/3.jpg',
  './imagens/galeria/4.jpg',
  './imagens/galeria/5.jpg',
  './imagens/galeria/6.jpg',
  './imagens/galeria/7.jpg',
  './imagens/galeria/8.jpg',
  './imagens/galeria/9.jpg',
  './imagens/galeria/10.jpg',
  './imagens/galeria/11.jpg',
  './imagens/galeria/12.jpg',
  './imagens/galeria/13.jpg',
  './imagens/galeria/14.jpg',
  './imagens/galeria/15.jpg',
  './imagens/galeria/16.jpg'
];

let fotoAtual = 0;

const galeriaModal = document.getElementById('galeriaModal');
const galeriaImagem = document.getElementById('galeriaImagem');
const btnAnterior = document.getElementById('anterior');
const btnProximo = document.getElementById('proximo');
const fecharBtn = document.getElementById('fecharGaleria');
const abrirBtn = document.getElementById('abrirGaleria');

// Abrir modal
abrirBtn.addEventListener('click', e => {
  e.preventDefault();
  abrirGaleria(0);
});

function abrirGaleria(index) {
  fotoAtual = index;
  galeriaImagem.src = galeriaFotos[fotoAtual];
  galeriaModal.classList.add('aberto');
}

// Navegar
btnAnterior.addEventListener('click', () => {
  fotoAtual = (fotoAtual - 1 + galeriaFotos.length) % galeriaFotos.length;
  galeriaImagem.src = galeriaFotos[fotoAtual];
});

btnProximo.addEventListener('click', () => {
  fotoAtual = (fotoAtual + 1) % galeriaFotos.length;
  galeriaImagem.src = galeriaFotos[fotoAtual];
});

// Fechar
fecharBtn.addEventListener('click', () => {
  galeriaModal.classList.remove('aberto');
});

document.addEventListener('keydown', e => {
  if (!galeriaModal.classList.contains('aberto')) return;
  if (e.key === 'Escape') galeriaModal.classList.remove('aberto');
  if (e.key === 'ArrowRight') btnProximo.click();
  if (e.key === 'ArrowLeft') btnAnterior.click();
});
