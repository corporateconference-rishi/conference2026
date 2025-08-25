// Create a Three.js Scene and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping
    1000 // Far clipping
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create Spiral Geometry
const spiralGeometry = new THREE.BufferGeometry();
const spiralVertices = [];
const numPoints = 600; // Increase for smoothness and unlimited loops
const radius = 5; // Spiral radius

for (let i = 0; i < numPoints; i++) {
    const angle = i * 0.1; // Spiral angle (dynamic for unlimited loops)
    const z = i * 0.05; // Spiral depth
    spiralVertices.push(
        Math.cos(angle) * radius, // X-coordinate
        Math.sin(angle) * radius, // Y-coordinate
        z // Z-coordinate for depth
    );
}

// Create Dynamic Galaxy Colors
const colors = new Float32Array(numPoints * 3);
for (let i = 0; i < numPoints; i++) {
    colors[i * 3] = Math.random(); // Red
    colors[i * 3 + 1] = Math.random() * 0.5; // Green
    colors[i * 3 + 2] = 1; // Blue
}
spiralGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

// Add Spiral Geometry to Scene
spiralGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(spiralVertices, 3)
);
const spiralMaterial = new THREE.PointsMaterial({
    size: 0.1, // Star point size
    vertexColors: true, // Enable galaxy-like colors
});
const spiral = new THREE.Points(spiralGeometry, spiralMaterial);
scene.add(spiral);

// Set Camera Position
camera.position.z = 30;

// Animate the Spiral Galaxy
function animate() {
    requestAnimationFrame(animate); // Keep animating
    spiral.rotation.z += 0.005; // Slow rotation
    renderer.render(scene, camera); // Render the scene
}
animate();

// Make Canvas Responsive
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

