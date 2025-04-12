const imagens = [
    "https://ludwigrestaurant.com.br/dados/slider/3.jpg",
    "https://www.ludwigrestaurant.com.br/dados/slider/4.jpg",
    "https://ludwigrestaurant.com.br/dados/slider/2.jpg",
    "https://ludwigrestaurant.com.br/dados/slider/1.jpg"
];
const randomNumber = Math.floor(Math.random() * 4);
console.log(`imagem inicial: ${randomNumber + 1}`);
let index = randomNumber;
const slider = document.getElementById('slider');
let atual = document.createElement('div');
atual.classList.add('slide');
atual.style.backgroundImage = `url(${imagens[index]})`;
slider.appendChild(atual);

setInterval(() => {
    index = (index + 1) % imagens.length;

    const nova = document.createElement('div');
    nova.classList.add('slide');
    nova.style.backgroundImage = `url(${imagens[index]})`;
    slider.appendChild(nova);
    setTimeout(() => {
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 1) {
            slides[0].remove();
        }
    }, 1000);
}, 4000);