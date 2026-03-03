import React from "react";
import { motion as Motion, type Variants } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Replace with your actual phone number (international format, no + or 0)
  const whatsappNumber = "2348136061304";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Chinenye,%20I'm%20reaching%20out%20from%20your%20portfolio.`;

  const iconVariants: Variants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#FF2A00",
      color: "#fff",
      transition: { duration: 0.3 },
    },
  };

  const linkVariants: Variants = {
    hover: { x: 5, color: "#FF2A00", transition: { duration: 0.2 } },
  };

  return (
    <footer className="px-6 md:px-16 lg:px-24 py-16 bg-white border-t border-neutral-100">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <Motion.img
              src="logo.png"
              alt="Logo"
              className="w-16 h-16 rounded-full object-cover"
              whileHover={{ rotate: 10 }}
            />
            <div className="flex gap-4">
              {[
                {
                  icon: <FaLinkedinIn />,
                  url: "https://www.linkedin.com/in/chinenye-ndubuisi-018a87387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                },
                { icon: <FaGithub />, url: "https://github.com/devNenye001" },
                {
                  icon: <FaInstagram />,
                  url: "https://instagram.com/dev.nenye001/",
                },
              ].map((social, i) => (
                <Motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  whileHover="hover"
                  className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 transition-colors"
                >
                  {social.icon}
                </Motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900 mb-6">Company</h4>
            <ul className="space-y-3 p-0 list-none">
              {["Home", "Services", "About", "Contact"].map((item) => {
                // Logic to check if it's the contact link
                const isContact = item === "Contact";
                const whatsappLink =
                  "https://wa.me/2348136061304?text=Hi%20Chinenye,%20I'm%20contacting%20you%20from%20your%20portfolio.";

                return (
                  <li key={item}>
                    <Motion.a
                      href={
                        isContact
                          ? whatsappLink
                          : `#${item.toLowerCase().replace(/\s+/g, "")}`
                      }
                      target={isContact ? "_blank" : "_self"}
                      rel={isContact ? "noopener noreferrer" : ""}
                      variants={linkVariants}
                      whileHover="hover"
                      className="text-neutral-500 no-underline inline-block cursor-pointer"
                    >
                      {item}
                    </Motion.a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900 mb-6">Services</h4>
            <ul className="space-y-3 p-0 list-none text-neutral-500">
              {[
                "Custom Web Development",
                "Business Web Development",
                "UI Optimization & Website Redesign",
              ].map((service) => (
                <li key={service}>
                  <Motion.a
                    href="#services" // Links all individual services to the main services section
                    variants={linkVariants}
                    whileHover="hover"
                    className="text-neutral-500 no-underline inline-block cursor-pointer"
                  >
                    {service}
                  </Motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900 mb-6">Contact</h4>
            <div className="space-y-3">
              <p className="text-neutral-500 m-0">
                Email:{" "}
                <a
                  href="mailto:ndubuisichinenye79@gmail.com"
                  className="hover:text-[#FF2A00] transition-colors no-underline"
                >
                  ndubuisichinenye79@gmail.com
                </a>
              </p>
              <p className="text-neutral-500 m-0">
                Phone:{" "}
                <Motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ color: "#FF2A00" }}
                  className="no-underline cursor-pointer"
                >
                  +234 813 606 1304
                </Motion.a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 text-center">
          <p className="text-neutral-400 text-sm m-0 font-normal">
            © {currentYear} Ndubuisi Chinenye Rosemary
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
