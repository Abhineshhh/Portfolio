import { CommandItem, ContactInfo, ExperienceItem, SkillCategory, StatItem } from '@/types/terminal';

// Personal Information
export const PERSONAL_INFO = {
  name: 'Abhinesh Jha',
  initials: 'AJ',
  role: 'Backend Developer',
  specialization: 'Java & Spring Boot Specialist',
  email: 'jhaabhinesh977@gmail.com',
  website: 'https://resume.abhineshhh.me/cv.pdf',
  linkedin: 'https://linkedin.com/in/abhineshjha',
  linkedinUsername: 'abhineshjha',
  github: 'https://github.com/Abhineshhh',
  githubUsername: 'Abhineshhh',
  twitter: 'https://x.com/Abhineshhh',
  twitterUsername: 'Abhineshhh',
  discord: 'https://discord.com/users/893545184204296312',
  discordId: '893545184204296312',
  peerlist: 'https://peerlist.io/abhineshhh/resume',
  peerlistUsername: 'abhineshhh',
  summary: `I'm a backend developer specializing in Java and Spring Boot, focused on building scalable, production-grade distributed systems. I design architectures that balance performance, reliability, and maintainability. My approach emphasizes writing clean, modular, and efficient code.

I have strong expertise in RESTful API design, database optimization, and security implementation. My background includes network programming, concurrency patterns, and asynchronous processing. I'm experienced in crafting services that perform efficiently under heavy workloads.

I'm passionate about clean architecture, performance tuning, and scalable design principles. I enjoy tackling complex backend challenges with elegant, data-driven solutions. My goal is to engineer systems that stay stable, efficient, and adaptable over time.`,
};

// Command List for Help
export const COMMAND_LIST: CommandItem[] = [
  { cmd: 'help', desc: 'Show available commands', icon: 'help' },
  { cmd: 'about', desc: 'Learn more about me', icon: 'about' },
  { cmd: 'skills', desc: 'View my technical skills', icon: 'skills' },
  { cmd: 'experience', desc: 'See my work/experience', icon: 'experience' },
  { cmd: 'projects', desc: 'Check out my projects', icon: 'projects' },
  { cmd: 'contact', desc: 'Get my contact information', icon: 'contact' },
  { cmd: 'theme', desc: 'Change terminal theme', icon: 'theme' },
  { cmd: 'clear', desc: 'Clear the terminal', icon: 'clear' },
];

// Skills Categories
export const SKILLS: SkillCategory[] = [
  { 
    category: 'Languages', 
    items: ['Java', 'C', 'C++', 'Python','Kotlin', 'SQL', 'JavaScript'],
    icon: 'languages',
    color: 'cyan'
  },
  { 
    category: 'Frameworks & Libraries', 
    items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Hibernate', 'Maven'],
    icon: 'frameworks',
    color: 'yellow'
  },
  { 
    category: 'Databases', 
    items: ['MySQL', 'PostgreSQL', 'MongoDB','SQLite','H2 Database'],
    icon: 'databases',
    color: 'green'
  },
  { 
    category: 'Tools & Technologies', 
    items: ['Git', 'Docker', 'Postman', 'Linux', 'Swagger', 'Firebase','REST APIs','Github Actions'],
    icon: 'tools',
    color: 'purple'
  },
];

// Experience / Volunteer Work
export const EXPERIENCE: ExperienceItem[] = [
  {
    org: 'HackSquad by Novu',
    role: 'Open Source Contributor',
    year: '2024',
    url: null,
    linkedinPost: 'https://www.linkedin.com/posts/abhineshjha_hacksquad2023-winners-teamworkmakesthedreamwork-activity-7157707262344527872-7gT7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3prA8Bx3EQCn8jGY4ai1D1rjS7t6n-F_Y',
    desc: 'Winner of HackSquad open-source program. Developed new features and improved code quality through testing and documentation.',
    color: 'green',
    icon: 'hacksquad',
    badge: 'WINNER'
  },
  {
    org: 'Social Summer of Code',
    role: 'Open Source Contributor',
    year: '2024',
    url: null,
    linkedinPost: 'https://www.linkedin.com/posts/abhineshjha_opensource-gratitude-activity-7179072486649593856-uoya?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3prA8Bx3EQCn8jGY4ai1D1rjS7t6n-F_Y',
    desc: 'Winner of Social Summer of Code. Enhanced frontend UX and modularized Python programs.',
    color: 'blue',
    icon: 'ssoc',
    badge: 'WINNER'
  },
  {
    org: 'Innogeeks Winter of Code',
    role: 'Open Source Contributor',
    year: '2023',
    url: null,
    linkedinPost: 'https://www.linkedin.com/posts/abhineshjha_iwoc2-opensource-gratitude-activity-7166304850287288321-RqsP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3prA8Bx3EQCn8jGY4ai1D1rjS7t6n-F_Y',
    desc: 'Winner of Innogeeks Winter of Code. Implemented features and resolved bugs in web applications.',
    color: 'purple',
    icon: 'iwoc',
    badge: 'WINNER'
  }
];

// Education
export const EDUCATION = {
  institution: 'Maharshi Dayanand University',
  degree: 'B.Tech in Computer Science',
  cgpa: '8.2',
  maxCgpa: '10',
  courses: ['Operating Systems', 'DBMS', 'Computer Networks', 'Data Structures', 'Algorithms'],
  focusArea: 'Backend Systems',
  achievement: 'Dean\'s List',
};

