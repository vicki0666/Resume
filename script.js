// Example: Highlight the active navigation link
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.fontWeight = 'bold';
        }
    });
});
