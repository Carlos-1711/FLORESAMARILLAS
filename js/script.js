// script.js
function startExperience() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.main-content').style.display = 'flex';
    createFlowers();

    const audio = document.querySelector('audio');
    if (audio) {
        audio.play().catch(error => {
        console.error("Error al reproducir el audio:", error);
    });
    }
}

function createFlowers() {
    const totalFlowers = 30;
    for (let i = 0; i < totalFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        document.body.appendChild(flower);

        const size = Math.random() * 30 + 20;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;

      flower.style.left = `${Math.random() * 100}vw`;
      flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
      flower.style.animationDelay = `${Math.random() * 3}s`;
    flower.addEventListener('animationend', () => {
        flower.remove();
        createFlowers();
    });
    }
}
