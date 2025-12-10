// filepath: src/data/index.js
// Datos globales y contexto compartido entre todas las páginas

export const getData = (page) => {
    let contextData = {};
    
    switch (page) {
        case '/index.html':
        case './index.html':
            contextData = {
                herotitle: "Bienvenido a AutoKNLS",
                herodesc: "Tu socio confiable en repuestos y accesorios automotrices de calidad premium",
                ftitle: "AutoKNLS",
                fdesc: "Repuestos y accesorios automotrices de alta calidad con garantía del fabricante.",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/ubicaciones.html':
        case './ubicaciones.html':
            contextData = {
                pagetitle: "Nuestras Ubicaciones",
                ftitle: "AutoKNLS",
                fdesc: "Encuéntranos en tu ciudad",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/repuestos.html':
        case './repuestos.html':
            contextData = {
                pagetitle: "Repuestos Automotrices",
                ftitle: "AutoKNLS",
                fdesc: "Amplio catálogo de repuestos originales para todas las marcas",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/accesorios.html':
        case './accesorios.html':
            contextData = {
                pagetitle: "Accesorios Premium",
                ftitle: "AutoKNLS",
                fdesc: "Potencia, estilo y funcionalidad para personalizar tu vehículo",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/noticias.html':
        case './noticias.html':
            contextData = {
                pagetitle: "Novedades y Consejos",
                ftitle: "AutoKNLS",
                fdesc: "Mantente informado sobre noticias del sector automotriz",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/blog.html':
        case './blog.html':
            contextData = {
                pagetitle: "Blog AutoKNLS",
                ftitle: "AutoKNLS",
                fdesc: "Consejos, guías y novedades del mundo automotriz",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/promociones.html':
        case './promociones.html':
            contextData = {
                pagetitle: "Ofertas Exclusivas",
                ftitle: "AutoKNLS",
                fdesc: "Aprovecha nuestras ofertas exclusivas",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/historia.html':
        case './historia.html':
            contextData = {
                pagetitle: "Nuestra Historia",
                ftitle: "AutoKNLS",
                fdesc: "Conoce nuestros orígenes y evolución",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/compromiso.html':
        case './compromiso.html':
            contextData = {
                pagetitle: "Nuestro Compromiso",
                ftitle: "AutoKNLS",
                fdesc: "Comprometidos con tu confianza, calidad y satisfacción",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/nosotros.html':
        case './nosotros.html':
            contextData = {
                pagetitle: "Conócenos",
                ftitle: "AutoKNLS",
                fdesc: "Descubre nuestra esencia y lo que nos mueve cada día",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/faq.html':
        case './faq.html':
            contextData = {
                pagetitle: "Preguntas Frecuentes",
                ftitle: "AutoKNLS",
                fdesc: "Respuestas a tus dudas más comunes",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        case '/aplicacion.html':
        case './aplicacion.html':
            contextData = {
                pagetitle: "Trabaja con Nosotros",
                ftitle: "AutoKNLS",
                fdesc: "Únete al equipo AutoKNLS y crece con nosotros",
                footerbottom: "AutoKNLS. Todos los derechos reservados."
            };
            break;
        default:
            contextData = { ...contextData };
    }
    
    return { ...contextData, ...getAllPageContext() };
};

/**
 * Contexto global compartido por todas las páginas
 */
function getAllPageContext() {
    return {
        currYear: new Date().getFullYear()
    };
}
