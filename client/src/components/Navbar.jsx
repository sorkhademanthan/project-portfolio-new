import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-semibold text-white tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
          Manthan
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link}>
              <ScrollLink
                to={link.toLowerCase()}
                smooth={true}
                duration={700}
                offset={-80}
                className="cursor-pointer text-zinc-400 hover:text-white transition-all duration-200"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className="md:hidden text-2xl text-zinc-400 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-zinc-900/90 backdrop-blur-lg text-sm border-t border-zinc-800/50"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <ScrollLink
                to={link.toLowerCase()}
                smooth={true}
                duration={700}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-zinc-400 hover:text-white transition-all duration-200 py-2"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
