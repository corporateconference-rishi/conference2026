document.addEventListener('DOMContentLoaded', () => {
    console.log("Spiral animation logic starting...");

    const heroSection = document.querySelector('#hero');
    if (!heroSection) {
        console.error("Hero section not found!");
        return;
    }

    // Create a Canvas for Rendering
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.zIndex = '-1'; // Push canvas behind Hero content
    heroSection.appendChild(canvas);

    // Three.js Renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Three.js Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background

    // Three.js Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // Test Cube (Red Box for Debugging)
    const testCube = new THREE.Mesh(
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.MeshBasicMaterial({ color: 0xff0000 }) // Red Cube
    );
    scene.add(testCube);

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        testCube.rotation.x += 0.01;
        testCube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
});
