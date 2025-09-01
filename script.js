// Configuration
const numParticles = 10000; // Massive number of particles for a fully immersive spiral
const spiralSpreadFactor = 50; // Controls how wide the spiral grows
const spiralDepthFactor = 0.7; // Controls how deeply particles "drill" into the screen

// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(0, 0, 100); // Set initial camera position for a centered wide view

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Galaxy Particle Geometry
const particlesGeometry = new THREE.BufferGeometry();
const positions = [];
const colors = [];

// Generate Particles for the Drill Spiral
for (let i = 0; i < numParticles; i++) {
    const angle = i * 0.1; // Rotate each particle to form a spiral
    const radius = i * spiralSpreadFactor / numParticles; // Gradually widen the spiral
    const x = Math.cos(angle) * radius; // X coordinate
    const y = Math.sin(angle) * radius; // Y coordinate
    const z = -i * spiralDepthFactor; // Z coordinate to create a drilling effect

    positions.push(x, y, z); // Add particle position to geometry

    // Dynamic colors for a galaxy effect
    const r = Math.random() * 0.8 + 0.2; // R channel
    const g = Math.random() * 0.5 + 0.2; // G channel
    const b = Math.random() * 1.0 + 0.5; // B channel
    colors.push(r, g, b); // Add color values to geometry
}

// Assign Attributes to Geometry
particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
particlesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

// Material for the Spiral
const particleMaterial = new THREE.PointsMaterial({
    size: 0.6, // Large size for particles to make the galaxy impactful
    vertexColors: true, // Use assigned colors for particles
    transparent: true,
    opacity: 0.9, // Slight transparency for ethereal effect
});

// Create Galaxy Drill Object
const galaxyDrill = new THREE.Points(particlesGeometry, particleMaterial);
scene.add(galaxyDrill);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate both horizontally and vertically for a dynamic motion
    galaxyDrill.rotation.y += 0.002; // Slowly spin around the Y axis
    galaxyDrill.rotation.z += 0.005; // Drilling effect along Z axis

    renderer.render(scene, camera);
}

animate(); // Start the animation

// Responsive Canvas Adjustment
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
