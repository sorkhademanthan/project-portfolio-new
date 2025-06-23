import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          I'm Manthan, a Web Developer 👨‍💻
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          I build fast, beautiful, and responsive websites using modern technologies like React, Tailwind, and Framer Motion.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded text-white text-lg font-medium">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
