// Scroll Animation for Floating Boxes D and E
document.addEventListener('scroll', () => {
    const floatBoxes = document.querySelectorAll('.floating-box');
    const windowHeight = window.innerHeight;

    floatBoxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;

        if (boxPosition < windowHeight - 100) {
            box.classList.add('is-scrolling');
        }
    });
});

// Scroll Animation for Conference Tracks
document.addEventListener('scroll', () => {
    const trackElements = document.querySelectorAll('.track');
    const windowHeight = window.innerHeight;

    trackElements.forEach(track => {
        const trackPosition = track.getBoundingClientRect().top;

        if (trackPosition < windowHeight - 100) {
            track.style.opacity = '1';
            track.style.transform = 'translateX(0)';
        }
    });
});
