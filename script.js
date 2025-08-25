// script.js
document.addEventListener("DOMContentLoaded", () => {
  const globe = document.getElementById("globe");
  const spiral = document.getElementById("spiral");

  // After 3 seconds, hide the globe and show the spiral
  setTimeout(() => {
    globe.style.display = "none"; // Hide the globe completely after fade-out
    spiral.hidden = false; // Show the spiral container
  }, 3000); // Matches the fadeOut duration (3 seconds)
});
