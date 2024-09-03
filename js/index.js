function init() {
    import('./global/global.header-nav.burger-menu.js');
    import('./index/index.best-selling.carousel.js');
   // import('./index/index-turnkey-furnishing-scroll.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});