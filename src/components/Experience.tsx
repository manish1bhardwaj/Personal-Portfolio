"use client";

import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-slate-950 rounded-2xl m-[1px]" />
                            <div className="relative p-8 h-full flex flex-col items-start bg-slate-900/50 rounded-2xl backdrop-blur-sm overflow-hidden">
                                {/* Ambient Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-mono text-primary/80">{exp.duration}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-primary transition-colors">
                                    {exp.role}
                                </h3>
                                <p className="text-cyan-400 font-medium mb-4 relative z-10 font-mono text-sm">
                                    {exp.company}
                                </p>
                                <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10 border-l-2 border-white/10 pl-4">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
