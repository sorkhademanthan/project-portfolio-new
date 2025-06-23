import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-800 px-6 py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hey! I'm Manthan — a passionate front-end web developer who loves building clean, responsive, and user-friendly interfaces.
          <br />
          I specialize in React, Tailwind, and animation libraries like Framer Motion. My goal is to build websites that are not just functional, but also beautiful and impactful.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
