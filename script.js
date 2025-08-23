document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation for Moving Boxes (D & E in Objectives Section)
    document.addEventListener('scroll', () => {
        const movingBoxes = document.querySelectorAll('.moving-box');
        movingBoxes.forEach(box => {
            const boxPosition = box.getBoundingClientRect().top;
            if (boxPosition < window.innerHeight - 100) {
                box.classList.add('scrolled');
            }
        });
    });

    // Scroll Animation for Conference Tracks
    document.addEventListener('scroll', () => {
        const trackElements = document.querySelectorAll('.track');
        trackElements.forEach(track => {
            const trackPosition = track.getBoundingClientRect().top;
            if (trackPosition < window.innerHeight - 100) {
                track.style.opacity = '1';
                track.style.transform = 'translateY(0)';
            }
        });
    });
});
