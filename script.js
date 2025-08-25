// Configuration
const numParticles = 1200; // Increase particle count for a denser spiral
const spiralRadius = 40; // Radius of the spiral
const spiralDepth = 0.2; // Depth of spiral

// Create Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 100; // Position camera to view entire spiral

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create Particle Geometry
const particlesGeometry = new THREE.BufferGeometry();
const particlePositions = [];
const particleColors = [];

for (let i = 0; i < numParticles; i++) {
    const angle = i * 0.2; // Angle of rotation at the particle's position
    const x = Math.cos(angle) * spiralRadius * (i / numParticles); // X position
    const y = Math.sin(angle) * spiralRadius * (i / numParticles); // Y position
    const z = i * spiralDepth; // Z position (depth)

    // Push coordinates into position array
    particlePositions.push(x, y, z);

    // Random colors for the particles (galaxy stars)
    const r = Math.random();
    const g = Math.random() * 0.5;
    const b = Math.random();
    particleColors.push(r, g, b);
}

// Create Attributes
particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
particlesGeometry.setAttribute("color", new THREE.Float32BufferAttribute(particleColors, 3));

// Particle Material
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.5, // Particle size
    vertexColors: true, // Enable custom particle colors
});

// Add Particles to the Scene
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Animation Function
function animate() {
    requestAnimationFrame(animate);

    // Rotate the particles on the Y-axis for dynamic animation
    particles.rotation.y += 0.002;

    renderer.render(scene, camera);
}
animate();

// Make Renderer Responsive
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
