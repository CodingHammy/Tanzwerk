import Lightbox from './Gallerie Bilder/lightbox.js';



Lightbox.activate();

const btnOpen = document.querySelector('.lightBoxOpen');
btnOpen.addEventListener('click', () => {
    Lightbox.show(TansWerkImages);

});
