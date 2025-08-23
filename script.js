document.addEventListener("DOMContentLoaded", () => {
    const boxD = document.querySelector("#box-d");
    const boxE = document.querySelector("#box-e");
    const boxA = document.querySelector("#box-a");
    const boxB = document.querySelector("#box-b");
    const boxC = document.querySelector("#box-c");

    document.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        // Stop Box D at Box A
        const boxAStopPoint = boxA.offsetTop;
        if (scrollY + boxD.offsetHeight <= boxAStopPoint) {
            boxD.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxD.style.transform = `translateY(${boxAStopPoint - boxD.offsetHeight}px)`;
        }

        // Stop Box E at Boxes B and C
        const boxBCStopPoint = boxB.offsetTop; // Stop point overlaps both B and C
        if (scrollY + boxE.offsetHeight <= boxBCStopPoint) {
            boxE.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxE.style.transform = `translateY(${boxBCStopPoint - boxE.offsetHeight}px)`;
        }
    });
});
