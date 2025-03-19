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
    var startDate = new Date("May 30, 2023 00:00:00"); // Data de início
    var now = new Date();
    var diff = now - startDate;

    // Calculando a diferença em dias, horas, minutos e segundos
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Exibindo o tempo no formato desejado
    document.getElementById("days").innerText = `Dias: ${days}`;
    document.getElementById("time").innerText = `Tempo: ${hours}h ${minutes}m ${seconds}s`;
}

// Atualizando o contador a cada segundo
setInterval(updateCounter, 1000);

// Inicia o contador ao carregar a página
updateCounter();
