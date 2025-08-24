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

// Create DNA Helix Geometry
const dnaGroup = new THREE.Group(); // Group to hold the whole DNA shape
const numStrands = 300; // Total points along the strands
const radius = 2; // Radius of DNA spiral

// DNA Arms
function createDNAArm(color) {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = new Float32Array(numStrands * 3);

    for (let i = 0; i < numStrands; i++) {
        const angle = (i / numStrands) * Math.PI * 10; // DNA twist
        const x = Math.cos(angle) * radius; // Helix strand X
        const z = Math.sin(angle) * radius; // Helix strand Z
        const y = i * 0.1 - (numStrands * 0.1) / 2; // Height position (centered)

        vertices.push(x, y, z);

        // Add galaxy-like colors
        colors[i * 3] = color.r; // Red
        colors[i * 3 + 1] = color.g; // Green
        colors[i * 3 + 2] = color.b; // Blue
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.05, // Point size
        vertexColors: true, // Enable per-point colors
    });

    return new THREE.Points(geometry, material);
}

// Create Two Helices (Galaxy Colors)
const helix1 = createDNAArm(new THREE.Color(0xff00ff)); // Purple-pink
const helix2 = createDNAArm(new THREE.Color(0x00ffff)); // Cyan-blue

// Offset the second helix
helix2.geometry.translate(0.3, 0, 0); // Subtle offset for 3D effect

// Add to DNA Group
dnaGroup.add(helix1);
dnaGroup.add(helix2);
scene.add(dnaGroup);

// Set Camera Position
camera.position.z = 15;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Horizontal rotation (spin around x-axis)
    dnaGroup.rotation.x += 0.01;

    renderer.render(scene, camera);
}

animate();

// Make Canvas Responsive
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
