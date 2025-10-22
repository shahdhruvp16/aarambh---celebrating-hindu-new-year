import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
// FIX: Import THREE to use its types like THREE.Mesh.
import * as THREE from 'three';

const Kalash = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame(() => (meshRef.current.rotation.y += 0.005));

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
            {[...Array(5)].map((_, i) => (
                <mesh key={i} rotation={[0, (i * Math.PI * 2) / 5, Math.PI / 4]} position={[0, 0.4, 0]}>
                    <planeGeometry args={[0.5, 0.2]} />
                    <meshStandardMaterial color="#228B22" />
                </mesh>
            ))}
            <mesh position={[0, 0.7, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
        </mesh>
    );
};

const WelcomeScreen = () => {
    const scrollToJourney = () => {
        const journeySection = document.getElementById('journey');
        if (journeySection) {
            journeySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                 <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Suspense fallback={null}>
                       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                       <Kalash />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5}/>
                </Canvas>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg"></div>
            </div>
           
            <div className="z-10 text-center flex flex-col items-center">
                 <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="text-5xl md:text-7xl font-teko tracking-wider animate-glow"
                >
                    शुभ नववर्ष
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="mt-4 text-lg md:text-2xl text-deep-saffron"
                >
                    Let’s welcome this sacred beginning with divine light.
                </motion.p>
                <motion.button 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 4 }}
                    onClick={scrollToJourney}
                    className="mt-12 px-8 py-3 bg-gradient-to-r from-deep-saffron to-golden text-dark-bg font-bold rounded-full text-xl shadow-[0_0_15px_#FFD700] hover:shadow-[0_0_25px_#FFD700] transition-shadow duration-300 animate-pulse-slow"
                >
                    Begin Journey
                </motion.button>
            </div>
            <audio autoPlay loop muted>
                <source src="https://example.com/om-shanti.mp3" type="audio/mpeg" />
            </audio>
        </section>
    );
};

export default WelcomeScreen;