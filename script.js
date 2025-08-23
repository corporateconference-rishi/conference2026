document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation for Box D
    document.addEventListener('scroll', () => {
        const boxD = document.querySelector('#box-d');
        const boxDPosition = boxD.getBoundingClientRect().top;
        if (boxDPosition < window.innerHeight - 100) {
            boxD.classList.add('scrolled');
        }
    });

    // Scroll Animation for Box E
    document.addEventListener('scroll', () => {
        const boxE = document.querySelector('#box-e');
        const boxEPosition = boxE.getBoundingClientRect().top;
        if (boxEPosition < window.innerHeight - 100) {
            boxE.classList.add('scrolled');
        }
    });
});
