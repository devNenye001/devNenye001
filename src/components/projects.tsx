import React from "react";
import { motion as Motion} from "framer-motion";

interface ProjectProps {
  title: string;
  type: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, type, description, image, link, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#F9F9F9] rounded-3xl p-3 md:p-4 flex flex-col h-full border border-neutral-100"
    >
      {/* Browser-style Image Container */}
      <div className="relative w-full aspect-16/10 mb-5 overflow-hidden rounded-2xl shadow-sm bg-white">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-3 mb-8">
        <h3 className="text-2xl font-medium text-neutral-900">{title}</h3>
        <p className="text-neutral-500 font-normal">{type}</p>
        <p className="text-neutral-700 leading-relaxed text-[15px]">
          {description}
        </p>
      </div>

      {/* Vercel Action Button */}
      <Motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ backgroundColor: "#FF2A00" }}
        className="mt-auto w-full py-4 text-center text-white font-medium rounded-full text-sm transition-all shadow-md cursor-pointer no-underline"
      >
        View Project
      </Motion.a>
    </Motion.div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Exclusive shop",
      type: "E-commerce website",
      description: "A responsive e-commerce web application built with React and TypeScript, featuring dynamic product rendering and scalable UI architecture.",
      image: "/s1.svg",
      link: "https://exclusive-shop-demo.vercel.app" // Update with your actual Vercel link
    },
    {
      title: "Emmiphal Global Construction",
      type: "Business Website",
      description: "A modern corporate website designed and developed to present services professionally with a fully responsive layout.",
      image: "/s2.svg",
      link: "https://emmiphal-construction.vercel.app"
    },
    {
      title: "Palma Vital Oil",
      type: "Business Website",
      description: "A responsive product showcase to highlight brand identity and seamless multi-device user experience.",
      image: "/s3.svg",
      link: "https://palma-vital-oil.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-9 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-350 mx-auto">
        <Motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-[56px] font-medium text-center text-neutral-900 mb-16 tracking-tight"
        >
          My Works
        </Motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;