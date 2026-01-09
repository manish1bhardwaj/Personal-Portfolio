"use client";

import { motion } from "framer-motion";
import { Brain, Code, Rocket, Database } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-400 leading-relaxed">
                        {portfolioData.about.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioData.about.features.map((feature, index) => {
                        // Default icon mapping fallback if string is passed
                        let Icon = Code;
                        if (feature.icon === "Brain") Icon = Brain;
                        if (feature.icon === "Database") Icon = Database;
                        if (feature.icon === "Rocket") Icon = Rocket;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary/25">
                                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
