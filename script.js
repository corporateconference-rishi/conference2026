// Configuration
const numParticles = 1500; // Higher particle count for denser spiral
const spiralFactor = 5; // Controls spiral expansion rate
const spiralDepth = 0.4; // Depth of particles along Z-axis

// Create Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 100); // Positioned to capture the spiral around the center

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Particles Geometry and Colors
const particlesGeometry = new THREE.BufferGeometry();
const particlePositions = [];
const particleColors = [];

for (let i = 0; i < numParticles; i++) {
    const angle = i * 0.1; // Spiral angle
    const radius = spiralFactor * angle; // Controls how far particles move outward
    const x = Math.cos(angle) * radius; // X position (circular motion)
    const y = Math.sin(angle) * radius; // Y position
    const z = spiralDepth * i; // Z position (depth into spiral)

    // Push each particle's position into the array
    particlePositions.push(x, y, z);

    // Create random colors for each particle
    const r = Math.random();
    const g = Math.random() * 0.5;
    const b = Math.random();
    particleColors.push(r, g, b); // RGB values
}

// Create Particle Attributes
particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
particlesGeometry.setAttribute("color", new THREE.Float32BufferAttribute(particleColors, 3));

// Material for Particles
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.5, // Particle point size
    vertexColors: true, // Enable galaxy-like colors for particles
});

// Add Particle System to Scene
const spiralParticles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(spiralParticles);

// Animation Function
function animate() {
    requestAnimationFrame(animate);

    // Rotate Spiral on its Z-axis
    spiralParticles.rotation.z += 0.002; // Slow rotation for dynamic effect

    renderer.render(scene, camera);
}
animate();

// Responsive Rendering
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
