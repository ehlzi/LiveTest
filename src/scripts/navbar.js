document.addEventListener('DOMContentLoaded', function() {
    const navbarToggleButton = document.querySelector('.navbar__toggle-button');
    const navbarContent = document.getElementById('navbar-content');

    navbarToggleButton.addEventListener('click', function() {
        const isExpanded = navbarToggleButton.getAttribute('aria-expanded') === 'true';
        navbarToggleButton.setAttribute('aria-expanded', !isExpanded);
        navbarContent.style.display = isExpanded ? 'none' : 'block';
    });
});