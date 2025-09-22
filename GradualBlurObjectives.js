import React, { useRef, useEffect } from 'react';
import GradualBlur from './GradualBlur'; // Import the main GradualBlur component
import './GradualBlur.css'; // Import the GradualBlur CSS styles

function GradualBlurObjectives() {
    // Use a ref to attach dynamic blur to a specific section.
    const objectivesRef = useRef(null);

    useEffect(() => {
        // Ensures that any additional setup, if needed, happens after rendering
        console.log("Objectives section loaded.");
    }, []);

    return (
        <div
            ref={objectivesRef}
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 100%)', // Dark gradient background
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                padding: '2rem'
            }}
        >
            {/* Title */}
            <h1
                style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1rem',
                    textAlign: 'center'
                }}
            >
                Objectives
            </h1>

            {/* Objectives List */}
            <ul
                style={{
                    listStyleType: 'none',
                    margin: '0',
                    padding: '0',
                    textAlign: 'center',
                    fontSize: '1.6rem',
                    lineHeight: '2rem'
                }}
            >
                <li style={{ marginBottom: '1.5rem' }}>🚀 Empower innovation through cutting-edge technology.</li>
                <li style={{ marginBottom: '1.5rem' }}>🤖 Seamlessly integrate artificial intelligence and commerce.</li>
                <li style={{ marginBottom: '1.5rem' }}>🌐 Foster collaboration between industries worldwide.</li>
                <li style={{ marginBottom: '1.5rem' }}>✨ Inspire creativity and leadership in tech communities.</li>
            </ul>

            {/* Gradual Blur Effect */}
            <GradualBlur
                preset="smooth" // Use a "smooth" blur preset
                target="parent" // Attach the blur to the parent section
                onAnimationComplete={() => console.log("Blur animation completed!")}
                responsive
                duration="0.5s"
                easing="ease-in-out"
                strength={3}
                divCount={6}
                animated="scroll" // Makes the blur responsive to scroll
            />
        </div>
    );
}

export default GradualBlurObjectives;
