import { ReactNode } from 'react';

export interface SocialLinks {
  github: string;
  linkedin: string;
  medium: string;
  youtube: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLinks;
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: ReactNode;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  tags: string[];
  description: string;
  link: string;
}

export interface LeadershipItem {
  role: string;
  org: string;
  desc: string;
}