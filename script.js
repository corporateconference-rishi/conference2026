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
const sphereGeometry = new THREE.SphereBufferGeometry(20, 128, 128); // Radius increased significantly: 20, higher detail: 128x128
const galaxyMaterial = new THREE.PointsMaterial({
    size: 0.15,
    vertexColors: true, // Enable individual galaxy gradient colors
});

const particles = [];
const colors = [];

for (let i = 0; i < sphereGeometry.attributes.position.count; i++) {
    particles.push(
        sphereGeometry.attributes.position.array[i * 3],    // X
        sphereGeometry.attributes.position.array[i * 3 + 1], // Y
        sphereGeometry.attributes.position.array[i * 3 + 2]  // Z
    );

    // Add galaxy-like colors: randomized RGB values (e.g., purples, blues, whites)
    colors.push(
        Math.random(), // Red
        Math.random() * 0.5, // Green
        Math.random() // Blue
    );
}

// Set attributes for the geometry
const particleGeometry = new THREE.BufferGeometry();
particleGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(particles, 3)
);
particleGeometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors, 3)
);

// Create Points
const galaxyGlobe = new THREE.Points(particleGeometry, galaxyMaterial);
scene.add(galaxyGlobe);

// Adjust Camera Position for Full-Viewport Fit
camera.position.z = 40; // Move back and scale globe into view

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Spin horizontally
    galaxyGlobe.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

// Responsive Canvas
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
