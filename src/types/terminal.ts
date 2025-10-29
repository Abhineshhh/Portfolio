export interface OutputLine {
  type: 'command' | 'result' | 'error';
  content: string | React.JSX.Element;
  id: string;
}

export type CommandFunction = (props?: any) => React.JSX.Element | string;

export interface Commands {
  [key: string]: CommandFunction;
}

export interface CommandItem {
  cmd: string;
  desc: string;
  icon: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
  color: string;
}

export interface ExperienceItem {
  org: string;
  role: string;
  year: string;
  url: string | null;
  linkedinPost?: string; // LinkedIn post link for achievement
  desc: string;
  color: string;
  icon: string;
  badge: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: string;
  color: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: string;
  color: string;
}
