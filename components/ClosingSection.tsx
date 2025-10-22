import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Fireworks = () => {
    // FIX: Import `useRef` from React to resolve reference error.
    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (pointsRef.current) {
            // Simple animation: rotate the fireworks sphere
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    const particles = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Create particles in a spherical distribution
            const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
            const phi = Math.acos(THREE.MathUtils.randFloat(-1, 1));
            const r = THREE.MathUtils.randFloat(3, 7);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        return positions;
    }, []);

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#FFD700"
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                transparent
                opacity={0.8}
            />
        </points>
    );
};

const ClosingSection = () => {
    return (
        <footer className="h-screen w-full relative flex items-center justify-center text-center p-4 overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-70">
                <Canvas camera={{ position: [0, 0, 10] }}>
                    <Suspense fallback={null}>
                       <Fireworks />
                    </Suspense>
                </Canvas>
            </div>
             <div className="z-10 flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-teko text-golden animate-glow">
                    नव संवत्सर की हार्दिक शुभकामनाएँ
                </h2>
                <p className="mt-4 text-xl md:text-2xl text-pure-white max-w-3xl">
                    May this New Year light up your path with knowledge, courage, and divinity.
                </p>
                <p className="mt-12 text-deep-saffron">
                    A celebration of light, tradition, and new beginnings.
                </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark-bg to-transparent"></div>
        </footer>
    );
};

export default ClosingSection;