import React from "react";
import { motion as Motion } from "framer-motion";

const  FinalCTA: React.FC = () => {
  return (
    <section className="px-6 md:px-16 lg:px-20 py-2 bg-white">
      {/* Container with your brand color */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ backgroundColor: "#FF2A00" }}
        className="max-w-300 mx-auto rounded-4xl md:rounded-[48px] px-8 py-16 md:py-24 flex flex-col items-center text-center space-y-6 md:space-y-8"
      >
        {/* Main Heading */}
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-2xl leading-[1.1]">
          Let’s Build Something Exceptional
        </h2>

        {/* Subtext */}
        <p className="text-white/90 text-base md:text-lg font-normal max-w-md md:max-w-xl leading-relaxed">
          I’m currently available for full-time roles and frontend development projects.
        </p>

        {/* Action Button - Links to Contact Section */}
        <Motion.div className="pt-4">
  <Motion.a
    /* Replace with your actual phone number in international format (e.g., 2348012345678) */
    href="https://wa.me/23480136061304?text=Hi%20Chinenye,%20I'd%20love%20to%20work%20with%20you!"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block bg-white text-[#FF2A00] px-10 py-4 rounded-xl font-medium text-sm md:text-base transition-all shadow-xl no-underline"
  >
    Contact Me
  </Motion.a>
</Motion.div>
      </Motion.div>
    </section>
  );
};

export default FinalCTA;