import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/manthansorkhade", 
      icon: "💼" 
    },
    { 
      name: "GitHub", 
      href: "https://github.com/sorkhademanthan", 
      icon: "💻" 
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/manthan_dev", 
      icon: "🐦" 
    },
    { 
      name: "Instagram", 
      href: "https://instagram.com/manthan_sorkhade", 
      icon: "📷" 
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-zinc-900/50 border-t border-zinc-800/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              Manthan Sorkhade
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Frontend Developer & UI/UX Designer crafting extraordinary digital experiences 
              that convert visitors into customers.
            </p>
            <div className="flex items-center gap-2 text-sm text-emerald-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Available for elite projects
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            <div className="space-y-2 text-sm">
              <p className="text-zinc-400">
                <span className="text-zinc-300">Email:</span> sorkhademanthan@gmail.com
              </p>
              <p className="text-zinc-400">
                <span className="text-zinc-300">Location:</span> Mumbai, India
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-800/50 border border-zinc-700 rounded-lg flex items-center justify-center text-lg hover:bg-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-zinc-500 text-sm">
            © {currentYear} Manthan Sorkhade. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
