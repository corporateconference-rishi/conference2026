document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('#hero');

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.zIndex = '-1';
    heroSection.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const spiralGeometry = new THREE.BufferGeometry();
    const spiralVertices = [];
    const numPoints = 600;
    const radius = 5;

    for (let i = 0; i < numPoints; i++) {
        const angle = i * 0.1;
        const z = i * 0.05;
        spiralVertices.push(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            z
        );
    }

    const colors = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
        colors[i * 3] = Math.random(); // Red
        colors[i * 3 + 1] = Math.random() * 0.5; // Green
        colors[i * 3 + 2] = 1; // Blue
    }

    spiralGeometry.setAttribute('position', new THREE.Float32BufferAttribute(spiralVertices, 3));
    spiralGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const spiralMaterial = new THREE.PointsMaterial({
        size: 0.3,
        vertexColors: true,
    });

    const spiral = new THREE.Points(spiralGeometry, spiralMaterial);
    scene.add(spiral);

    function animate() {
        requestAnimationFrame(animate);
        spiral.rotation.z += 0.01;
        renderer.render(scene, camera);
    }

    animate();
});
