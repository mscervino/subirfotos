document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("imageInput");
  const uploadButton = document.getElementById("uploadButton");
  const imageGallery = document.querySelector(".image-gallery");

  uploadButton.addEventListener("click", () => {
    const files = imageInput.files;

    if (files.length === 0) {
      alert("Por favor, selecciona al menos una imagen.");
      return;
    }

    // Iterar sobre los archivos seleccionados
    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = document.createElement("img");
        img.src = event.target.result; // Asigna la imagen cargada

        // Insertar la imagen al principio de la galería (nuevas imágenes primero)
        imageGallery.prepend(img);
      };

      reader.readAsDataURL(file); // Leer el archivo como URL base64
    });

    // Limpiar el input de archivos para permitir nuevas cargas
    imageInput.value = "";
  });
});