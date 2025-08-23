document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d');
    const boxE = document.querySelector('#box-e');
    const boxA = document.querySelector('#box-a');
    const boxB = document.querySelector('#box-b');

    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Stop Box D at Box A
        if (scrollY < boxA.offsetTop - 100) {
            boxD.classList.add('scrolled');
        } else {
            boxD.classList.remove('scrolled');
            boxD.classList.add('stop');
        }

        // Stop Box E at Box B and C
        if (scrollY < boxB.offsetTop - 100) {
            boxE.classList.add('scrolled');
        } else {
            boxE.classList.remove('scrolled');
            boxE.classList.add('stop');
        }
    });
});
