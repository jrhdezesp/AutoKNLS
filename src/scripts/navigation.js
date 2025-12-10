// Funcionalidad del menú de navegación

export function initNavigation() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const moreBtn = document.getElementById('moreBtn');
    const moreMenu = document.getElementById('moreMenu');
    const menuDropdown = document.querySelector('.menu-dropdown');

    // Toggle hamburger menu
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Toggle more menu dropdown
    if (moreBtn) {
        moreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            menuDropdown.classList.toggle('active');
        });
    }

    // Close menus when clicking outside
    document.addEventListener('click', function(e) {
        if (hamburgerBtn && !hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
        if (menuDropdown && !menuDropdown.contains(e.target)) {
            menuDropdown.classList.remove('active');
        }
    });

    // Close menus when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    const menuItems = document.querySelectorAll('.menu-items a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburgerBtn) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburgerBtn) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
            menuDropdown.classList.remove('active');
        });
    });

    // Prevent event bubbling on menu items
    if (moreMenu) {
        moreMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}
