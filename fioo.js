// Obtener elementos del DOM
const container = document.getElementById("carousel-container");
const images = container.querySelectorAll(".lu img");
const prevButton = document.createElement("div");
const nextButton = document.createElement("div");

let currentImageIndex = 0;

// Crear botones de navegación
prevButton.className = "carousel-button prev-button";
nextButton.className = "carousel-button next-button";
prevButton.innerHTML = "←";
nextButton.innerHTML = "→";
container.appendChild(prevButton);
container.appendChild(nextButton);

// Mostrar la imagen actual
function showImage(index) {
    images.forEach(image => image.style.display = "none");
    images[index].style.display = "block";
    currentImageIndex = index;
}

// Cambiar a la siguiente imagen
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

// Cambiar a la imagen anterior
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Eventos de clic en los botones
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

// Evento de clic en la mitad derecha de la pantalla
container.addEventListener("click", (e) => {
    const { clientX } = e;
    if (clientX > window.innerWidth / 2) {
        nextImage();
    }
});

// Mostrar la primera imagen al cargar la página
showImage(0);
