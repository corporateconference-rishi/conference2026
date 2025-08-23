document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d');
    const boxE = document.querySelector('#box-e');
    const boxA = document.querySelector('#box-a');
    const boxB = document.querySelector('#box-b');
    const boxC = document.querySelector('#box-c');

    document.addEventListener('scroll', () => {
        const boxAOffset = boxA.offsetTop;
        const boxBOffset = boxB.offsetTop;
        const boxCOffset = boxC.offsetTop;

        const scrollY = window.scrollY;

        // Box D: Stop scrolling when it overlaps Box A
        if (scrollY + boxD.offsetHeight <= boxAOffset) {
            boxD.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxD.style.transform = `translateY(${boxAOffset - boxD.offsetHeight}px)`;
        }

        // Box E: Stop scrolling when it overlaps Boxes B and C
        const boxBCCombinedOffset = Math.min(boxBOffset, boxCOffset); // Topmost position between B/C
        if (scrollY + boxE.offsetHeight <= boxBCCombinedOffset) {
            boxE.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxE.style.transform = `translateY(${boxBCCombinedOffset - boxE.offsetHeight}px)`;
        }
    });
});
