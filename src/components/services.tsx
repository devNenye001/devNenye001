import React from "react";
import { motion as Motion } from "framer-motion";

interface ServiceProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ number, title, description, features, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#FFF9F9] p-8 md:p-10 rounded-sm flex flex-col h-full"
    >
      <h3 className="text-lg md:text-xl font-medium text-neutral-900 mb-6">
        {number} — {title}
      </h3>
      <p className="text-neutral-700 text-sm md:text-base leading-relaxed mb-6">
        {description}
      </p>
      <ul className="space-y-3 mt-auto">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-neutral-600">
            <span className="mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </Motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Custom Frontend Development",
      description: "Modern web applications built with React and TypeScript.",
      features: [
        "Component-based architecture",
        "API integration",
        "State management",
        "Responsive design (mobile-first)",
        "Clean and maintainable code",
      ],
    },
    {
      number: "02",
      title: "Business Web Development",
      description: "High-converting, performance-optimized landing pages for brands and businesses.",
      features: [
        "Product & startup landing pages",
        "Business websites",
        "Portfolio websites",
        "SEO-friendly structure",
        "Fast loading performance",
      ],
    },
    {
      number: "03",
      title: "UI Optimization & Website Redesign",
      description: "Improving existing websites for better performance and usability.",
      features: [
        "UI restructuring",
        "Performance optimization",
        "Code refactoring",
        "Mobile responsiveness fixes",
      ],
    },
  ];

  return (
    <section id="services" className="py-10 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-350 mx-auto">
        <Motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium text-center text-neutral-900 mb-16"
        >
          Services I Offer
        </Motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;