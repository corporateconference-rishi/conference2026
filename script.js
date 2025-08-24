/* Scroll animation logic for Objectives Section */
document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d');
    const boxE = document.querySelector('#box-e');
    const layer1 = document.querySelector('.layer-1');

    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const layer1Top = layer1.offsetTop;

        // Smooth animation for Box D
        const relativeScrollD = Math.min((scrollY - layer1Top * 0.6) * 0.4, 100);
        boxD.style.transform = `translateY(-${relativeScrollD}px)`;

        // Smooth animation for Box E
        const relativeScrollE = Math.min((scrollY - layer1Top * 0.6) * 0.4, 100);
        boxE.style.transform = `translateY(-${relativeScrollE}px)`;
    });
});

/* Galaxy Spiral Animation for Hero Section */
document.addEventListener('DOMContentLoaded', () => {
    // Check if Hero section exists
    const heroSection = document.querySelector('#hero');
    if (!heroSection) return; // Exit if Hero section doesn't exist

    // Create Three.js Scene and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75, // Field of view
        window.innerWidth / window.innerHeight, // Aspect ratio
        0.1, // Near clipping
        1000 // Far clipping
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append Renderer Canvas to Hero Section
    heroSection.appendChild(renderer.domElement);

    // Create Spiral Geometry
    const spiralGeometry = new THREE.BufferGeometry();
    const spiralVertices = [];
    const numPoints = 600; // Smooth spiral with more points
    const radius = 5; // Spiral radius

    for (let i = 0; i < numPoints; i++) {
        const angle = i * 0.1; // Spiral angle
        const z = i * 0.05; // Spiral depth for 3D effect
        spiralVertices.push(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            z
        );
    }

    // Create Dynamic Galaxy Colors (Random RGB values)
    const colors = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
        colors[i * 3] = Math.random(); // Red
        colors[i * 3 + 1] = Math.random() * 0.5; // Green
        colors[i * 3 + 2] = 1; // Blue
    }

    spiralGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(spiralVertices, 3)
    );
    spiralGeometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
    );

    // Create Spiral Material
    const spiralMaterial = new THREE.PointsMaterial({
        size: 0.1, // Size of each star-like point
        vertexColors: true, // Enable per-point color
    });

    // Create Spiral Mesh
    const spiral = new THREE.Points(spiralGeometry, spiralMaterial);
    scene.add(spiral);

    // Set Camera Position
    camera.position.z = 30;

    // Animate Spiral Galaxy
    function animate() {
        requestAnimationFrame(animate);
        spiral.rotation.z += 0.005; // Gentle rotation
        renderer.render(scene, camera);
    }
    animate();

    // Make Canvas Responsive
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});
