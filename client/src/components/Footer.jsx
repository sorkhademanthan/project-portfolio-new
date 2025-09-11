import React from "react";
import { motion } from "framer-motion";

// --- INLINE SVG ICONS ---
// Using inline SVGs for performance and easy customization.
const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const ArrowUpRightIcon = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}>
            <path d="M7 17l9.2-9.2M17 17V7H7"/>
    </svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/sorkhademanthan", icon: GithubIcon },
    { name: "LinkedIn", href: "https://linkedin.com/in/manthansorkhade", icon: LinkedinIcon },
    { name: "Twitter", href: "https://twitter.com/manthan_dev", icon: TwitterIcon },
  ];

  const pageLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ]

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Adjust if you have a sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const MotionLink = motion.a;

  return (
    <footer className="bg-black text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* Top section: CTA and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12 border-b border-gray-800">
          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-gray-400">
              Let's create something amazing together. I'm always open to discussing new projects and creative ideas.
            </p>
          </div>
          <MotionLink 
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full whitespace-nowrap transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch <ArrowUpRightIcon className="w-5 h-5" />
          </MotionLink>
        </div>

        {/* Middle section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
             <h3 className="text-2xl font-semibold text-white">Manthan</h3>
             <p className="mt-2 text-sm">
                A creative developer focused on building beautiful and performant web experiences.
             </p>
          </div>

          {/* Pages Column */}
          <div>
            <h4 className="font-semibold text-gray-200 tracking-wider uppercase">Navigate</h4>
            <ul className="mt-4 space-y-3">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="cursor-pointer hover:text-white transition-colors duration-200 group"
                  >
                    {link.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-gray-200 tracking-wider uppercase">Legal</h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 group">
                    {link.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
           {/* Socials Column */}
           <div>
             <h4 className="font-semibold text-gray-200 tracking-wider uppercase">Connect</h4>
             <div className="flex mt-4 space-x-5">
              {socialLinks.map((social) => (
                <MotionLink
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon className="w-6 h-6" />
                </MotionLink>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom section: Copyright */}
        <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-800">
          <p>&copy; {currentYear} Manthan Sorkhade. All Rights Reserved.</p>
           <p className="mt-1">Designed & Built with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;