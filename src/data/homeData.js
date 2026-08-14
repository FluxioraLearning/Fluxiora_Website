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

// ── Live Workshops ───────────────────────────────────────────
export const liveWorkshops = [
  {
    id: 1,
    title: "Web Development with React & Node.js",
    date: "Today, 7:00 PM",
    attendees: 42,
    isLive: true,
    buttonLabel: "Join Live",
    buttonVariant: "primary",
    color: "#1a5cdc",
    emoji: "⚛️",
  },
  {
    id: 2,
    title: "Introduction to Artificial Intelligence",
    date: "Tomorrow, 6:00 PM",
    attendees: 37,
    isLive: false,
    buttonLabel: "Register",
    buttonVariant: "outline",
    color: "#7c3aed",
    emoji: "🧠",
  },
  {
    id: 3,
    title: "Cyber Security Essentials",
    date: "Sat, 24 Aug",
    attendees: 56,
    isLive: false,
    buttonLabel: "Register",
    buttonVariant: "outline",
    color: "#0e9aad",
    emoji: "🔐",
  },
  {
    id: 4,
    title: "React Native Crash Course",
    date: "Sun, 25 Aug",
    attendees: 48,
    isLive: false,
    buttonLabel: "Register",
    buttonVariant: "outline",
    color: "#059669",
    emoji: "📱",
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

// ── Statistics ───────────────────────────────────────────────
export const stats = [
  {
    id: 1,
    value: "500+",
    label: "Students Trained",
    icon: "👥",
  },
  {
    id: 2,
    value: "20+",
    label: "Live Workshops",
    icon: "🎥",
  },
  {
    id: 3,
    value: "10+",
    label: "Tech Domains",
    icon: "📐",
  },
  {
    id: 4,
    value: "100%",
    label: "Practical Learning",
    icon: "🏆",
  },
];

// ── Why Choose Us ────────────────────────────────────────────
export const whyChoosePoints = [
  "Practical & Industry-Relevant Learning",
  "Expert Mentors from Industry",
  "Live Interaction & Doubt Solving",
  "Certificates & Career Support",
];

// ── Testimonials ─────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    quote:
      "The workshops are practical, engaging and really helped me improve my coding skills.",
    name: "Ayush Sharma",
    role: "Full Stack Developer",
    initials: "AS",
    color: "#1a5cdc",
  },
  {
    id: 2,
    quote:
      "Amazing community and mentors! I got the right guidance for my career.",
    name: "Sneha Patil",
    role: "ML Enthusiast",
    initials: "SP",
    color: "#7c3aed",
  },
  {
    id: 3,
    quote:
      "Fluxiora Learning provides real-world exposure and builds confidence.",
    name: "Rohit Verma",
    role: "Cyber Security Analyst",
    initials: "RV",
    color: "#0e9aad",
  },
];

// ── Nav Links ─────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Workshops", href: "#workshops" },
  { label: "Courses", href: "#upcoming" },
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
];
