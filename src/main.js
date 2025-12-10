import '../less/style.less'
import { initNavigation } from './scripts/navigation.js'
import { initHeroCarousel, initBrandsCarousel } from './scripts/carousels.js'
import { initJobApplicationForm } from './scripts/formValidation.js'

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar navegación (header y menú)
    initNavigation();

    // Inicializar carruseles si están en la página
    initHeroCarousel();
    initBrandsCarousel();

    // Inicializar formulario de aplicación si está en la página
    initJobApplicationForm();
});
