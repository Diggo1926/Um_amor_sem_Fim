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
    document.getElementById("modal").style.display = "none";
}

// Controle de áudio
const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause");
const volumeControl = document.getElementById("volume-control");
const volumeValue = document.getElementById("volume-value");

// Função de tocar/pausar a música
function toggleAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<span class="icon">⏸</span> Pausar';
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<span class="icon">▶</span> Tocar';
    }
}

// Função para reiniciar a música
function restartAudio() {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    playPauseButton.innerHTML = '<span class="icon">⏸</span> Pausar';
}

// Detectar a tecla "5" e reiniciar a música
document.addEventListener("keydown", (event) => {
    if (event.key === "5") {
        restartAudio();
    }
});

// Função para ajustar o volume
function changeVolume(value) {
    audioPlayer.volume = value;
    volumeValue.innerText = `${Math.round(value * 100)}%`;
}

// Inicializar volume no máximo
audioPlayer.volume = 1;

// Inicializar contador
updateCounter();

// Tocar música automaticamente ao carregar a página
window.addEventListener('load', () => {
    audioPlayer.play();
    playPauseButton.innerHTML = '<span class="icon">⏸</span> Pausar';
});