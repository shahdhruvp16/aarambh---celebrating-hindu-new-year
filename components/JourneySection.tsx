import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DiyaIcon = ({ progress }: { progress: any }) => {
    const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.2, 1, 0.2]);
    const lightOpacity = useTransform(progress, [0, 0.5], [0, 1]);

    return (
        <div className="relative w-24 h-24">
            <motion.svg viewBox="0 0 100 100" className="w-full h-full" style={{ opacity: progress }}>
                <path d="M10 80 Q 50 100, 90 80 Q 50 60, 10 80 Z" fill="#D2691E" />
                <path d="M48 60 L 52 60 L 50 50 Z" fill="#4B0082" />
                <motion.path 
                    d="M50 50 Q 60 30, 50 10 Q 40 30, 50 50 Z" 
                    fill="#FFD700" 
                    style={{ opacity: lightOpacity }}
                />
            </motion.svg>
            <motion.div 
                className="absolute inset-0 rounded-full"
                style={{
                    opacity: glowOpacity,
                    boxShadow: '0 0 30px 15px #FFD700, 0 0 50px 30px #FF9933'
                }}
            />
        </div>
    );
};

const messages = [
    { text: "Light of Knowledge", progressStart: 0, progressEnd: 0.2 },
    { text: "Fire of Positivity", progressStart: 0.2, progressEnd: 0.4 },
    { text: "Glow of Love", progressStart: 0.4, progressEnd: 0.6 },
    { text: "Radiance of Devotion", progressStart: 0.6, progressEnd: 0.8 },
];

const JourneySection = () => {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });

    return (
        <section id="journey" ref={targetRef} className="relative min-h-[300vh] py-20">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
                
                <div className="absolute w-full h-full flex items-center justify-center">
                    {messages.map((msg, index) => {
                         const opacity = useTransform(scrollYProgress, [msg.progressStart, (msg.progressStart + msg.progressEnd)/2, msg.progressEnd], [0, 1, 0]);
                        return (
                             <motion.h2 key={index} style={{ opacity }} className="absolute text-4xl md:text-6xl font-teko text-center text-golden animate-glow">
                                {msg.text}
                            </motion.h2>
                        );
                    })}
                </div>

                <DiyaIcon progress={scrollYProgress} />
                
                <div className="absolute bottom-20 text-center">
                    <motion.div style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }}>
                       <h2 className="text-4xl md:text-6xl font-teko text-center text-golden animate-glow">A Mandala of Blessings</h2>
                        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto mt-4">
                            {[...Array(12)].map((_, i) => (
                                <motion.path
                                    key={i}
                                    d="M100 100 L 100 20 A 80 80 0 0 1 156.5 43.4 L 100 100"
                                    fill="url(#mandalaGradient)"
                                    transform={`rotate(${i * 30} 100 100)`}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    style={{ pathLength: useTransform(scrollYProgress, [0.85, 1], [0, 1]) , opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]) }}
                                />
                            ))}
                            <defs>
                                <radialGradient id="mandalaGradient">
                                    <stop offset="0%" stopColor="#FFD700" />
                                    <stop offset="100%" stopColor="#FF9933" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default JourneySection;
