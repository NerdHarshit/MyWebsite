# Harshit Pandya — Portfolio Website

A personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**, featuring a glassmorphic UI design with responsive layouts across all screen sizes.

## ✨ Features

- **Glass UI Design** — Frosted glass cards, surfaces, and navbar with backdrop blur effects
- **Fully Responsive** — Optimized for 320px phones through 1440px desktops
- **Interactive Experience Section** — Card carousel with drag-to-swipe and timeline navigation, plus a text view toggle
- **Project Showcase** — Filterable project grid (All / Software / ML / Hardware) with pagination and detail modals
- **Achievements & Certifications** — Paginated card grids with GitHub and LinkedIn links
- **Skills Section** — Categorized skill chips (Languages, Tools, Frameworks) with hover glow effects
- **Smooth Animations** — Fade-in scroll animations and shiny gradient text effects
- **Contact Section** — Social links (LinkedIn, GitHub, YouTube) with downloadable resume

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Font | JetBrains Mono |
| Icons | Phosphor Icons |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, animations, background
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Main page composing all sections
├── components/
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # Bio + profile image + resume
│   ├── Experience.tsx     # Card/text view with timeline
│   ├── Skills.tsx         # Skill chips by category
│   ├── Projects.tsx       # Filterable project grid + modal
│   ├── Achievements.tsx   # Achievement cards
│   ├── cdrtifications.tsx # Certification cards
│   ├── Contact.tsx        # Contact info + social links
│   ├── TrueGlassNavBar.tsx# Floating glass navbar
│   └── ui/                # Reusable components
│       ├── GlassSurface.tsx
│       ├── GlassCard.tsx
│       ├── ExperienceCard.tsx
│       ├── ProjectsCard.tsx
│       ├── AchievementsCard.tsx
│       ├── SkillChip.tsx
│       └── timeline.tsx
└── lib/
    └── utils.ts           # Utility functions
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📬 Contact

- **Email:** harshit4pandya@gmail.com
- **LinkedIn:** [Harshit Pandya](https://www.linkedin.com/in/harshit-pandya-169116338/)
- **GitHub:** [NerdHarshit](https://github.com/NerdHarshit)
- **YouTube:** [TheEngineer](https://www.youtube.com/@TheEngineer-j6j)
