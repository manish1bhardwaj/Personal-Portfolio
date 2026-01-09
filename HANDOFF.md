# Project Handoff & Context

**Last Updated:** January 9, 2026
**Project:** Personal Portfolio (Next.js + Tailwind CSS)
**Deployment:** [Vercel](https://personal-portfolio-rho-pied-54.vercel.app/)
**Repository:** [GitHub](https://github.com/manish1bhardwaj/Personal-Portfolio)

## 📌 Project Overview
This is a professional personal portfolio website featuring a premium dark-themed UI with glassmorphism effects, gradient borders, and smooth animations. It is built to be easily configurable via a central data file.

## 🛠 Tech Stack
-   **Framework:** Next.js 15+ (App Router)
-   **Styling:** Tailwind CSS (v3/v4), Framer Motion (Animations), Lucide React (Icons)
-   **Language:** TypeScript
-   **Deployment:** Vercel (Auto-deploys from `main` branch)

## 🔄 Recent Work (UI Refactor & Features)
We have just completed a major overhaul of the application to ensure visual consistency and professional polish:

1.  **Global Design:** Implemented "Premium Glass Cards" with gradient borders and hover glows.
2.  **Grid Layouts:** 
    -   **Achievements & Experience:** Unified into matching 3-column grids.
    -   **Projects:** Updated to `gap-6` grid with consistent styling.
    -   **Contact:** Grid layout for contact options.
3.  **Features Added:**
    -   **Resume Button:** Added to Navbar, controlled via Admin/Config.
    -   **Footer:** Redesigned to 3-column layout.
    -   **Icons:** Fixed social media mapping and distinct skill icons.
4.  **Content Update (Jan 9):**
    -   Updated Projects (E-commerce, Exam Evaluation).
    -   Updated Experience (Skillcred, W3Grads).
    -   Updated Skills (GenAI, NLP, etc.).
    -   Fixed JSON syntax issues for multi-line descriptions.
    -   **UX Improvement:** Moved Project Modal action buttons to the top for better accessibility.
    -   **Bug Fix:** Resolved Modal overlay issue by locking body scroll and increasing z-index.
    -   **Critical Fix:** Implemented `React.createPortal` to move Modal to root, completely solving stacking context overlaps.

## 📂 Key File Structure
-   `src/data/portfolio.json` → **Main Data Source**. Edit this to change text, links, projects, and work experience.
-   `src/data/portfolio.ts` → **Type Definitions**. Defines the structure of the JSON data.
-   `src/app/globals.css` → **Global Styles**. Contains the `@theme` and custom utility classes (glassmorphism, animations).
-   `src/components/*` → Individual UI components (Hero, Navbar, Projects, etc.).

## 🚀 How to Continue Work
If you start a new chat session to modify this project, simply give the AI the following prompt:

> "I am working on the Personal Portfolio project. Please read `HANDOFF.md` to understand the current state, tech stack, and recent changes. I need to [YOUR REQUEST HERE]."

## 📝 Common Tasks
-   **Updating Content:** Edit `src/data/portfolio.json`.
-   **Updating Resume:** Replace `public/resume.pdf` or update `config.resumeUrl` in JSON.
-   **Deploying:** Push changes to GitHub `main` branch. Vercel deploys automatically.

---
*Created by Antigravity Assistant to ensure project continuity.*
