// Create Scene and Renderers for Globe and Spiral
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
const globeGeometry = new THREE.SphereBufferGeometry(5, 32, 32);
const globeMaterial = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
});
const globe = new THREE.Points(globeGeometry, globeMaterial);
scene.add(globe);
camera.position.z = 15;

// Animate Globe (3 loops)
let globeFrameCount = 0;
function animateGlobe() {
    if (globeFrameCount < 600) { // Approx. 3 loops (~600 frames)
        requestAnimationFrame(animateGlobe);
        globe.rotation.y += 0.01; // Spin
        renderer.render(scene, camera);
    } else {
        shrinkGlobe(); // Begin shrinking the globe
    }
    globeFrameCount++;
}

// Shrink Globe and Transition to Spiral
function shrinkGlobe() {
    const shrinkInterval = setInterval(() => {
        if (globe.scale.x > 0) {
            globe.scale.x -= 0.01;
            globe.scale.y -= 0.01;
            globe.scale.z -= 0.01;
        } else {
            clearInterval(shrinkInterval);
            scene.remove(globe); // Remove globe completely
            showSpiral(); // Transition to spiral
        }
        renderer.render(scene, camera);
    }, 16);
}

// Spiral Animation
function showSpiral() {
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

    spiralGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(spiralVertices, 3)
    );
    const spiralMaterial = new THREE.PointsMaterial({ size: 0.1, color: 0xff00ff });
    const spiral = new THREE.Points(spiralGeometry, spiralMaterial);

    scene.add(spiral);
    camera.position.z = 30;

    function animateSpiral() {
        requestAnimationFrame(animateSpiral);
        spiral.rotation.z += 0.005; // Infinite spin
        renderer.render(scene, camera);
    }
    animateSpiral();

    // Transition to Hero Section after Spiral Appears
    setTimeout(() => showHeroSection(), 3000);
}

// Hero Section Animation
function showHeroSection() {
    document.getElementById("hero-section").style.display = "block";
    const conferenceTitle = document.querySelector(".conference-title");
    conferenceTitle.style.opacity = 1; // Fade-in effect
}

// Run Initial Animation
animateGlobe();
