document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d'); // Dynamic Box D
    const boxE = document.querySelector('#box-e'); // Dynamic Box E
    const boxA = document.querySelector('#box-a'); // Fixed Box A
    const boxB = document.querySelector('#box-b'); // Fixed Box B

    // Track scroll behavior
    document.addEventListener('scroll', () => {
        const boxDStop = boxA.offsetTop; // Box D stops at Box A's top offset
        const boxEStop = boxB.offsetTop; // Box E stops at Box B and C's combined top offset

        const scrollY = window.scrollY; // User's current scroll position

        // Box D behavior: Align to Box A and stop
        if (scrollY < boxDStop - 200) {
            boxD.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxD.style.transform = `translateY(${boxDStop}px)`;
        }

        // Box E behavior: Align to Box B+C and stop
        if (scrollY < boxEStop - 200) {
            boxE.style.transform = `translateY(${scrollY}px)`;
        } else {
            boxE.style.transform = `translateY(${boxEStop}px)`;
        }
    });
});
