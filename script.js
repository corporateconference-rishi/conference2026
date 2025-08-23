document.addEventListener('DOMContentLoaded', () => {
    // Scroll Behavior for 'Learn More'
    const learnMoreButton = document.querySelector('.learn-more-btn');
    const objectivesSection = document.querySelector('#objectives');

    learnMoreButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        objectivesSection.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
        });
    });
});
