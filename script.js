// Three.js Galaxy Animation
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 50); // Set camera back slightly for galaxy view

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Spiral Galaxy Geometry
const particleCount = 1500; // Total galaxy particles
const particlesGeometry = new THREE.BufferGeometry();
const particlePositions = [];
const particleColors = [];

// Loop to create spiral galaxy particles
for (let i = 0; i < particleCount; i++) {
    const angle = i * 0.2; // Angle in spiral rotation
    const radius = Math.pow(i / particleCount, 0.5) * 40; // Spiral radius expands outward gradually
    const x = Math.cos(angle) * radius; // X position
    const y = Math.sin(angle) * radius; // Y position
    const z = Math.sin(i * 0.02) * 10; // Z position for depth

    particlePositions.push(x, y, z);

    // Add dynamic colors for particles
    const r = Math.random() * 0.8 + 0.2; // Vary red
    const g = Math.random() * 0.5; // Dim green
    const b = Math.random() * 0.8 + 0.2; // Vary blue
    particleColors.push(r, g, b);
}

// Assign attributes to geometry
particlesGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(particlePositions, 3)
);
particlesGeometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(particleColors, 3)
);

// Create galaxy particle material
const particleMaterial = new THREE.PointsMaterial({
    size: 0.3, // Smaller particles for hypnotic effect
    vertexColors: true, // Use particle colors
});

// Add galaxy particle system to the scene
const galaxy = new THREE.Points(particlesGeometry, particleMaterial);
scene.add(galaxy);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Slowly rotate the galaxy
    galaxy.rotation.y += 0.004;
    galaxy.rotation.x += 0.002;

    renderer.render(scene, camera);
}
animate();

// Responsive canvas
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Gradual Blur effect for Objectives Section
document.addEventListener("scroll", function () {
    const objectivesSection = document.getElementById("animated-background");
    if (objectivesSection) {
        const blurStrength = Math.min(window.scrollY / 200, 10); // Control max blur
        objectivesSection.style.backdropFilter = `blur(${blurStrength}px)`;
    }
});
