// Scroll Animation for Moving Boxes (D and E)
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
