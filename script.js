document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d');
    const boxE = document.querySelector('#box-e');
    const layer1 = document.querySelector('.layer-1');

    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const layer1Top = layer1.offsetTop;

        // Smooth scrolling for Box D (faster)
        if (scrollY >= layer1Top * 0.5) {
            boxD.style.transform = `translateY(-${(scrollY - layer1Top * 0.5) * 0.5}px)`;
        }

        // Smooth scrolling for Box E (slower)
        if (scrollY >= layer1Top * 0.7) {
            boxE.style.transform = `translateY(-${(scrollY - layer1Top * 0.7) * 0.3}px)`;
        }
    });
});
