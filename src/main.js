import '../less/style.less'

// Menu dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuDropdown = document.querySelector('.menu-dropdown');

    if (menuToggle && menuDropdown) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            menuDropdown.classList.toggle('active');
        });

        // Cerrar menú cuando se hace click afuera
        document.addEventListener('click', function(e) {
            if (!menuDropdown.contains(e.target)) {
                menuDropdown.classList.remove('active');
            }
        });

        // Cerrar menú cuando se hace click en un link
        const menuItems = document.querySelectorAll('.menu-items a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                menuDropdown.classList.remove('active');
            });
        });
    }
});