

import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Manthan</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-blue-400 cursor-pointer transition">
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-gray-800"
        >
          {navLinks.map((link) => (
            <li key={link} className="hover:text-blue-400 cursor-pointer transition">
              {link}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
