export type FeaturedProject = {
  id: 'voicelegacy' | 'petyplant' | 'wijha';
  title: string;
  stack: string[];
  repository?: string;
  demo?: string;
  image?: string;
  imageAltKey: string;
};

export type ArchiveProject = {
  id: 'diablife' | 'mhealth' | 'happlant' | 'guidini' | 'infraGuard' | 'taskManager';
  title: string;
  stack: string[];
  repository?: string;
  demo?: string;
};

export type ExperienceItem = { id: string; period: string; kind: 'experience' | 'recognition' | 'leadership' };

export const profile = {
  name: 'Yassir Amrani',
  firstName: 'Yassir',
  surname: 'AMRANI',
  email: 'amraniyassir04@gmail.com',
  phone: '+212 771017007',
  phoneHref: 'tel:+212771017007',
  location: 'Tangier, Morocco',
  portfolio: 'https://yassiramrani.xyz',
  portfolioHandle: 'yassiramrani.xyz',
  github: 'https://github.com/yassiramrani',
  githubHandle: 'github.com/yassiramrani',
  linkedin: 'https://www.linkedin.com/in/yaamrani/',
  linkedinHandle: 'linkedin.com/in/yaamrani',
  resumeUrl: '/Yassir-Amrani-CV.pdf',
  resumeFileName: 'Yassir-Amrani-CV.pdf',
};

export const featuredProjects: FeaturedProject[] = [
  { id: 'voicelegacy', title: 'VoiceLegacy', stack: ['React', 'FastAPI', 'Python', 'AI/ML'], repository: 'https://github.com/yassiramrani/VoiceLegacy', imageAltKey: 'work.featured.voicelegacy.imageAlt' },
  { id: 'petyplant', title: 'PetyPlant', stack: ['AI', 'IoT', 'GreenTech', 'Hackathon'], imageAltKey: 'work.featured.petyplant.imageAlt' },
  { id: 'wijha', title: 'Wijha', stack: ['Laravel', 'Tailwind CSS', 'MySQL', 'JavaScript'], imageAltKey: 'work.featured.wijha.imageAlt' },
];

export const archiveProjects: ArchiveProject[] = [
  { id: 'diablife', title: 'DiaBLife', stack: ['React', 'Machine Learning'], repository: 'https://github.com/yassiramrani/DIABLIFE' },
  { id: 'mhealth', title: 'mHealth', stack: ['Java', 'Backend', 'HealthTech'], repository: 'https://github.com/yassiramrani/mhealth' },
  { id: 'happlant', title: 'HapPlant', stack: ['IoT', 'AI Chatbot', 'Innovation'] },
  { id: 'guidini', title: 'Guidini', stack: ['React', 'Tourism', 'Hackathon'] },
  { id: 'infraGuard', title: 'Infra Guard', stack: ['HTML', 'CSS', 'Security'], repository: 'https://github.com/yassiramrani/infra_guard_part1' },
  { id: 'taskManager', title: 'Task Manager', stack: ['HTML', 'Web Development'], repository: 'https://github.com/yassiramrani/taskmanager-web' },
];

export const experienceItems: ExperienceItem[] = [
  { id: 'president', period: '2026 — Present', kind: 'leadership' },
  { id: 'merge', period: '2026', kind: 'recognition' },
  { id: 'yazaki', period: 'Jul 2025 — Aug 2025', kind: 'experience' },
  { id: 'guidini', period: 'Recent', kind: 'recognition' },
  { id: 'petyplant', period: 'Dec 2024', kind: 'recognition' },
  { id: 'lear', period: 'Jul 2024 — Aug 2024', kind: 'experience' },
  { id: 'happlant', period: 'Jul 2024', kind: 'recognition' },
  { id: 'cyber', period: '2024', kind: 'leadership' },
];

export type ToolboxGroup = { id: 'backend' | 'frontend' | 'data' | 'tools'; items: string[] };

export const strengthIds = ['frontend', 'backend', 'cloud'] as const;
export const certificationIds = ['python', 'softwareDesign', 'cpp', 'english'] as const;

/** Dated roles kept on the CV record itself; recognitions are listed separately as awards. */
export const cvRecordItems = experienceItems.filter((item) => item.kind !== 'recognition');
export const cvAwardItems = experienceItems.filter((item) => item.kind === 'recognition');

/**
 * Mirrors the published PDF at `public/Yassir-Amrani-CV.pdf` verbatim.
 * Where the PDF and the older site copy disagree, these CV-scoped values follow the PDF.
 */
export const cvToolbox: ToolboxGroup[] = [
  { id: 'backend', items: ['Java SE 17', 'Jakarta EE', 'Spring Boot', 'Node.js', 'PHP', 'Laravel'] },
  { id: 'frontend', items: ['JavaScript', 'MERN Stack'] },
  { id: 'data', items: ['Python', 'TensorFlow'] },
  { id: 'tools', items: ['PostgreSQL', 'Prisma ORM', 'Git', 'JIRA'] },
];

export const cvEducation = ['engineering', 'prepa', 'bac'] as const;

export const cvLanguages: { id: 'french' | 'english' | 'arabic'; level: 'b2' | 'c1' | 'native' }[] = [
  { id: 'french', level: 'b2' },
  { id: 'english', level: 'c1' },
  { id: 'arabic', level: 'native' },
];

export const cvSoftSkills = ['problemSolving', 'teamwork', 'adaptability'] as const;
