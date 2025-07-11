import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 py-12 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Simple Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-2">Manthan Sorkhade</h3>
            <p className="text-zinc-400 text-sm">
              Frontend Developer & UI/UX Designer
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            {[
              { name: "Instagram", href: "https://instagram.com/manthan_sorkhade", icon: "📷" },
              { name: "LinkedIn", href: "https://linkedin.com/in/manthansorkhade", icon: "💼" },
              { name: "X (Twitter)", href: "https://twitter.com/manthan_dev", icon: "🐦" },
              { name: "Upwork", href: "https://upwork.com/freelancers/manthansorkhade", icon: "💚" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800/50 border border-zinc-700 rounded-lg flex items-center justify-center text-lg hover:bg-zinc-700/50 hover:border-zinc-600 transition-colors"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-6 border-t border-zinc-800/50 text-center"
        >
          <p className="text-zinc-500 text-sm">
            © {currentYear} Manthan Sorkhade. All rights reserved. Made with ❤️ in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
