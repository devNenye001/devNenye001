import React from "react";
import { motion as Motion, type Variants } from "framer-motion";

const Hero: React.FC = () => {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    },
  };

  const textVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-10 lg:px-16 bg-white pt-30"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* LEFT TEXT SIDE */}
        <Motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 space-y-6 md:space-y-10"
        >
          {/* Main Heading: tracking-tight is key for this modern look */}
          <Motion.h1
            variants={textVars}
            className="text-[24px] md:text-[32px] lg:text-[50px] font-medium leading-[1.05] tracking-[-0.03em] text-neutral-900"
          >
            I Build Modern, Fast & <br className="hidden lg:block" />
            Responsive Web Applications
          </Motion.h1>

          {/* Description: Leading-relaxed for readability */}
          <Motion.p
            variants={textVars}
            className="text-base md:text-[16px] text-neutral-800 font-normal leading-[1.6] max-w-130"
          >
            I'm Chinenye Ndubuisi, a frontend developer specializing in
            React, TypeScript and modern UI systems. I build clean,
            responsive and production-ready web applications.
          </Motion.p>

         <Motion.div 
    variants={textVars} 
    className="pt-2 w-full flex justify-start" // w-full and justify-start force it to the left
  >
    <Motion.a
      href="#services"
      whileHover={{ scale: 1.03, backgroundColor: "#e62600" }}
      whileTap={{ scale: 0.97 }}
      style={{ backgroundColor: "#FF2A00" }} 
      className="inline-block text-white px-9 py-4 rounded-[10px] font-medium text-[15px] transition-all cursor-pointer no-underline shadow-sm text-center"
    >
      My Services
    </Motion.a>
  </Motion.div>
</Motion.div>

        {/* RIGHT IMAGE SIDE */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center md:justify-end"
        >
          {/* Matches the clean, sharp edges in the image */}
          <div className="w-full max-w-130 aspect-4/5 overflow-hidden rounded-none">
            <img
              src="logo.png" 
              alt="Chinenye Ndubuisi"
              className="w-full h-auto object-cover block"
            />
          </div>
        </Motion.div>

      </div>
    </section>
  );
};

export default Hero;