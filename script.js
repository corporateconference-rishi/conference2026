// Create Scene and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create Galaxy Globe Geometry
const sphereGeometry = new THREE.SphereBufferGeometry(5, 32, 32); // Sphere radius: 5, detail level: 32x32
const galaxyMaterial = new THREE.PointsMaterial({
    size: 0.1, // Size of each dot
    color: new THREE.Color(0xffffff), // White glow (can randomize later)
    vertexColors: true, // Enable individual dot colors
});

const particles = [];
const colors = [];

for (let i = 0; i < sphereGeometry.attributes.position.count; i++) {
    particles.push(
        sphereGeometry.attributes.position.array[i * 3],    // X
        sphereGeometry.attributes.position.array[i * 3 + 1], // Y
        sphereGeometry.attributes.position.array[i * 3 + 2]  // Z
    );

    // Add galaxy-like colors: randomized pinks/blues
    colors.push(
        Math.random(), // Red
        Math.random() * 0.5, // Green
        Math.random() * 1.0 // Blue
    );
}

// Set attributes for the geometry (positions and colors)
const particleGeometry = new THREE.BufferGeometry();
particleGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(particles, 3)
);
particleGeometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors, 3)
);

// Create Points for the Sphere (Galaxy Effect)
const galaxyGlobe = new THREE.Points(particleGeometry, galaxyMaterial);
scene.add(galaxyGlobe);

// Position Camera
camera.position.z = 15;

// Animation Loop (Globe Rotation)
function animate() {
    requestAnimationFrame(animate);
    galaxyGlobe.rotation.y += 0.005; // Gentle spinning motion on Y-axis
    renderer.render(scene, camera);
}
animate();

// Responsive Canvas
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
