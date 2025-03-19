// Contador de tempo
function updateCounter() {
    const startDate = new Date("2024-05-30T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = `${days} dias`;
    document.getElementById("time").innerText = `${hours} horas, ${minutes} minutos e ${seconds} segundos`;

    setTimeout(updateCounter, 1000);
}

// Modal de imagens
function openModal(photoId) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalText = document.getElementById("modal-text");

    const photo = document.getElementById(photoId);
    modalImage.src = photo.querySelector("img").src;
    modalText.innerText = photo.querySelector(".photo-text").innerText;

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Controle de áudio
function toggleAudio() {
    const audioPlayer = document.getElementById("audio-player");
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// Inicializar contador
updateCounter();
