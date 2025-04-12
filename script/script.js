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

// primeira imagem
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

    // remove a anterior depois da animação
    setTimeout(() => {
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 1) {
            slides[0].remove();
        }
    }, 1000); // igual ao tempo da animação
}, 4000);
function darkMode() {
    let mode = "ninja";
    let color = "ghostWhite";
    let image = "/img/light-icon.png";
    let label = "Light Mode";
    if (mode === "dark") {
        color = "DarkSlateBlue";
        image = "/img/dark-icon.png";
        label = "Dark Mode";
    } else if (mode === "light") {
        mode = "light";
        color = "ghostWhite";
        image = "/img/light-icon.png";
        label = "Light Mode";
    } else {
        color = "dimGray";
        image = "/img/ninja-icon.png";
        label = "Ninja Mode";
    }
}