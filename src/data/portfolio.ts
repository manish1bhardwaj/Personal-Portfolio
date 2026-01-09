import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    Code2,
    Brain,
    Rocket,
    Database,
    Terminal,
    Cpu,
    Globe
} from "lucide-react";
import data from "./portfolio.json";

const iconMap: any = {
    Github,
    Linkedin,
    Mail,
    Twitter,
    Code2,
    Brain,
    Rocket,
    Database,
    Terminal,
    Cpu,
    Globe
};

// Define types for the portfolio data

export interface Achievement {
    title: string;
    organization: string;
    description: string;
    status: string;
}

export interface PortfolioData {
    personal: {
        name: string;
        role: string;
        bio: string;
        availability: string;
        location: string;
        email: string;
        phone: string;
        profileImage: string;
        resumeUrl?: string;
    };
    social: {
        name: string;
        icon: any; // Lucide icon component
        url: string;
    }[];
    hero: {
        typingText: (string | number)[];
    };
    about: {
        title: string;
        description: string[];
        features: {
            icon: any; // Lucide icon component
            title: string;
            description: string;
        }[];
    };
    skills: {
        title: string;
        skills: string[];
    }[];
    projects: {
        id: number;
        title: string;
        category: string;
        image: string;
        description: string;
        tech: string[];
        github: string;
        demo: string;
    }[];
    experience: {
        id: number;
        role: string;
        company: string;
        duration: string;
        description: string;
        tech?: string[]; // Made optional to fix potential issues if not in JSON
    }[];
    certifications: {
        title: string;
        issuer: string;
        date: string;
        image: string;
        link: string;
    }[];
    achievements: Achievement[];
    stats: {
        label: string;
        value: string;
    }[];
}

// Helper to map icon strings to components
const mapIcons = (obj: any): any => {
    if (Array.isArray(obj)) {
        return obj.map(mapIcons);
    } else if (typeof obj === 'object' && obj !== null) {
        const newObj: any = {};
        for (const key in obj) {
            if (key === 'icon' && typeof obj[key] === 'string') {
                newObj[key] = iconMap[obj[key]] || Globe; // Default to Globe if not found
            } else {
                newObj[key] = mapIcons(obj[key]);
            }
        }
        return newObj;
    }
    return obj;
};

export const portfolioData: PortfolioData = mapIcons(data);
