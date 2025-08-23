document.addEventListener("DOMContentLoaded", () => {
    const learnMoreButton = document.querySelector(".learn-more-btn");
    const objectivesSection = document.querySelector("#objectives");

    learnMoreButton.addEventListener("click", (e) => {
        e.preventDefault();
        objectivesSection.scrollIntoView({
            behavior: "smooth",
        });
    });
});
