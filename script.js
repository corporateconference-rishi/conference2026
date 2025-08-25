// Configuration
const numParticles = 1000; // Total particles
const spiralRadius = 50; // Radius of the spiral
const particleSize = 0.1; // Size of each particle (galaxy star)

// Create Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping
    1000 // Far clipping
);
camera.position.z = 100; // Position the camera further back for better view

const renderer = new THREE.WebGLRenderer({ antialias: true }); // Smooth edges
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create Particle Geometry
const particlesGeometry = new THREE.BufferGeometry();
const particlePositions = [];
const particleColors = [];
const spiralDepth = 0.3; // Spread depth of the spiral

for (let i = 0; i < numParticles; i++) {
    const angle = i * 0.1; // Spiral angle (dynamic)
    const x = Math.cos(angle) * spiralRadius * (i / numParticles); // Spiral widening outwards
    const y = Math.sin(angle) * spiralRadius * (i / numParticles);
    const z = i * spiralDepth; // Spiral depth

    // Add positions
    particlePositions.push(x, y, z);

    // Add colors for each particle
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    particleColors.push(r, g * 0.5, b); // Dim the green channel
}

// Assign Attributes to Geometry
particlesGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(particlePositions, 3)
);
particlesGeometry.setAttribute(
    'color',
    new THREE.Float32BufferAttribute(particleColors, 3)
);

// Material for Particles
const particlesMaterial = new THREE.PointsMaterial({
    size: particleSize,
    vertexColors: true, // Use color attribute from geometry
});

// Create Particle Mesh and Add to Scene
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Animation Function
function animate() {
    requestAnimationFrame(animate);

    // Rotate Spiral Slowly
    particles.rotation.y += 0.005; // Slow rotation

    // Render Scene
    renderer.render(scene, camera);
}
animate();

// Responsive Canvas
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
