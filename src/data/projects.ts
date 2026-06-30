import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'DevX Workflows UI Desktop',
    period: 'June 2026',
    description:
      'Electron desktop app wrapping the GitHub Copilot SDK (Agency) with a chat UI, on-device RAG knowledge, and project building.',
    points: [
      'Built with React 19 + Fluent UI v9 + Framer Motion on Electron, streaming Copilot SDK sessions with plan/autopilot modes and a model picker.',
      'Implemented private on-device RAG (LanceDB + MiniLM via @huggingface/transformers) for indexing and search across docs and files, plus offline speech-to-Markdown.',
      'Added a Project Builder with sub-agent orchestration and an MCP dashboard managing browser bridge, Azure DevOps, WorkIQ, and GitHub servers.',
    ],
    repo: 'https://github.com/gim-home/devx-workflows',
    hasMedia: true,
  },
  {
    title: 'Semester Exchange Request Platform',
    period: 'March 2025',
    description:
      'Led development of the National Polytechnic Institute (IPN) college system to manage students’ requests for studying abroad.',
    points: [
      'Led a team of 3 students, guiding on system and architecture design.',
      'Developed using pgAdmin 4, WebApi Core, React + TS and Bash scripting to set up on internal servers.',
      'Increased efficiency, collaboration, and productivity between administrative staff and the student community.',
    ],
    hasMedia: true,
  },
  {
    title: 'Nota Insights',
    period: 'January 2025',
    description:
      'Desktop NLP application featuring a search engine, content recommendation, plagiarism detection, trend analysis, and automatic summarization.',
    points: [
      'Developed an intuitive GUI using customtkinter and CTkTable, integrated with dynamic data visualization tools.',
      'Implemented BERT-based models to generate semantic text representations, leveraging a structured news corpus in CSV.',
    ],
    url: 'https://www.aguzmancruz.com',
    hasMedia: true,
  },
  {
    title: 'Mobility Time Saver',
    period: 'November 2024',
    description:
      'Mobile multi-platform PWA designed to generate reports on incidents within the Integrated Mobility System of Mexico City (CDMX).',
    points: [
      'Developed an intuitive interface using React + TypeScript with Next.js to interact with the Java backend.',
      'Enhanced functionality with real-time location sharing, report generation, and two-factor authentication (2FA).',
      'Implemented OpenTripPlanner to create itineraries and route mapping, using government-provided GTFS data.',
    ],
    url: 'https://www.aguzmancruz.com',
    hasMedia: true,
  },
  {
    title: 'AI-NOW SaaS Web Application',
    period: 'January 2024',
    description:
      'A SaaS application integrating ChatGPT for advanced user interaction and content generation.',
    points: [
      'Integrated Stripe for efficient payment processing and built secure authentication mechanisms.',
      'Employed a tech stack including Next.js, React, Prisma and Clerk to create a scalable and secure platform.',
      'Integrated ChatGPT and Replicate.ai APIs to enable dynamic, intelligent interactions.',
    ],
    url: 'https://www.aguzmancruz.com',
    hasMedia: true,
  },
]
