import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Text, Float } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
// FIX: Import THREE to use its types like THREE.Group.
import * as THREE from 'three';

// FIX: Explicitly type the deities array to ensure `position` is a tuple [number, number, number], fixing a prop-type error.
const deities: { name: string; message: string; position: [number, number, number]; color: string; }[] = [
    { name: 'Ganesha', message: 'May Ganesha remove all your obstacles.', position: [-4, 0, 0], color: '#FF9933' },
    { name: 'Lakshmi', message: 'May Lakshmi bring wealth and purity.', position: [0, 0, -2], color: '#FF69B4' },
    { name: 'Vishnu', message: 'May Vishnu sustain your peace and happiness.', position: [4, 0, 0], color: '#4169E1' },
];

const Deity = ({ position, color, name, message, onHover }: { position: [number, number, number], color: string, name: string, message: string, onHover: (msg: string | null) => void }) => {
    const ref = useRef<THREE.Group>(null!);
    useFrame((state) => {
        if(ref.current) {
            ref.current.position.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
        }
    });

    return (
        <group ref={ref} position={position}>
            <Float speed={1} rotationIntensity={1} floatIntensity={1}>
                <mesh onPointerOver={() => onHover(message)} onPointerOut={() => onHover(null)}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.1} metalness={0.1} />
                </mesh>
                <Sparkles count={50} scale={2} size={3} speed={0.4} color={color} />
                 <Text position={[0, -1.5, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                    {name}
                </Text>
            </Float>
        </group>
    );
};

const BlessingsSection = () => {
    const [hoveredMessage, setHoveredMessage] = useState<string | null>(null);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });
    
    const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <section ref={sectionRef} className="h-screen w-full relative">
             <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                 <motion.h2 
                    style={{ x }} 
                    className="text-6xl font-teko whitespace-nowrap text-white/10"
                >
                    DIVINE BLESSINGS DIVINE BLESSINGS DIVINE BLESSINGS
                </motion.h2>
            </div>

            <Canvas camera={{ position: [0, 1, 10], fov: 50 }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                    {deities.map((deity, index) => (
                        <Deity key={index} {...deity} onHover={setHoveredMessage} />
                    ))}
                </Suspense>
            </Canvas>

            {hoveredMessage && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 p-4 bg-black/50 backdrop-blur-sm rounded-lg border border-golden text-center">
                    <p className="text-golden text-xl">{hoveredMessage}</p>
                </div>
            )}
        </section>
    );
};

export default BlessingsSection;