import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      y: "-10%",
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-zinc-950/80 border-b border-zinc-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Brand - Optimized for mobile */}
        <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight select-none">
          Manthan
        </div>

        {/* Desktop Links - Hidden on mobile */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link}>
              <ScrollLink
                activeClass="text-white"
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-zinc-400 hover:text-white transition-colors duration-200 py-2 px-1"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger - Larger touch target */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{isOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu - Optimized for performance */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800/50"
          >
            <ul className="flex flex-col px-4 py-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <ScrollLink
                    activeClass="text-white bg-zinc-800/50"
                    to={link.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block cursor-pointer text-zinc-300 hover:text-white transition-colors duration-200 py-3 px-2 text-base border-b border-zinc-800/30 last:border-b-0 rounded-md"
                  >
                    {link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
