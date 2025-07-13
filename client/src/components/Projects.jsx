import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";

// Clean, minimal project data
const projects = [
	{
		id: 1,
		title: "MediFlow Pro",
		subtitle: "Healthcare Innovation Platform",
		description:
			"Revolutionary doctor appointment ecosystem with AI-powered scheduling, real-time analytics, and seamless multi-role management.",
		tags: ["React", "Node.js", "MongoDB", "AI/ML", "REST API"],
		image:
			"https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
		link: "https://manthansorkhade.framer.website/",
		github: "https://github.com/sorkhademanthan/Edunet-Foodie/",
		category: "Healthcare",
		status: "Live",
		featured: true,
	},
	{
		id: 2,
		title: "NeuralTask AI",
		subtitle: "Next-Gen Productivity Suite",
		description:
			"Enterprise-grade SaaS platform leveraging OpenAI's latest models for intelligent task management and workflow optimization.",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
		tags: ["MERN Stack", "OpenAI GPT-4", "WebSocket", "AWS"],
		link: "https://manthansorkhade.framer.website/",
		github: "https://github.com/sorkhademanthan/firstrepo-demo/",
		category: "AI/SaaS",
		status: "MVP",
		featured: true,
	},
	{
		id: 3,
		title: "Notion Reimagined",
		subtitle: "Collaborative Workspace 2.0",
		description:
			"Next-generation productivity platform with real-time collaboration and intelligent content organization.",
		tags: ["React", "TypeScript", "Supabase", "Real-time"],
		image:
			"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
		link: "https://manthansorkhade.framer.website/",
		github: "https://github.com/sorkhademanthan/portfolio-app/",
		category: "Productivity",
		status: "Beta",
		featured: false,
	},
	{
		id: 4,
		title: "ContentFlow CMS",
		subtitle: "Headless Publishing Platform",
		description:
			"Modern content management system with headless architecture and intelligent SEO optimization.",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
		tags: ["Next.js 14", "Sanity.io", "TypeScript", "Vercel"],
		link: "https://manthansorkhade.framer.website/",
		github: "https://github.com/sorkhademanthan/blog-cms-demo/",
		category: "CMS",
		status: "Live",
		featured: false,
	},
];

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("all");

	// Memoize categories to prevent re-renders
	const categories = useMemo(
		() => ["all", "Healthcare", "AI/SaaS", "Productivity", "CMS"],
		[]
	);

	const filteredProjects = useMemo(
		() =>
			activeFilter === "all"
				? projects
				: projects.filter((project) => project.category === activeFilter),
		[activeFilter]
	);

	return (
		<section className="py-12 sm:py-16 px-4 sm:px-6">
			<div className="max-w-7xl mx-auto">
				{/* Simplified header for mobile */}
				<div className="text-center mb-8 sm:mb-12">
					<div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-3 sm:mb-4 rounded-full bg-zinc-800/50 border border-zinc-700">
						<div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
						<span className="text-xs sm:text-sm font-medium text-zinc-300">
							FEATURED WORK
						</span>
					</div>

					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
						Selected Projects
					</h2>

					<p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
						Crafting digital experiences that merge innovation with
						functionality
					</p>
				</div>

				{/* Mobile-optimized filter tabs */}
				<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveFilter(category)}
							className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
								activeFilter === category
									? "bg-white text-zinc-900 shadow-lg"
									: "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-300"
							}`}
						>
							{category === "all" ? "All" : category}
						</button>
					))}
				</div>

				{/* Mobile-first project grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
					{filteredProjects.map((project, index) => (
						<div
							key={project.id}
							className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300"
						>
							{/* Optimized image container */}
							<div className="relative overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-105"
									loading={index < 2 ? "eager" : "lazy"}
									decoding="async"
									onError={(e) => {
										e.target.src =
											"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center";
									}}
								/>

								{/* Simplified badges for mobile */}
								<div className="absolute top-3 left-3">
									<span
										className={`px-2 py-1 text-xs font-semibold rounded-full ${
											project.status === "Live"
												? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
												: project.status === "MVP"
												? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
												: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
										}`}
									>
										{project.status}
									</span>
								</div>

								<div className="absolute top-3 right-3">
									<span className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm">
										{project.category}
									</span>
								</div>

								{project.featured && (
									<div className="absolute bottom-3 left-3">
										<span className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 border border-yellow-400/30">
											⭐ FEATURED
										</span>
									</div>
								)}
							</div>

							{/* Optimized content */}
							<div className="p-4 sm:p-6 lg:p-8">
								<div className="mb-3 sm:mb-4">
									<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
										{project.title}
									</h3>
									<p className="text-blue-400 font-medium text-sm sm:text-base">
										{project.subtitle}
									</p>
								</div>

								<p className="text-zinc-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
									{project.description}
								</p>

								{/* Simplified tech stack for mobile */}
								<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
									{project.tags.slice(0, 4).map((tag, i) => (
										<span
											key={i}
											className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700"
										>
											{tag}
										</span>
									))}
									{project.tags.length > 4 && (
										<span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-800 text-zinc-400 rounded-lg border border-zinc-700">
											+{project.tags.length - 4}
										</span>
									)}
								</div>

								{/* Mobile-optimized buttons */}
								<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 bg-white text-zinc-900 text-center py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-zinc-100 transition-colors duration-200 text-sm sm:text-base"
									>
										View Live
									</a>
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 bg-zinc-800 text-zinc-300 text-center py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-200 text-sm sm:text-base"
									>
										Source Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
	

