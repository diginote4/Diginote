// Seleccionamos todas las imágenes
const imagenes = document.querySelectorAll('.imagen-reproductor');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        // Obtenemos el id del audio correspondiente usando el atributo data-cancion
        const idAudio = imagen.getAttribute('data-cancion');
        const audioActual = document.getElementById(idAudio);

        // 1. Opcional: Pausar todas las demás canciones y quitarles la animación
        imagenes.forEach(otraImg => {
            if (otraImg !== imagen) {
                const otroAudio = document.getElementById(otraImg.getAttribute('data-cancion'));
                otroAudio.pause();
                otroAudio.currentTime = 0; // Reinicia la canción al principio
                otraImg.classList.remove('reproduciendo');
            }
        });

        // 2. Reproducir o pausar la canción seleccionada
        if (audioActual.paused) {
            audioActual.play();
            imagen.classList.add('reproduciendo');
        } else {
            audioActual.pause();
            imagen.classList.remove('reproduciendo');
        }
    });
});