// ============================================================
// FLUXIORA LEARNING — HOME PAGE DATA
// All static data for the Home page components
// ============================================================

import techWorkshopIcon from '../assets/images/tech_workshop_logo_png.png';
import skillDevIcon from '../assets/images/book_logo_png.png';
import communityIcon from '../assets/images/group_people_new_logo_png.png';
import careerIcon from '../assets/images/rocket_logo_png.png';
import futureIcon from '../assets/images/future_innovation_new_logo_png.png';
import matlabLogo from '../assets/images/matlab_logo.png';
import dwsimLogo from '../assets/images/DWSIM_logo.png';
import pythonLogo from '../assets/images/python_logo.webp';

// ── What We Provide ──────────────────────────────────────────
export const featureCards = [
  {
    id: 1,
    type: 'tech',
    icon: techWorkshopIcon,
    title: 'TECH WORKSHOPS',
    description: 'Hands-on workshops on trending technologies and real-world projects.',
    offset: 'low',
    delay: '0s',
  },
  {
    id: 2,
    type: 'skill',
    icon: skillDevIcon,
    title: 'SKILL DEVELOPMENT',
    description: 'Build in-demand skills with expert guidance and structured learning.',
    offset: 'high',
    delay: '0.7s',
  },
  {
    id: 3,
    type: 'community',
    icon: communityIcon,
    title: 'COMMUNITY LEARNING',
    description: 'Learn together, share ideas and grow with a like-minded community.',
    offset: 'low',
    delay: '1.4s',
  },
  {
    id: 4,
    type: 'career',
    icon: careerIcon,
    title: 'CAREER GROWTH',
    description: 'Get mentorship, career guidance and opportunities to level up.',
    offset: 'high',
    delay: '2.1s',
  },
  {
    id: 5,
    type: 'future',
    icon: futureIcon,
    title: 'FUTURE INNOVATION',
    description: 'Exploring AI, Web3, Cloud and emerging tech to build the future.',
    offset: 'low',
    delay: '2.8s',
  },
];

// ── Our Vision 9-Step Roadmap ───────────────────────────────
export const ourVisionSteps = [
  {
    id: 1,
    step: "01",
    title: "Learn",
    description: "Gain strong fundamentals and industry-relevant knowledge.",
    color: "#2563eb", // Royal Blue
    icon: "book",
  },
  {
    id: 2,
    step: "02",
    title: "Practice",
    description: "Apply what you learn through hands-on practice and exercises.",
    color: "#0284c7", // Sky Blue
    icon: "practice",
  },
  {
    id: 3,
    step: "03",
    title: "Build",
    description: "Build real-world projects and strengthen your technical skills.",
    color: "#06b6d4", // Cyan
    icon: "rocket",
  },
  {
    id: 4,
    step: "04",
    title: "Get Certified",
    description: "Earn industry-recognized certifications to validate your skills.",
    color: "#10b981", // Emerald Green
    icon: "certificate",
  },
  {
    id: 5,
    step: "05",
    title: "Work on Projects",
    description: "Work on real-time projects and gain practical experience.",
    color: "#22c55e", // Green
    icon: "codeLaptop",
  },
  {
    id: 6,
    step: "06",
    title: "Connect with Experts",
    description: "Learn from mentors and industry experts who guide you.",
    color: "#84cc16", // Lime Green
    icon: "network",
  },
  {
    id: 7,
    step: "07",
    title: "Solve Industry Problems",
    description: "Tackle real industry challenges and create impactful solutions.",
    color: "#eab308", // Yellow Gold
    icon: "puzzle",
  },
  {
    id: 8,
    step: "08",
    title: "Build a Portfolio",
    description: "Build a strong portfolio that showcases your skills and projects.",
    color: "#f59e0b", // Amber
    icon: "portfolio",
  },
  {
    id: 9,
    step: "09",
    title: "Become Industry Ready",
    description: "Get job-ready with skills, mindset and confidence to excel.",
    color: "#ea580c", // Tangerine
    icon: "trophy",
  },
];

// ── Upcoming Workshops ───────────────────────────────────────
export const upcomingWorkshops = [
  {
    id: 1,
    title: "MATLAB for Engineers",
    icon: matlabLogo,
    color: "#e65100",
    tag: "Engineering & Simulation",
  },
  {
    id: 2,
    title: "DWSIM for Chemical Engineering",
    icon: dwsimLogo,
    color: "#059669",
    tag: "Process Modeling",
  },
  {
    id: 3,
    title: "Python for Data Analysis",
    icon: pythonLogo,
    color: "#306998",
    tag: "Data Science & Analytics",
  },
];

// ── Nav Links ─────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Workshops", href: "#workshops" },
  { label: "Courses", href: "#upcoming" },
  { label: "Internships", href: "#internships" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ── Footer Links ──────────────────────────────────────────────
export const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export const resourceLinks = [
  { label: "Workshops", href: "#workshops" },
  { label: "Courses", href: "#upcoming" },
  { label: "Internships", href: "#internships" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fluxiora_intelligence?igsh=MTFjZ2ZkcXJodGU0dw==",
    icon: "ig",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/fluxiora-intelligence-private-limited/",
    icon: "in",
  },
  {
    label: "WhatsApp Channel",
    href: "https://whatsapp.com/channel/0029VbDSFS55EjxwikbfHe2d",
    icon: "wa",
  },
];

