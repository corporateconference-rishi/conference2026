document.addEventListener('DOMContentLoaded', () => {
    const layer2 = document.querySelector('.layer-2'); // Layer 2 with Box D and E
    const layer1 = document.querySelector('.layer-1'); // Layer 1 containing Boxes A, B, and C

    document.addEventListener('scroll', () => {
        const layer1Height = layer1.offsetHeight; // Total height of Layer 1
        const threshold = layer1Height * 0.65; // 65% of Layer 1 height
        const scrollY = window.scrollY;

        // Attach Layer 2 when it reaches 65% height of Layer 1
        if (scrollY >= threshold) {
            layer2.style.position = 'absolute';
            layer2.style.top = `${threshold}px`;
        } else {
            layer2.style.position = 'sticky';
            layer2.style.top = '200px'; // Reset position
        }
    });
});
