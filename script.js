document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d');
    const boxE = document.querySelector('#box-e');
    const layer1 = document.querySelector('.layer-1');

    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const layer1Top = layer1.offsetTop;

        // Smooth animation for Box D
        const relativeScrollD = Math.min((scrollY - layer1Top * 0.6) * 0.4, 100);
        boxD.style.transform = `translateY(-${relativeScrollD}px)`;

        // Smooth animation for Box E
        const relativeScrollE = Math.min((scrollY - layer1Top * 0.6) * 0.4, 100);
        boxE.style.transform = `translateY(-${relativeScrollE}px)`;
    });
});

