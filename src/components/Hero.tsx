"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
        >
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative group"
                    >
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 relative z-10 p-1 bg-white/5 backdrop-blur-sm group-hover:border-primary/50 transition-colors duration-500">
                            <img
                                src={portfolioData.personal.profileImage}
                                alt={portfolioData.personal.name}
                                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {/* Rotating Glow Ring */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-glow" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 hover:bg-white/10 transition-colors cursor-default"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-gray-300 font-medium tracking-wide">{portfolioData.personal.availability}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
                    >
                        Hi, I'm <span className="text-gradient animate-pulse">{portfolioData.personal.name}</span>
                        <br />
                        <span className="text-2xl md:text-4xl text-gray-400 mt-4 block font-normal">
                            I build{" "}
                            <TypeAnimation
                                sequence={portfolioData.hero.typingText}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-white font-semibold border-b-2 border-primary/50 pb-1"
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        {portfolioData.personal.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover-shadow-glow-strong transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center gap-6 mt-12"
                    >
                        {portfolioData.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                                aria-label={social.name}
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    {/* Scroll Indicator Removed */}
                </div>
            </div>
        </section>
    );
}
