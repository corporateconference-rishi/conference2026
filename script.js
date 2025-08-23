document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d');
    const boxE = document.querySelector('#box-e');
    const layer1 = document.querySelector('.layer-1');

    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const layer1Top = layer1.offsetTop;

        // Smooth animation for Box D
        if (scrollY >= layer1Top * 0.5) {
            const relativeScrollD = (scrollY - layer1Top * 0.5) / 1.5;
            boxD.style.transform = `translateY(-${Math.min(relativeScrollD, 100)}px)`;
        }

        // Smooth animation for Box E
        if (scrollY >= layer1Top * 0.5) {
            const relativeScrollE = (scrollY - layer1Top * 0.5) / 2;
            boxE.style.transform = `translateY(-${Math.min(relativeScrollE, 100)}px)`;
        }
    });
});
