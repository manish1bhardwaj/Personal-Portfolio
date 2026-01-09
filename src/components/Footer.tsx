"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold font-heading text-white">
                                {portfolioData.personal.name}
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                            {portfolioData.personal.role}. {portfolioData.personal.bio}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a></li>
                        </ul>
                    </div>

                    {/* Social Connect */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Connect</h4>
                        <div className="flex gap-4">
                            {portfolioData.social.map((social) => {
                                const Icon = social.name === "Github" ? Github :
                                    social.name === "LinkedIn" ? Linkedin :
                                        social.name === "Twitter" ? Twitter : Mail;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        Crafted with ❤ by {portfolioData.personal.name}
                    </p>
                </div>
            </div>
        </footer>
    );
}
