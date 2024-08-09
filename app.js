window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY> 0)
})


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.grid-wrapper > div > img');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightbox.classList.add('show', 'zoom-out');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });

    lightbox.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (event.deltaY < 0) {
            // Zoom in
            lightbox.classList.remove('zoom-out');
            lightbox.classList.add('zoom-in');
        } else {
            // Zoom out
            lightbox.classList.remove('zoom-in');
            lightbox.classList.add('zoom-out');
        }
    });
});
