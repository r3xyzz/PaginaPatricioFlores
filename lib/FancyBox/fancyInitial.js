// Inicialización para todas las galerías
Fancybox.bind("[data-fancybox^='gallery']", {
    Thumbs: {
        autoStart: true,  // Activa las miniaturas en la parte inferior
    },
    Video: {
        autoStart: false, // Evita reproducción automática del video
    },
    Toolbar: {
        display: [
            { id: "close", position: "right" },
            { id: "counter", position: "left" }
        ]
    },
    Image: {
        zoom: true  // Activa el zoom en las imágenes
    },
});
