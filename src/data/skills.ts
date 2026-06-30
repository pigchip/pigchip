import type { SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    title: 'Programming Languages',
    accent: '#4890d8',
    icon: 'Code2',
    items: [
      { label: 'TypeScript', brand: 'typescript' },
      { label: 'C++', brand: 'cplusplus' },
      { label: 'C#', mono: 'C#' },
      { label: 'Python', brand: 'python' },
      { label: 'Java', mono: 'Jv' },
      { label: 'C', brand: 'c' },
    ],
  },
  {
    title: 'Databases',
    accent: '#e3a04e',
    icon: 'Database',
    items: [
      { label: 'SQL Server', mono: 'SQL' },
      { label: 'PostgreSQL', brand: 'postgresql' },
      { label: 'Neo4j', brand: 'neo4j' },
      { label: 'Prisma', brand: 'prisma' },
      { label: 'Supabase', brand: 'supabase' },
    ],
  },
  {
    title: 'Frontend',
    accent: '#4ec2c7',
    icon: 'Layout',
    items: [
      { label: 'React', brand: 'react' },
      { label: 'Tailwind CSS', brand: 'tailwindcss' },
    ],
  },
  {
    title: 'Backend',
    accent: '#3fb950',
    icon: 'Server',
    items: [
      { label: 'Node.js', brand: 'nodejs' },
      { label: 'Spring Boot', brand: 'springboot' },
      { label: 'Visual Studio', mono: 'VS' },
    ],
  },
  {
    title: 'Cloud',
    accent: '#4890d8',
    icon: 'Cloud',
    items: [
      { label: 'Netlify', brand: 'netlify' },
      { label: 'Render', brand: 'render' },
      { label: 'Azure', mono: 'Az' },
      { label: 'GCP', brand: 'googlecloud' },
      { label: 'AWS', mono: 'AWS' },
    ],
  },
  {
    title: 'Tools',
    accent: '#9aa7c7',
    icon: 'Wrench',
    items: [
      { label: 'Git', brand: 'git' },
      { label: 'LaTeX', brand: 'latex' },
      { label: 'Bash', brand: 'bash' },
    ],
  },
  {
    title: 'Languages',
    accent: '#c084fc',
    icon: 'Languages',
    items: [{ label: 'Spanish', mono: 'ES' }, { label: 'English', mono: 'EN' }],
  },
]
