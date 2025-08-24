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

/* Galaxy Spiral Animation Logic for Hero Section */
document.addEventListener('DOMContentLoaded', () => {
    // Check if Hero section exists and has spiral container
    const spiralContainer = document.querySelector('#spiral-container');
    if (!spiralContainer) return;

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
    spiralContainer.appendChild(renderer.domElement); // Append canvas to spiral container

    // Create Spiral Geometry
    const spiralGeometry = new THREE.BufferGeometry();
    const spiralVertices = [];
    const numPoints = 600; // Smooth spiral definition
    const radius = 5; // Spiral radius

    for (let i = 0; i < numPoints; i++) {
        const angle = i * 0.1; // Angle for spiral
        const z = i * 0.05; // Spiral depth (3D effect)
        spiralVertices.push(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            z
        );
    }

    // Dynamic Colors for Spiral Points
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

    // Spiral Material
    const spiralMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
    });

    const spiral = new THREE.Points(spiralGeometry, spiralMaterial);
    scene.add(spiral);

    // Camera Position
    camera.position.z = 30;

    // Spiral Rotation Animation
    function animate() {
        requestAnimationFrame(animate);
        spiral.rotation.z += 0.005;
        renderer.render(scene, camera);
    }
    animate();

    // Responsive Canvas
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});
