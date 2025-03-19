// Função para abrir o modal
function openModal(photoId) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    var modalText = document.getElementById("modal-text");
    var photo = document.getElementById(photoId);
    var image = photo.getElementsByTagName("img")[0];
    var text = photo.getElementsByClassName("photo-text")[0].innerText;

    modalImage.src = image.src;
    modalText.innerText = text;
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Função para atualizar o contador de tempo
function updateCounter() {
    // Data de início
    const startDate = new Date("2024-05-30T00:00:00");

    // Função para calcular a diferença de tempo
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = `Você está junto há ${days} dias`;
    document.getElementById('time').innerHTML = `${hours} horas, ${minutes} minutos, e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// Inicia o contador ao carregar a página
updateCounter();
