// Carruseles del landing page

// Carrusel Hero
let currentHeroSlide = 0;
let heroAutoPlayInterval;

export function initHeroCarousel() {
    const heroSlides = document.querySelectorAll('.carousel-slide');
    const heroCarousel = document.getElementById('heroCarousel');
    const heroDots = document.getElementById('heroDots');

    if (!heroCarousel || !heroDots) return;

    // Crear dots
    heroSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
        dot.onclick = () => goToHeroSlide(index);
        heroDots.appendChild(dot);
    });

    autoPlayHeroCarousel();
}

export function moveCarousel(direction) {
    const heroSlides = document.querySelectorAll('.carousel-slide');
    currentHeroSlide += direction;
    
    if (currentHeroSlide >= heroSlides.length) {
        currentHeroSlide = 0;
    } else if (currentHeroSlide < 0) {
        currentHeroSlide = heroSlides.length - 1;
    }
    
    updateHeroCarousel();
}

function goToHeroSlide(index) {
    currentHeroSlide = index;
    updateHeroCarousel();
}

function updateHeroCarousel() {
    const heroCarousel = document.getElementById('heroCarousel');
    if (!heroCarousel) return;

    heroCarousel.style.transform = `translateX(-${currentHeroSlide * 100}%)`;
    
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentHeroSlide);
    });
    
    clearInterval(heroAutoPlayInterval);
    autoPlayHeroCarousel();
}

function autoPlayHeroCarousel() {
    heroAutoPlayInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

// Carrusel de Marcas (scroll automático infinito)
export function initBrandsCarousel() {
    const brandsCarousel = document.getElementById('brandsCarousel');
    if (!brandsCarousel) return;

    let brandScrollPos = 0;

    function autoBrandScroll() {
        brandScrollPos += 1;
        brandsCarousel.style.transform = `translateX(-${brandScrollPos}px)`;

        // Cuando llegue al final de los primeros 16 items, resetear
        if (brandScrollPos >= brandsCarousel.scrollWidth / 2) {
            brandScrollPos = 0;
        }
    }

    setInterval(autoBrandScroll, 30);
}

// Hacer moveCarousel global para los botones onclick
window.moveCarousel = moveCarousel;
