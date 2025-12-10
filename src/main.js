import '../less/style.less'
import { initNavigation } from './scripts/navigation.js'
import { initHeroCarousel, initBrandsCarousel } from './scripts/carousels.js'
import { initJobApplicationForm } from './scripts/formValidation.js'
import { getData } from './data/index.js'

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Obtener datos globales
    const pageData = getData(window.location.pathname);
    console.log('Datos de página cargados:', pageData);

    // Inicializar navegación (header y menú)
    initNavigation();

    // Inicializar carruseles si están en la página
    initHeroCarousel();
    initBrandsCarousel();

    // Inicializar formulario de aplicación si está en la página
    initJobApplicationForm();
});
