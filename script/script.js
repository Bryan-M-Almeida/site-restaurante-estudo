const imagens = [
    "https://ludwigrestaurant.com.br/dados/slider/3.jpg",
    "https://www.ludwigrestaurant.com.br/dados/slider/4.jpg",
    "https://ludwigrestaurant.com.br/dados/slider/2.jpg",
    "https://ludwigrestaurant.com.br/dados/slider/1.jpg"
];

let index = Math.floor(Math.random() * imagens.length);
const slider = document.getElementById('slider');

// Cria slide inicial com classe de fade
let atual = document.createElement('div');
atual.classList.add('slide', 'inicial');
atual.style.backgroundImage = `url(${imagens[index]})`;
slider.appendChild(atual);

// Espera 4 segundos antes de começar o carrossel
setTimeout(() => {
    setInterval(() => {
        const proximoIndex = (index + 1) % imagens.length;

        const nova = document.createElement('div');
        nova.classList.add('slide', 'entrando');
        nova.style.backgroundImage = `url(${imagens[proximoIndex]})`;

        atual.classList.remove('inicial');
        atual.classList.add('saindo');

        slider.appendChild(nova);

        setTimeout(() => {
            if (slider.contains(atual)) {
                slider.removeChild(atual);
            }
            atual = nova;
            index = proximoIndex;
        }, 3000);

    }, 4000);
}, 0);
