import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-950 text-white py-24 px-6" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start"
      >
        {/* Left: Intro */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Let’s build something amazing</h2>
          <p className="text-gray-400 mb-8">
            Have an idea, job offer, or just want to say hi? Fill out the form and I’ll get back to you as soon as I can.
          </p>
          <div className="text-gray-400">
            <p><span className="font-semibold text-white">Email:</span> your.email@example.com</p>
            <p className="mt-2"><span className="font-semibold text-white">Location:</span> Mumbai, India</p>
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white font-semibold"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-400 mt-2">Thanks! I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-2">Oops! Something went wrong.</p>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
