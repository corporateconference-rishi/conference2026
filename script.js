// Create Scene and Renderer
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
const spiralColor = new THREE.Color(0xff00ff); // Galaxy pink-purple color

let numLoops = 4; // Total loops in spiral
let numPoints = 200; // Points for smoothness
const radius = 5; // Radius of the spiral

for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2 * numLoops; // Angle for each point
    const z = i * 0.05; // Adjust spiral rise
    spiralVertices.push(
        Math.cos(angle) * radius, // X-coordinate
        Math.sin(angle) * radius, // Y-coordinate
        z // Z-coordinate for depth
    );
}

// Add spiral geometry
spiralGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(spiralVertices, 3)
);
const spiralMaterial = new THREE.PointsMaterial({
    size: 0.1, // Star size
    color: spiralColor, // Points color
});
const spiral = new THREE.Points(spiralGeometry, spiralMaterial);
scene.add(spiral);

// Set Camera Position
camera.position.z = 30;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    spiral.rotation.z += 0.01; // Rotate the spiral gently
    renderer.render(scene, camera);
}
animate();

// Make Canvas Responsive
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
