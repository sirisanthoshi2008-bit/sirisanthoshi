// All personal information for the portfolio.
// Only factual data provided by the user is stored here — nothing invented.

export const profile = {
  name: 'K. Siri Santhoshi',
  role: 'B.Tech Data Science Student',
  intro:
    'Second-year B.Tech Data Science student at Nalla Narasimha Reddy Group of Institutions, passionate about technology and building websites that solve real-world problems.',
  // No resume file, social links, email, or phone were provided — left out intentionally.
  resumeUrl: null as string | null,
  linkedin: null as string | null,
  github: null as string | null,
  kaggle: null as string | null,
  email: null as string | null,
  phone: null as string | null,
  location: null as string | null,
};

export type EducationItem = {
  level: string;
  institution: string;
  year: string;
  detail?: string;
  score?: string;
};

export const education: EducationItem[] = [
  {
    level: 'Secondary School (10th)',
    institution: 'Kendriya Vidyalaya No. 1, Uppal',
    year: '2023',
    score: '80%',
  },
  {
    level: 'Intermediate',
    institution: 'Narayana Junior College, Tarnaka',
    year: '2025',
    score: '96%',
  },
  {
    level: 'B.Tech — Data Science',
    institution: 'Nalla Narasimha Reddy Group of Institutions',
    year: 'Currently pursuing · 2nd Year',
    detail: 'Branch: Data Science',
  },
];

export type ExperienceItem = {
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
};

export const experience: ExperienceItem[] = [
  {
    title: 'CivicFix Website',
    description:
      'Developed a website for CivicFix as a project, applying web development skills to build a functional and user-friendly interface.',
    tags: [],
    github: null,
    demo: null,
  },
];

// Projects mirror the experience entry — only CivicFix is provided.
export const projects: ExperienceItem[] = [
  {
    title: 'CivicFix Website',
    description:
      'Developed a website for CivicFix, focusing on a clean, functional interface and a smooth user experience.',
    tags: [],
    github: null,
    demo: null,
  },
];

// No skills, certifications, or achievements were provided in the resume.
// These sections are intentionally omitted to avoid inventing information.
