document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d');
    const boxE = document.querySelector('#box-e');
    const boxA = document.querySelector('#box-a');
    const boxB = document.querySelector('#box-b');

    document.addEventListener('scroll', () => {
        const boxAOffsetTop = boxA.offsetTop + boxA.offsetHeight; // Stop point for D
        const boxBOffsetTop = boxB.offsetTop + boxB.offsetHeight; // Stop point for E

        const scrollY = window.scrollY;

        // Box D scroll control
        if (scrollY + boxD.offsetHeight < boxAOffsetTop) {
            boxD.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxD.style.transform = `translateY(${boxAOffsetTop - boxD.offsetHeight}px)`;
        }

        // Box E scroll control
        if (scrollY + boxE.offsetHeight < boxBOffsetTop) {
            boxE.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxE.style.transform = `translateY(${boxBOffsetTop - boxE.offsetHeight}px)`;
        }
    });
});
