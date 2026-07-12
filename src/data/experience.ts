import type { ExperienceItem } from '@/types'
import microsoftLogo from '@/assets/logos/microsoft.svg'
import ipnLogo from '@/assets/logos/ipn.png'
import banxicoLogo from '@/assets/logos/banxico.svg'

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    org: 'Microsoft, Full-time',
    period: 'January 2025 to Present',
    summary: 'Web development using React + TS + MobX, backend using C#, Neo4j.',
    kind: 'work',
    logo: microsoftLogo,
    points: [
      'Contributed to internal projects, optimizing load times by 20% through concurrency techniques on web experiences.',
      'Migrated entire React applications and components to newer code practices and internal conventions, improving maintainability.',
      'Developed features from scratch, authored detailed functional specifications, led client meetings, and delivered new experiences.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Instituto Politécnico Nacional',
    period: 'March 2025 to Present',
    summary: 'Conducting research in the field of Machine Learning.',
    kind: 'research',
    logo: ipnLogo,
    logoChip: true,
    points: [
      'Collaborated on the development of predictive models for real-world applications.',
      'Worked closely with senior researchers to understand advanced ML techniques and methodologies.',
      'Participated in weekly research discussions to enhance knowledge and contribute to ongoing projects.',
    ],
  },
  {
    role: 'Cybersecurity Intern',
    org: 'Bank of Mexico',
    period: 'August 2024 to September 2024',
    summary: 'Search, document, and report vulnerabilities in internal systems.',
    kind: 'work',
    logo: banxicoLogo,
    logoChip: true,
    points: [
      'Delivered a data visualization project showcasing proficiency in Python and Tableau, highly praised by senior management.',
      'Researched platforms like CVE, NVD, OSV, and Twitter to identify and document critical vulnerabilities, enhancing system security.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Microsoft',
    period: 'February 2024 to August 2024',
    summary: 'Focused on web development using React + TS + MobX and SQL Server.',
    kind: 'work',
    logo: microsoftLogo,
    points: [
      'Refined an internal project model using OData queries with Neo4j, improving efficiency handling identity-based requests.',
      'Crafted dynamic search interfaces for web apps, APIs, and permissions in a new portal, integrating REST APIs.',
      'Selected as one of the top candidates in LATAM and Mexico for the inaugural cohort of this internship program.',
    ],
  },
]
