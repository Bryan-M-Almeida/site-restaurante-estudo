// Array contendo as URLs das imagens do carrossel
const imagens = [
    "https://ludwigrestaurant.com.br/dados/slider/3.jpg",
    "https://www.ludwigrestaurant.com.br/dados/slider/4.jpg",
    "https://ludwigrestaurant.com.br/dados/slider/2.jpg",
    "https://ludwigrestaurant.com.br/dados/slider/1.jpg"
];

// Seleciona um índice aleatório para escolher a imagem inicial
let index = Math.floor(Math.random() * imagens.length);

// Seleciona o elemento com id "slider", onde o carrossel será exibido
const slider = document.getElementById('slider');

// Cria o slide inicial com a classe 'inicial' para exibição da primeira imagem
let atual = document.createElement('div');
atual.classList.add('slide', 'inicial');  // Adiciona as classes para estilo e animação
atual.style.backgroundImage = `url(${imagens[index]})`;  // Define a imagem de fundo do slide inicial
slider.appendChild(atual);  // Adiciona o slide inicial ao carrossel

// Aguarda 4 segundos antes de começar a troca automática das imagens
setTimeout(() => {
    // Define o intervalo de 4 segundos para troca de imagens
    setInterval(() => {
        // Calcula o índice da próxima imagem (com loop cíclico)
        const proximoIndex = (index + 1) % imagens.length;

        // Cria o próximo slide com a classe 'entrando' para animação de entrada
        const nova = document.createElement('div');
        nova.classList.add('slide', 'entrando');  // Adiciona a classe de animação
        nova.style.backgroundImage = `url(${imagens[proximoIndex]})`;  // Define a imagem de fundo do próximo slide

        // Aplica a animação de saída na imagem atual
        atual.classList.remove('inicial');  // Remove a classe 'inicial' da imagem atual
        atual.classList.add('saindo');  // Adiciona a classe 'saindo' para animação de saída

        // Adiciona o novo slide ao carrossel
        slider.appendChild(nova);

        // Após 3 segundos, remove o slide que está saindo e faz o novo slide ser o atual
        setTimeout(() => {
            if (slider.contains(atual)) {
                slider.removeChild(atual);  // Remove a imagem antiga do carrossel
            }
            atual = nova;  // Define o novo slide como o atual
            index = proximoIndex;  // Atualiza o índice da imagem
        }, 3000);  // A duração da animação de saída é de 3 segundos

    }, 4000);  // O intervalo de troca das imagens é de 4 segundos
}, 0);  // Inicia o processo imediatamente (sem delay)
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navFixed');
    if (window.scrollY > 20) {
        nav.classList.add('smaller');
    } else {
        nav.classList.remove('smaller');
    }
});