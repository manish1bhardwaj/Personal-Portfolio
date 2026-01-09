import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const categories = ["All", "AI / ML", "Web", "Data Science"];

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProject]);

    const filteredProjects = portfolioData.projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    return (
        <section id="projects" className="py-20 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === cat
                                    ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                                    : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-slate-950 rounded-2xl m-[1px]" />
                                <div className="relative h-full flex flex-col bg-slate-900/50 rounded-2xl backdrop-blur-sm overflow-hidden">
                                    {/* Image Container */}
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="px-6 py-3 rounded-full bg-white text-black font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105 flex items-center gap-2"
                                            >
                                                View Details <ArrowUpRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-4 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.slice(0, 3).map((t) => (
                                                <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 group-hover:border-primary/20 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-500 border border-white/5">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>



                {/* Project Modal via Portal */}
                {typeof document !== 'undefined' && createPortal(
                    <AnimatePresence>
                        {selectedProject && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                                onClick={() => setSelectedProject(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                    className="bg-[#0b1221] border border-white/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-transparent"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all z-20 backdrop-blur-sm border border-white/10 sticky float-right"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>

                                    <div className="aspect-video relative">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1221] via-transparent to-transparent opacity-90" />
                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 text-xs font-bold mb-3 backdrop-blur-md">
                                                {selectedProject.category}
                                            </span>
                                            <h3 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                        </div>
                                    </div>

                                    <div className="p-8 pt-6">
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="py-3 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group"
                                            >
                                                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                Source Code
                                            </a>
                                            <a
                                                href={selectedProject.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover-shadow-glow-strong hover:scale-[1.02] transition-all flex items-center justify-center gap-2 active:scale-95"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                Live Demo
                                            </a>
                                        </div>

                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-4 py-2 rounded-lg bg-white/5 text-sm text-gray-300 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {selectedProject.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </section >
    );
}
