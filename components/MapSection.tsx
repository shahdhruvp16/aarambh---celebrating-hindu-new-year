import React, { Suspense, useRef, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import type { RegionData } from '../types';

const regions: RegionData[] = [
    { name: 'Gujarat', coords: [0.1, 0.7, 0.7], title: 'Chaitra Shukla Pratipada', description: "New beginnings with prayers to Lord Vishnu and lighting of lamps symbolizing wisdom.", animationData: null },
    { name: 'Rajasthan', coords: [0, 0.8, 0.6], title: 'Thapna & Ghughra Poojan', description: "Invoking prosperity and purity at dawn with Ghughra Poojan.", animationData: null },
    { name: 'Maharashtra', coords: [0.1, 0.5, 0.85], title: 'Gudi Padwa', description: "Symbolizing triumph, purity, and renewal with the hoisting of the Gudi.", animationData: null },
    { name: 'Kashmir', coords: [-0.1, 1, 0.1], title: 'Navreh', description: "The sacred New Year symbolizing new knowledge and light.", animationData: null },
    { name: 'Sindhi', coords: [0.2, 0.8, 0.6], title: 'Cheti Chand', description: "Marking the birth of Jhulelal, blessing all beings with peace.", animationData: null },
    { name: 'Karnataka', coords: [0.2, 0.3, 0.9], title: 'Ugadi', description: "Embracing both the sweetness and bitterness of life.", animationData: null },
];

const Earth = () => {
    const texture = useMemo(() => new THREE.TextureLoader().load('https://picsum.photos/seed/earthmap/1024/512'), []);
    return (
        <Sphere args={[1, 64, 64]}>
            <meshStandardMaterial map={texture} color="#FFD700" emissive="#FF9933" emissiveIntensity={0.2} />
        </Sphere>
    );
};

// FIX: Extracted props to an interface for better type safety and clarity, which can resolve subtle type errors.
interface PinProps {
    position: [number, number, number];
    onClick: () => void;
}

const Pin = ({ position, onClick }: PinProps) => (
    <mesh position={position}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#FF9933" toneMapped={false} />
        <Html distanceFactor={2.5}>
            <div 
                onClick={onClick}
                className="cursor-pointer w-6 h-6 bg-golden rounded-full animate-pulse flex items-center justify-center shadow-[0_0_15px_#FFD700]"
            >
                <div className="w-2 h-2 bg-dark-bg rounded-full"></div>
            </div>
        </Html>
    </mesh>
);

const RegionModal = ({ region, onClose }: { region: RegionData | null, onClose: () => void }) => {
    if (!region) return null;
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.5, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.5, y: 50 }}
                    className="bg-dark-bg border-2 border-golden rounded-2xl p-8 max-w-lg w-full text-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="w-48 h-48 mx-auto bg-deep-saffron/20 rounded-lg flex items-center justify-center text-5xl">🪔</div>
                    <h3 className="text-3xl font-teko text-golden mt-4">{region.name} - {region.title}</h3>
                    <p className="mt-2 text-pure-white">{region.description}</p>
                    <button onClick={onClose} className="mt-6 px-6 py-2 bg-golden text-dark-bg font-bold rounded-full">Close</button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const MapSection = () => {
    const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);

    return (
        <section className="h-screen w-full relative bg-black">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center p-4">
                <h2 className="text-4xl md:text-5xl font-teko animate-glow">Vikram Samvat Across India</h2>
                <p className="text-deep-saffron">Discover how Bharat celebrates Vikram Samvat.</p>
            </div>
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Earth />
                    {regions.map(region => (
                        <Pin key={region.name} position={region.coords} onClick={() => setSelectedRegion(region)} />
                    ))}
                </Suspense>
                <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.4} minDistance={2} maxDistance={5} />
            </Canvas>
            <AnimatePresence>
                 {selectedRegion && <RegionModal region={selectedRegion} onClose={() => setSelectedRegion(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default MapSection;