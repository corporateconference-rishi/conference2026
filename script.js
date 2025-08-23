// Scroll Animation for Moving Boxes (D and E in Objectives Section)
document.addEventListener('scroll', () => {
    const movingBoxes = document.querySelectorAll('.moving-box'); // Select both Box D and Box E
    const windowHeight = window.innerHeight; // Height of viewport

    movingBoxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top; // Vertical position in viewport

        // Add "scrolled" class when the box enters the viewport
        if (boxPosition < windowHeight - 100) {
            box.classList.add('scrolled'); // Trigger upward movement
        }
    });
});

// Scroll Animation for Conference Tracks (Tracks 1-6)
document.addEventListener('scroll', () => {
    const trackElements = document.querySelectorAll('.track'); // Select all track elements
    const windowHeight = window.innerHeight;

    trackElements.forEach(track => {
        const trackPosition = track.getBoundingClientRect().top; // Vertical position in viewport

        // Reveal tracks with scroll-triggered animation
        if (trackPosition < windowHeight - 100) {
            track.style.opacity = '1'; /* Make track visible */
            track.style.transform = 'translateY(0)'; /* Reset downward offset */
        }
    });
});
