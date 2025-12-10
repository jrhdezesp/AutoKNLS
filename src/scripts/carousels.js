// Carruseles del landing page

/**
 * Estado centralizado de los carruseles
 * Encapsula variables de estado para mejor organización y mantenibilidad
 */
const CarouselState = {
    hero: {
        current: 0,
        autoPlayInterval: null
    },
    brands: {
        scrollPos: 0
    }
};

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
    CarouselState.hero.current += direction;
    
    if (CarouselState.hero.current >= heroSlides.length) {
        CarouselState.hero.current = 0;
    } else if (CarouselState.hero.current < 0) {
        CarouselState.hero.current = heroSlides.length - 1;
    }
    
    updateHeroCarousel();
}

function goToHeroSlide(index) {
    CarouselState.hero.current = index;
    updateHeroCarousel();
}

function updateHeroCarousel() {
    const heroCarousel = document.getElementById('heroCarousel');
    if (!heroCarousel) return;

    heroCarousel.style.transform = `translateX(-${CarouselState.hero.current * 100}%)`;
    
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === CarouselState.hero.current);
    });
    
    clearInterval(CarouselState.hero.autoPlayInterval);
    autoPlayHeroCarousel();
}

function autoPlayHeroCarousel() {
    CarouselState.hero.autoPlayInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

// Carrusel de Marcas (scroll automático infinito)
export function initBrandsCarousel() {
    const brandsCarousel = document.getElementById('brandsCarousel');
    if (!brandsCarousel) return;

    function autoBrandScroll() {
        CarouselState.brands.scrollPos += 1;
        brandsCarousel.style.transform = `translateX(-${CarouselState.brands.scrollPos}px)`;

        // Cuando llegue al final de los primeros 16 items, resetear
        if (CarouselState.brands.scrollPos >= brandsCarousel.scrollWidth / 2) {
            CarouselState.brands.scrollPos = 0;
        }
    }

    setInterval(autoBrandScroll, 30);
}

// Hacer moveCarousel global para los botones onclick
window.moveCarousel = moveCarousel;
