"use client";

import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
                    </p>
                </motion.div>

                {/* Contact Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    {/* Email Card */}
                    <a href={`mailto:${portfolioData.personal.email}`} className="group glass-card p-8 rounded-2xl flex items-center gap-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                            <Mail className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                            <p className="text-gray-400 group-hover:text-blue-400 transition-colors">{portfolioData.personal.email}</p>
                        </div>
                    </a>

                    {/* Phone Card */}
                    <a href={`tel:${portfolioData.personal.phone}`} className="group glass-card p-8 rounded-2xl flex items-center gap-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                            <Phone className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                            <p className="text-gray-400 group-hover:text-green-400 transition-colors">{portfolioData.personal.phone}</p>
                        </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a href={portfolioData.social.find(s => s.name === "LinkedIn")?.url || "#"} target="_blank" rel="noopener noreferrer" className="group glass-card p-8 rounded-2xl flex items-center gap-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <Linkedin className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                            <p className="text-gray-400 group-hover:text-blue-600 transition-colors">Connect professionally</p>
                        </div>
                    </a>

                    {/* GitHub Card */}
                    <a href={portfolioData.social.find(s => s.name === "Github")?.url || "#"} target="_blank" rel="noopener noreferrer" className="group glass-card p-8 rounded-2xl flex items-center gap-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                            <Github className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
                            <p className="text-gray-400 group-hover:text-violet-600 transition-colors">Checkout my code</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
