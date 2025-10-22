import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MessageSection = () => {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            setSubmittedName(name);
        }
    };

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const message = `${submittedName}, May this New Year bring you wisdom, peace, and eternal joy!`;

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-dark-bg to-black">
            <h2 className="text-4xl md:text-6xl font-teko text-center text-golden animate-glow">Receive a Divine Blessing</h2>
            <p className="text-center mt-2 mb-8 text-deep-saffron">Enter your name to receive a personalized message for the New Year.</p>
            
            {!submittedName ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-72 p-3 bg-white/10 border border-golden rounded-lg text-pure-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-golden transition-all"
                    />
                    <button type="submit" className="px-8 py-3 bg-gradient-to-r from-deep-saffron to-golden text-dark-bg font-bold rounded-lg text-xl shadow-[0_0_15px_#FFD700] hover:shadow-[0_0_25px_#FFD700] transition-shadow duration-300">
                        Bless Me
                    </button>
                </form>
            ) : (
                <div className="mt-8 p-8 border-2 border-dashed border-golden rounded-xl text-center max-w-3xl">
                    <motion.h3 
                        className="text-2xl md:text-4xl font-laila leading-relaxed"
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                    >
                        {message.split("").map((char, index) => (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h3>
                     <div className="mt-8 flex gap-4 justify-center flex-wrap">
                        <button className="px-6 py-2 bg-golden text-dark-bg font-bold rounded-full">Download E-Card</button>
                        <button className="px-6 py-2 bg-transparent border-2 border-golden text-golden font-bold rounded-full">Share</button>
                        <button onClick={() => { setSubmittedName(''); setName(''); }} className="px-6 py-2 text-white/50">Try another name</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MessageSection;
