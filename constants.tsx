import React from 'react';
import { 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
} from 'lucide-react';
import { 
  PersonalInfo, 
  SkillCategory, 
  ExperienceItem, 
  ProjectItem, 
  LeadershipItem 
} from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Himanshu Yadav",
  role: "Software Developer | AI Engineer | Analyst",
  tagline: "Final Year Undergraduate at IIT Kanpur building intelligent systems and scalable solutions.",
  email: "yhimanshu22@iitk.ac.in",
  phone: "+91 8114245060",
  location: "Kanpur, India",
  socials: {
    github: "https://github.com/yhimanshu22",
    linkedin: "https://linkedin.com/in/himanshuyadav",
    medium: "https://medium.com/@yhimanshu22",
    youtube: "https://youtube.com/channel/UCsqGxVG1iCtFwwLn1ZWqb-A"
  }
};

export const SKILLS: SkillCategory[] = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "SQL", "C++"], icon: <Terminal size={20} /> },
  { category: "Frontend", items: ["React.js", "Next.js", "Angular", "Tailwind CSS", "HTML/CSS"], icon: <Code size={20} /> },
  { category: "Backend & Cloud", items: ["Node.js", "Firebase", "Prisma", "Hono", "Cloudflare", "Git"], icon: <Database size={20} /> },
  { category: "AI & ML", items: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "LangGraph", "AutoML"], icon: <Cpu size={20} /> },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "GIVA Indiejewel Private Limited",
    role: "Technical Intern (SDE)",
    period: "May 2024 - July 2024",
    description: "Worked on full-stack development and AI-driven forecasting.",
    achievements: [
      "Developed a dynamic SKU creation & product category module using Angular and Firebase, handling nested attributes for 50+ components.",
      "Built an end-to-end automated sales forecasting pipeline using AutoML (AutoGluon), improving accuracy by 15%.",
      "Reduced stockouts and overstock risks by 25% through inventory optimization strategies.",
      "Deployed a Streamlit dashboard for real-time visualization, directly contributing to a 10% increase in on-time order fulfillment."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Stock Screener Agentic AI",
    tags: ["AI Agents", "LangGraph", "YFinance", "Ollama"],
    description: "A real-time stock analysis tool using YFinance API and LangGraph. Integrated Qwen models via Ollama to generate structured, human-readable financial insights and risk assessments from raw market data.",
    link: "https://stockscreeneragent.vercel.app/"
  },
  {
    title: "Goldman Sachs Risk Job Simulation",
    tags: ["Risk Analysis", "Finance", "Simulation"],
    description: "Completed a risk assessment simulation for Goldman Sachs' Risk team. Conducted individual credit risk analysis using quantified financial data and developed mitigation strategies demonstrating strong market understanding.",
    link: "#"
  },
  {
    title: "Customer Segmentation & Credit Risk",
    tags: ["Data Science", "K-means", "PCA", "Credit Scoring"],
    description: "Implemented K-means clustering and PCA to segment customers based on spending behavior. Developed a credit scoring system using WOE binning and ROC curves to calculate optimal loan approval thresholds.",
    link: "https://github.com/yhimanshu22/Customer-Segmentation-and-Credit-Risk-Modelling"
  },
  {
    title: "JustWrite AI Blogging Platform",
    tags: ["Full Stack", "Hono", "Prisma", "Gemini API"],
    description: "A scalable blogging platform using Hono for the backend and Cloudflare workers. Integrated Gemini API for AI-assisted blog generation and Prisma for efficient data management.",
    link: "https://justwrite-f8o6qtdyw-yhimanshu220456.vercel.app/"
  },
  {
    title: "Feedback Taker Application",
    tags: ["Next.js", "Resend", "Gemini AI", "Zod"],
    description: "Anonymous feedback collection app with AI-suggested questions. Features email authentication via Resend, Zod validation, and a centralized dashboard.",
    link: "https://feedback-taker.vercel.app/sign-in"
  },
  {
    title: "Movie Recommendation System",
    tags: ["Data Science", "TF-IDF", "Streamlit"],
    description: "Content-based recommender system for 5,000+ movies using cosine similarity. Optimized preprocessing pipeline reducing runtime by 20% and deployed an interactive Streamlit app.",
    link: "https://github.com/yhimanshu22/movie_recommendation"
  },
  {
    title: "Blood Bank Management System",
    tags: ["MERN Stack", "Analytics", "Auth"],
    description: "Full-stack inventory management system with secure authentication, real-time notifications (Toast), and an analytics dashboard for donation monitoring.",
    link: "https://blood-bank-henna.vercel.app/landing-page"
  },
  {
    title: "NLP Translation Models",
    tags: ["NLP", "Llama2", "Fine-tuning"],
    description: "Fine-tuned Llama2 models for French-to-English (15% BLEU improvement) and English-to-Bengali translation. Optimized Opus-MT for English-to-Hindi translation.",
    link: "#"
  }
];

export const ACHIEVEMENTS: string[] = [
  "Secured All India Rank 10649 in JEE Advanced 2022 (Top 7% of qualified candidates)",
  "Secured All India Rank 5763 in JEE Main 2022 (Top 0.5% of 1.2M+ aspirants)",
  "Gold Medal in WorldQuant Challenge at IIT Kanpur (Quantitative Finance)",
  "Reliance Foundation Merit Scholar (4-year scholarship for exceptional performance)",
  "Awarded full academic scholarship at Dakshana Foundation (2021-22)",
  "Awarded full merit scholarship at ExNavodaya Foundation (2020-21)",
  "FFE Foundation Academic Scholar",
  "NDA 2021 Written Exam Qualified (Top 2000 qualified students)"
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    role: "Secretary, Public Relations",
    org: "Antaragni Festival, IIT Kanpur",
    desc: "Managed databases for 500+ alumni & artists. Coordinated logistics for high-profile chief guests for a festival with 5,000+ attendees. Resolved critical issues through negotiation in a high-pressure environment."
  },
  {
    role: "Senior Executive, Finance",
    org: "Techkriti Festival, IIT Kanpur",
    desc: "Processed financial documents for a budget of INR 50+ Lakhs. Managed merchandise and vendor selection for bedding and food supplies, ensuring timely delivery for 15,000+ participants."
  },
  {
    role: "Secretary, Web Development",
    org: "SOCE, IIT Kanpur",
    desc: "Developed Sankalan 2024 website using React & Node.js. Improved user engagement by 30% through regular updates and incorporated user feedback to enhance site functionality."
  },
  {
    role: "Secretary, Web Development",
    org: "Outreach Cell, IIT Kanpur",
    desc: "Revamped website increasing page load speed by 25% and accessibility. Assisted in frontend development using HTML, JavaScript, and React to improve overall user experience."
  }
];
