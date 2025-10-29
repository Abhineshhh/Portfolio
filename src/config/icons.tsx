import {
  HelpCircle,
  User,
  Zap,
  Briefcase,
  Rocket,
  GraduationCap,
  Mail,
  FileText,
  Palette,
  Trash2,
  Code,
  Wrench,
  Database,
  Settings,
  Trophy,
  Sun,
  Snowflake,
  CheckCircle,
  Globe,
  Linkedin,
  Github,
  Terminal,
  Link,
  Sparkles,
  Award,
  Calendar,
  BookOpen,
  Target,
  TrendingUp,
  Twitter,
  MessageCircle,
  UserCircle,
} from 'lucide-react';

export const icons = {
  // Command icons
  help: HelpCircle,
  about: User,
  skills: Zap,
  experience: Briefcase,
  projects: Rocket,
  education: GraduationCap,
  contact: Mail,
  resume: FileText,
  theme: Palette,
  clear: Trash2,
  
  // Skill category icons
  languages: Code,
  frameworks: Wrench,
  databases: Database,
  tools: Settings,
  
  // Experience icons
  hacksquad: Trophy,
  ssoc: Sun,
  iwoc: Snowflake,
  
  // Project icons
  taskmanager: CheckCircle,
  peerlink: Link,
  webserver: Globe,
  nyxen: Sparkles,
  
  // Contact icons
  email: Mail,
  website: Globe,
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  'message-circle': MessageCircle,
  'user-circle': UserCircle,
  
  // Misc icons
  terminal: Terminal,
  award: Award,
  calendar: Calendar,
  book: BookOpen,
  target: Target,
  trending: TrendingUp,
};

export type IconName = keyof typeof icons;
