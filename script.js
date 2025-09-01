// Configuration for Galaxy Drill Animation
const numParticles = 5000; // Large number of particles for a dense galaxy
const spiralFactor = 20; // Controls the expanding nature of the spiral
const drillDepth = 1.5; // Drilling depth along the Z-axis

const scene = new THREE.Scene(); // Three.js Scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(0, 0, 200); // Position camera outward to see the large spiral

const renderer = new THREE.WebGLRenderer({ antialias: true }); // Renderer with smooth edges
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Galaxy Spiral Geometry
const particlesGeometry = new THREE.BufferGeometry();
const positions = [];
const colors = [];

// Generate particles for spiral drill
for (let i = 0; i < numParticles; i++) {
    const angle = i * 0.1; // Spiral angle
    const radius = spiralFactor * Math.sqrt(i); // Radius grows outward exponentially
    const x = Math.cos(angle) * radius; // X coordinate
    const y = Math.sin(angle) * radius; // Y coordinate
    const z = -i * drillDepth; // Z axis for drilling effect

    positions.push(x, y, z); // Add positions to geometry

    // Add galaxy particle colors (vibrant RGB values)
    const r = Math.random() * 0.8 + 0.2; // R channel
    const g = Math.random() * 0.5 + 0.2; // G channel
    const b = Math.random() * 1.0 + 0.5; // B channel (enhanced vibrance)
    colors.push(r, g, b); // Add colors to geometry
}

// Assign attributes to spiral geometry
particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
particlesGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

// Particle Material for Galaxy Spiral
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.4, // Particle size
    vertexColors: true, // Use colors assigned to geometry
    transparent: true,
    opacity: 0.8, // Slight transparency for glow effect
});

// Create Galaxy Object
const galaxySpiral = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(galaxySpiral);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate Spiral on Y-axis (hypnotic motion) and Z for drilling effect
    galaxySpiral.rotation.y += 0.005; // Slow rotation for hypnotic feel
    galaxySpiral.rotation.z += 0.003; // Z-axis drilling rotation

    renderer.render(scene, camera);
}
animate();

// Responsive Canvas
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
