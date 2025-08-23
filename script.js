document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d');
    const boxE = document.querySelector('#box-e');
    const boxA = document.querySelector('#box-a');
    const boxB = document.querySelector('#box-b');

    document.addEventListener('scroll', () => {
        const boxAOffsetTop = boxA.offsetTop + boxA.offsetHeight;
        const boxBCOffsetTop = boxB.offsetTop + boxB.offsetHeight;

        const scrollY = window.scrollY;

        // Box D scroll logic
        if (scrollY + boxD.offsetHeight < boxAOffsetTop) {
            boxD.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxD.style.transform = `translateY(${boxAOffsetTop - boxD.offsetHeight}px)`;
        }

        // Box E scroll logic
        if (scrollY + boxE.offsetHeight < boxBCOffsetTop) {
            boxE.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxE.style.transform = `translateY(${boxBCOffsetTop - boxE.offsetHeight}px)`;
        }
    });
});
