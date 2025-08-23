document.addEventListener("DOMContentLoaded", () => {
    const boxD = document.querySelector("#box-d");
    const boxE = document.querySelector("#box-e");
    const layer1 = document.querySelector(".layer-1");

    document.addEventListener("scroll", () => {
        const layer1Top = layer1.offsetTop;
        const scrollY = window.scrollY;

        // Smoothly scroll Boxes D and E upward
        boxD.style.transform = `translateY(${scrollY * 0.5}px)`; // Adjust speed
        boxE.style.transform = `translateY(${scrollY * 0.3}px)`; // Adjust speed

        // Overlap Layer 1 content (65% coverage)
        if (scrollY >= layer1Top * 0.65) {
            boxD.style.transform = `translateY(${layer1.offsetHeight * -0.65}px)`;
            boxE.style.transform = `translateY(${layer1.offsetHeight * -0.65}px)`;
        }
    });
});
