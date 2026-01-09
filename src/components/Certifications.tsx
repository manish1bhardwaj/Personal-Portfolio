"use client";

import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink, Shield, Zap, Target } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Achievements & <span className="text-gradient">Certifications</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                {/* Achievements Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                            <Trophy className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Achievements</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioData.achievements.map((achievement, index) => (
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

                                    <h4 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-primary transition-colors">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-cyan-400 font-medium mb-4 relative z-10 font-mono text-sm">
                                        {achievement.organization}
                                    </p>
                                    <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10 border-l-2 border-white/10 pl-4">
                                        {achievement.description}
                                    </p>

                                    <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary via-blue-500 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-500/20 tracking-wide uppercase">
                                        <Trophy className="w-3 h-3" />
                                        {achievement.status}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Certifications</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {portfolioData.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="p-8 flex items-center justify-between gap-6">
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h4>
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="text-gray-400">{cert.issuer}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-600" />
                                            <span className="text-gray-500 font-mono">{cert.date}</span>
                                        </div>
                                    </div>

                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-primary/25"
                                        title="Verify Credential"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                                {/* Progress bar decoration */}
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
