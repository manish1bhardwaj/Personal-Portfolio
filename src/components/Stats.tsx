"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Stats() {
    return (
        <section className="py-10 bg-slate-950/50 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {portfolioData.stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-2 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest group-hover:text-primary transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
