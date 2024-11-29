document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.footer__toggle-button');
    const footerContent = document.getElementById('footer-content');

    toggleButton.addEventListener('click', function() {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        footerContent.style.display = isExpanded ? 'none' : 'block';
    });
});