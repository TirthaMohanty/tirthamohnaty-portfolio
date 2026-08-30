export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  subHeadline: string;
  experienceYears: string;
  location: string;
  linkedinUrl: string;
  githubUrl?: string;
  email: string;
  phone?: string;
  portfolioUrl?: string;
  avatarUrl?: string;
  resumeUrl: string;
  isOpenToWork: boolean;
  statusText: string;
  workPreference?: string;
  testingPhilosophy: string;
}

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export type SkillProficiency = 'Hands-on' | 'Working Knowledge' | 'Experienced';

export interface SkillItem {
  name: string;
  proficiency: SkillProficiency;
  icon?: string;
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ToolboxItem {
  id: string;
  name: string;
  category: 'Automation' | 'Manual & Management' | 'API Testing' | 'Performance' | 'Security' | 'Database' | 'DevOps & Backend' | 'Languages';
  icon: string;
  badge: string;
  shortDescription: string;
  realWorldUsage: string;
  highlightedSkills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  gradeOrHighlight?: string;
  field: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  status: 'Certified' | 'In Progress';
  iconName: string;
  description: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  featured: boolean;
  tagline: string;
  badgeColor: string;
  iconName: string;
  summary: string;
  role: string;
  testingStrategy: string[];
  responsibilities: string[];
  functionalTesting: string[];
  automationApproach: string[];
  apiTesting: string[];
  performanceTesting?: string[];
  securityTesting?: string[];
  tools: string[];
  challenges: string[];
  bugsDiscovered: {
    title: string;
    description: string;
    impact: string;
  }[];
  improvements: string[];
}

export interface BugCard {
  id: string;
  title: string;
  category: 'Financial / Calculation' | 'Authentication & Session' | 'Real-time & WebSockets' | 'Mobile Storage & State' | 'UI / Contract Validation';
  severity: 'Critical' | 'High' | 'Medium';
  problem: string;
  investigation: string;
  finding: string;
  qaImpact: string;
  toolsUsed: string[];
}

export interface QaProcessStep {
  step: number;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  deliverables: string[];
  keyActions: string[];
}

export interface ApiEndpointMock {
  id: string;
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  requestHeaders: Record<string, string>;
  requestBody?: any;
  queryParams?: Record<string, string>;
  responses: {
    status: number;
    statusText: string;
    description: string;
    headers: Record<string, string>;
    body: any;
    assertions: {
      check: string;
      passed: boolean;
    }[];
  }[];
}

export interface AutomationSnippet {
  id: string;
  title: string;
  filename: string;
  language: string;
  description: string;
  code: string;
  testSteps: string[];
}
