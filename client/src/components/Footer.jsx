import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">Manthan Sorkhade</h3>
          <p className="text-sm mt-1">
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* Center: Scroll to Top */}
        <a
          href="#top"
          className="text-sm hover:text-blue-400 transition duration-300"
        >
          ↑ Back to top
        </a>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/sorkhademanthan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
