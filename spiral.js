/* Galaxy Spiral Animation Logic for Hero Section */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Spiral animation logic loading...");

    const heroSection = document.querySelector('#hero');
    if (!heroSection) {
        console.error("Hero section not found!");
        return;
    }

    console.log("Hero section found!");

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1'; // Push canvas behind Hero content
    heroSection.appendChild(canvas);

    console.log("Canvas appended successfully!");

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log("Canvas resized!");
    });

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Add black background

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 40; // Move camera for viewing spiral

    console.log("Camera settings:", camera);

    const spiralGeometry = new THREE.BufferGeometry();
    const spiralVertices = [];
    const numPoints = 600;
    const radius = 5;

    for (let i = 0; i < numPoints; i++) {
        const angle = i * 0.1; // Spiral increment
        const z = i * 0.05; // Depth increment
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
        colors[i * 3 + 2] = 1;
    }

    console.log("Spiral colors generated:", colors);

    spiralGeometry.setAttribute('position', new THREE.Float32BufferAttribute(spiralVertices, 3));
    spiralGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    spiralGeometry.translate(0, 0, -20); // Adjust position for visibility

    console.log("Generated geometry:", spiralGeometry);

    const spiralMaterial = new THREE.PointsMaterial({
        size: 1, // Point size for rendering
        vertexColors: true,
    });

    const spiral = new THREE.Points(spiralGeometry, spiralMaterial);
    scene.add(spiral);

    console.log("Spiral added to scene!");

    function animate() {
        requestAnimationFrame(animate);
        spiral.rotation.z += 0.005; // Rotate spiral
        renderer.render(scene, camera);
    }

    animate();
    console.log("Spiral animation started!");
});
