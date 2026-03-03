import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-20">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="logo.png"
            alt="Chinenye Ndubuisi"
            className="w-12 h-12 rounded-full object-cover"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-neutral-700 font-medium relative group transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="https://docs.google.com/document/d/1MUZ16Dpczr8xSpajtnFFA2_YEdNKtDwB2vJ_QNJe0Yo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  
                  className="text-lg text-neutral-700 font-medium"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="https://docs.google.com/document/d/1MUZ16Dpczr8xSpajtnFFA2_YEdNKtDwB2vJ_QNJe0Yo/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#FF2A00" }} 
                className="bg-red-600 text-white px-8 py-3 rounded-xl font-medium"
              >
                Resume
              </a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;