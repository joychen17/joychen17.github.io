const creationsZoom = document.getElementById('creations_zoom');
const creationsZoomImage = creationsZoom.querySelector('img');
const creationsZoomCaption = creationsZoom.querySelector('figcaption');
let creationsZoomTrigger;

document.querySelectorAll('.creations_figure').forEach((figure) => {
    const link = figure.querySelector('a');
    const image = figure.querySelector('img');
    const caption = figure.querySelector('figcaption').textContent;

    link.setAttribute('role', 'button');
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', creationsZoom.id);
    link.setAttribute('aria-label', `Enlarge: ${caption}`);

    function openZoom(event) {
        event.preventDefault();
        creationsZoomTrigger = link;
        creationsZoomImage.src = link.href;
        creationsZoomImage.alt = image.alt;
        creationsZoomCaption.textContent = caption;
        creationsZoom.showModal();
        document.documentElement.classList.add('creations_zoom_open');
    }

    figure.addEventListener('click', openZoom);
    link.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            event.preventDefault();
            if (!event.repeat) openZoom(event);
        }
    });
});

// The dialog covers the viewport, so every click closes the enlarged figure.
creationsZoom.addEventListener('click', () => creationsZoom.close());
creationsZoom.addEventListener('close', () => {
    document.documentElement.classList.remove('creations_zoom_open');
    creationsZoomTrigger.focus({ preventScroll: true });
});
