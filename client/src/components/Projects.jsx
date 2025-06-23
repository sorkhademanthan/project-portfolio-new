import { motion } from "framer-motion";

// Animation for each project card (staggered entry)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Array of your projects
const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React, Tailwind, and Framer Motion.",
    image: "src/assets/portfolio.jpg", // Place this image in public/assets/
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "https://manthansorkhade.framer.website/",
    github: "https://github.com/sorkhademanthan/Edunet-Foodie/",
  },
  {
    title: "To-Do App",
    description: "A simple to-do app with local storage, built with React.",
    image: "src/assets/todo.jpg",
    tags: ["React", "Local Storage"],
    link: "https://manthansorkhade.framer.website/",
    github: "https://github.com/sorkhademanthan/firstrepo-demo/",
  },
  {
    title: "Weather App",
    description: "Real-time weather app using OpenWeather API and React.",
    image: "src/assets/weather.jpg",
    tags: ["React", "API", "CSS"],
    link: "https://manthansorkhade.framer.website/",
    github: "https://github.com/sorkhademanthan/portfolio-app/",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 py-20 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
        <p className="text-gray-400 mt-2">Some of the work I've done recently</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-2 py-1 rounded text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
