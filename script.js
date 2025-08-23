// Add Scroll Animations Based on Element Visibility
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('[data-animation]'); // Grab all elements with animations
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top; // Distance from top of viewport

        // Trigger animation when element is visible in viewport
        if (elementPosition < windowHeight - 100) {
            element.classList.add('is-visible');
        }
    });
});
