"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, Brain, Database, Terminal, Cpu } from "lucide-react";

// Map titles to icons
const getIcon = (title: string) => {
    if (title.includes("Artificial")) return Brain;
    if (title.includes("Data")) return Database;
    if (title.includes("Programming")) return Terminal;
    if (title.includes("Applied")) return Cpu;
    return Code2; // Default
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 tracking-tight">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {portfolioData.skills.map((category, categoryIndex) => {
                        const Icon = getIcon(category.title);
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                className="glass-card p-6 rounded-2xl hover:border-primary/30 hover-shadow-glow transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-primary pl-4 group-hover:pl-6 transition-all duration-300">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <motion.div
                                            key={skill}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:border-primary/30 transition-all cursor-default shadow-sm hover:shadow-md"
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
