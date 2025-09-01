// Configuration
const numParticles = 1200; // Total particles for the spiral
const spiralRadius = 30; // Spiral radius
const spiralDepth = 0.2; // Depth of particles moving inward

// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 0, 100); // Look at the spiral from a distance

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry for Spiral
const particlesGeometry = new THREE.BufferGeometry();
const positions = [];
const colors = [];

// Generate Spiral Particles
for (let i = 0; i < numParticles; i++) {
    const angle = i * 0.1; // Define the rotation angle
    const radius = spiralRadius * Math.exp(-i * 0.02); // Gradually decrease the radius for drilling effect
    const x = Math.cos(angle) * radius; // Rotate around X-axis
    const y = Math.sin(angle) * radius; // Rotate around Y-axis
    const z = -i * spiralDepth; // Particles move inward along Z-axis (drilling)

    positions.push(x, y, z);

    // Dynamic colors for particles
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    colors.push(r, g, b); // Push RGB values for particles
}

// Assign positions and colors to geometry
particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
particlesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

// Particle Material
const particleMaterial = new THREE.PointsMaterial({
    size: 0.5, // Size of each point
    vertexColors: true, // Use colors assigned to the geometry
});

// Create Particle System
const drillingSpiral = new THREE.Points(particlesGeometry, particleMaterial);
scene.add(drillingSpiral);

// Animation Function
function animate() {
    requestAnimationFrame(animate);

    // Slowly rotate the drilling spiral to create a hypnotic effect
    drillingSpiral.rotation.z += 0.02;

    renderer.render(scene, camera);
}

animate();

// Responsive Canvas
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
