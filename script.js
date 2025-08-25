// script.js
document.addEventListener("DOMContentLoaded", () => {
  const globe = document.getElementById("globe");
  const spiral = document.getElementById("spiral");

  // After 3 seconds, hide the globe and show the galaxy spiral animation
  setTimeout(() => {
    globe.style.display = "none"; // Hides the rotating globe
    spiral.hidden = false;       // Displays the spiral galaxy
  }, 3000); // Matches the fade-out duration of the globe
});
