/* Spiral Animation Logic for Hero Section */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Starting Spiral Animation...");

    // Get the Hero Section
    const heroSection = document.querySelector('#hero');
    if (!heroSection) {
        console.error("Hero section not found!");
        return;
    }

    console.log("Hero section found!");

    // Create a Canvas for Spiral Rendering
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1'; // Ensures the canvas stays as background
    heroSection.appendChild(canvas);

    console.log("Canvas added to Hero Section.");

    // Handle Resizing for the Canvas
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log("Canvas resized!");
    });

    // Initialize Three.js Rendering
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Adds a black background for clarity

    // Setup Camera for Visibility
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50; // Move camera back to ensure spiral visibility

    console.log("Camera position set:", camera.position);

    // Create Spiral Geometry
    const spiralGeometry = new THREE.BufferGeometry();
    const spiralVertices = [];
    const numPoints = 600;
    const radius = 5;

    for (let i = 0; i < numPoints; i++) {
        const angle = i * 0.2; // Adjust angle spacing for better spiral effect
        const z = i * 0.1; // Add depth to spiral
        spiralVertices.push(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            z
        );
    }

    console.log("Spiral vertices generated:", spiralVertices);

    const colors = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
        colors[i * 3] = Math.random();
        colors[i * 3 + 1] = Math.random() * 0.5;
        colors[i * 3 + 2] = 1; // Strong blue for galaxy feel
    }

    spiralGeometry.setAttribute('position', new THREE.Float32BufferAttribute(spiralVertices, 3));
    spiralGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    console.log("Spiral colors generated:", colors);

    // Apply Material and Add Points to Scene
    const spiralMaterial = new THREE.PointsMaterial({
        size: 0.3, // Increase point size for visibility
        vertexColors: true, // Enable RGB colors for points
    });

    const spiral = new THREE.Points(spiralGeometry, spiralMaterial);
    scene.add(spiral);

    console.log("Spiral added to scene!");

    // Basic Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        spiral.rotation.z += 0.01; // Rotate on Z-axis
        renderer.render(scene, camera);
    }

    animate();
    console.log("Spiral animation running.");
});