// Contact Information
export const CONTACT_INFO: ContactInfo[] = [
  { 
    icon: 'email', 
    label: 'Email', 
    value: 'jhaabhinesh977@gmail.com', 
    link: 'mailto:jhaabhinesh977@gmail.com', 
    color: 'cyan' 
  },
  { 
    icon: 'website', 
    label: 'Website', 
    value: 'resume.abhineshhh.me', 
    link: 'https://resume.abhineshhh.me/cv.pdf', 
    color: 'green' 
  },
  { 
    icon: 'linkedin', 
    label: 'LinkedIn', 
    value: 'abhineshjha', 
    link: 'https://linkedin.com/in/abhineshjha', 
    color: 'blue' 
  },
  { 
    icon: 'github', 
    label: 'GitHub', 
    value: 'Abhineshhh', 
    link: 'https://github.com/Abhineshhh', 
    color: 'purple' 
  },
  { 
    icon: 'twitter', 
    label: 'X (Twitter)', 
    value: '@Abhineshhh', 
    link: 'https://x.com/Abhineshhh', 
    color: 'blue' 
  },
  { 
    icon: 'message-circle', 
    label: 'Discord', 
    value: 'abhineshhh', 
    link: 'https://discord.com/users/893545184204296312', 
    color: 'purple' 
  },
  { 
    icon: 'user-circle', 
    label: 'Peerlist', 
    value: 'abhineshhh', 
    link: 'https://peerlist.io/abhineshhh/resume', 
    color: 'green' 
  },
];

// Stats for About section
export const STATS: StatItem[] = [
  { label: 'Projects', value: '10+', icon: 'projects', color: 'cyan' },
  { label: 'Open Source', value: '3', icon: 'award', color: 'yellow' },
  { label: 'Experience', value: '2+ yrs', icon: 'trending', color: 'green' },
];

// Projects
export const PROJECTS = [
  {
    name: 'TaskManager API',
    icon: 'taskmanager',
    description: 'RESTful API for task management with full CRUD operations and clean architecture. Built with enterprise-grade patterns for scalability and maintainability.',
    features: [
      'Automated auditing for compliance & change tracking',
      'Transaction management with atomic operations',
      'Asynchronous processing to decouple workflows',
      'RESTful endpoints with comprehensive validation',
    ],
    technologies: ['Spring Boot', 'Java', 'MySQL', 'JPA', 'REST API'],
    githubUrl: 'https://github.com/Abhineshhh/TaskManager',
    badge: 'PRODUCTION',
    color: 'cyan',
  },
  {
    name: 'PeerLink',
    icon: 'peerlink',
    description: 'Peer-to-peer file transfer system built with Java socket programming and multi-layer security. Handles large file transfers with enterprise-grade reliability.',
    features: [
      'Custom HTTP multipart parser with thread-safe streaming',
      '7-layer security: PIN auth, rate limiting, auto-delete',
      'Supports 500MB+ streaming transfers with socket timeouts',
      'Dynamic TCP server allocation with 10-thread pool',
    ],
    technologies: ['Java', 'Next.js', 'TypeScript', 'Socket Programming', 'P2P'],
    githubUrl: 'https://github.com/Abhineshhh/Peerlink',
    badge: 'P2P SYSTEM',
    color: 'purple',
  },
  {
    name: 'Multithreaded WebServer',
    icon: 'webserver',
    description: 'High-performance multithreaded web server built with Java socket programming. Echoes reversed messages back to clients with concurrent connection handling.',
    features: [
      'Echoes reversed messages back to the client',
      'Socket-based communication with TCP protocol',
      'Handles multiple clients using multithreading',
      'Thread-safe message processing and connection management',
    ],
    technologies: ['Java', 'Socket Programming', 'Multithreading', 'TCP/IP'],
    githubUrl: 'https://github.com/Abhineshhh/Multithreaded-WebServer',
    badge: 'CONCURRENT',
    color: 'green',
  },
  {
    name: 'Nyxen Theme',
    icon: 'nyxen',
    description: 'Nyxen is a sleek and modern dark theme for Visual Studio Code, with a carefully curated color palette. Ensures a comfortable and visually appealing workspace for developers.',
    features: [
      'Carefully curated dark color palette for reduced eye strain',
      'Optimized syntax highlighting for multiple languages',
      'Modern and visually appealing workspace design',
      'Published on VS Code Marketplace for easy installation',
    ],
    technologies: ['VS Code', 'JSON', 'Theme Design', 'Color Theory'],
    githubUrl: 'https://github.com/Abhineshhh/Nyxen-theme',
    badge: 'VS CODE',
    color: 'yellow',
  },
];

// Resume Links
export const RESUME_LINKS = [
  { 
    icon: 'github', 
    name: 'GitHub Profile', 
    desc: 'View my code repositories', 
    link: 'https://github.com/Abhineshhh', 
    color: 'purple' 
  },
  { 
    icon: 'linkedin', 
    name: 'LinkedIn', 
    desc: 'Professional network', 
    link: 'https://linkedin.com/in/abhineshjha', 
    color: 'blue' 
  },
  { 
    icon: 'resume', 
    name: 'Resume (PDF)', 
    desc: 'Download my resume (PDF)', 
    link: 'https://resume.abhineshhh.me/cv.pdf', 
    color: 'green' 
  },
  { 
    icon: 'email', 
    name: 'Email Me', 
    desc: 'Get in touch directly', 
    link: 'mailto:jhaabhinesh977@gmail.com', 
    color: 'cyan' 
  },
];

// Quick Stats for Resume
export const QUICK_STATS = [
  { label: 'Projects', value: '10+', color: 'cyan' },
  { label: 'OSS Wins', value: '3', color: 'green' },
  { label: 'Years Exp', value: '2+', color: 'purple' },
];
