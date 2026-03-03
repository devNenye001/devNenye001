import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    return (
        <motion.section
            className="flex flex-col items-center justify-center text-center px-6 py-16 md:px-16 md:py-24 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            {/* My Tech Stack Subtitle */}
            <section className="text-neutral-500 text-base md:text-lg font-normal mb-6 md:mb-8" id='about'>
                My Tech Stack
            </section>

            {/* Programming Language Icons (Single Image) */}
            <section className="mb-10 md:mb-12 max-w-lg md:max-w-2xl px-4">
                <img
                    src="/tech-stack.png" // Replace with the actual image path
                    alt="React, TypeScript, JS, HTML5, CSS3, Tailwind CSS logos"
                    className="w-full h-auto object-contain"
                />
            </section>

            {/* Main Title */}
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-tight text-neutral-900 mb-8 md:mb-10 max-w-4xl">
                Turning Ideas into <span className="text-[#FF2A00]">Functional Digital Products</span>
            </h2>

            {/* Description Text */}
            <div className="text-neutral-700 text-base md:text-lg font-normal leading-relaxed max-w-3xl space-y-5">
                <p>
                    I’m a frontend developer specializing in building fast, responsive, and production-ready web applications using React and TypeScript. I’ve worked on real-world projects during my internship at Genesys Tech Hub and through freelance work, delivering business websites and interactive applications that prioritize performance, usability, and clean architecture.
                </p>
                <p>
                    I focus on writing maintainable code, building reusable component systems, and translating design concepts into functional digital products.
                </p>
                <p>
                    Currently working as a Full-Time Frontend Developer.
                </p>
            </div>
        </motion.section>
    );
};

export default About;