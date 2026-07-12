import type { Project } from '@/types'
import aiNowLogo from '@/assets/projects/ainow.png'
import notaLogo from '@/assets/projects/nota.png'
import mtsLogo from '@/assets/projects/mts.png'
import mawiLogo from '@/assets/projects/mawi.png'
import oneDsaLogo from '@/assets/projects/one-dsa.svg'
import microsoftLogo from '@/assets/logos/microsoft.svg'
import ipnLogo from '@/assets/logos/ipn.png'

export const projects: Project[] = [
  {
    title: 'Open-Weight LLM Fine-Tuning & Comparison',
    period: 'In Progress',
    description:
      'Fine-tuning and benchmarking Qwen3-8B-Instruct and Phi-4 with QDoRA on a single RTX 5090, then deploying the winner as a CPU-optimized ONNX (INT8) build.',
    icon: 'BrainCircuit',
    scope: 'personal',
    stack: ['LLaMA-Factory', 'Unsloth', 'PyTorch', 'ONNX Runtime', 'Python'],
    points: [
      'Fine-tuning Qwen3-8B-Instruct and Phi-4 with QDoRA (4-bit + DoRA, all-linear) on a single RTX 5090 using LLaMA-Factory + Unsloth, with identical core hyperparameters for a fair comparison.',
      'Evaluating both models on a held-out validation set and domain tasks to drive a data-backed model selection.',
      'Exporting the selected model to CPU-optimized ONNX (INT8) for a GPU-less Microsoft Dev Box, plus a reusable ONNX Runtime inference SDK.',
    ],
    hasMedia: true,
  },
  {
    title: 'One-DSA',
    period: 'July 2026',
    description:
      'A Python-first DSA mastery system: active-recall coding drills and spaced repetition for the algorithm patterns you need to ace technical interviews.',
    icon: 'Code2',
    logo: oneDsaLogo,
    logoChip: true,
    scope: 'personal',
    stack: ['React 19', 'TypeScript', 'React Router', 'Shiki', 'Tailwind'],
    points: [
      'Built a custom SM-2 spaced-repetition scheduler with a 4-button grading flow, persisting per-card review state in local storage.',
      'Designed four drill types - recognition, fill-in-the-blank, code, and syntax - with pattern-scoped and mixed-review study sessions.',
      'Shipped as a fast client-side React 19 + Vite SPA with Shiki-powered syntax highlighting for reading-optimized code.',
    ],
    url: 'https://aguzmancruz.com/one-dsa/',
    links: [{ label: 'GitHub', href: 'https://github.com/pigchip/one-dsa' }],
    hasMedia: true,
  },
  {
    title: 'DevX Workflows UI Desktop',
    period: 'June 2026',
    description:
      'Electron desktop app wrapping the GitHub Copilot SDK (Agency) with a chat UI, on-device RAG knowledge, and project building.',
    icon: 'Bot',
    logo: microsoftLogo,
    scope: 'internal',
    stack: ['React 19', 'Electron', 'Copilot SDK', 'LanceDB', 'Fluent UI'],
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
    icon: 'Plane',
    logo: ipnLogo,
    logoChip: true,
    scope: 'personal',
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL'],
    points: [
      'Led a team of 3 students, guiding on system and architecture design.',
      'Developed using pgAdmin 4, WebApi Core, React + TS and Bash scripting to set up on internal servers.',
      'Increased efficiency, collaboration, and productivity between administrative staff and the student community.',
    ],
    links: [
      { label: 'Frontend', href: 'https://github.com/pigchip/frontend' },
      { label: 'Backend', href: 'https://github.com/pigchip/GestionAcademicaAPI' },
    ],
    hasMedia: true,
  },
  {
    title: 'Nota Insights',
    period: 'January 2025',
    description:
      'Desktop NLP application featuring a search engine, content recommendation, plagiarism detection, trend analysis, and automatic summarization.',
    icon: 'ScanSearch',
    logo: notaLogo,
    scope: 'personal',
    stack: ['Python', 'BERT', 'NLP', 'customtkinter'],
    points: [
      'Developed an intuitive GUI using customtkinter and CTkTable, integrated with dynamic data visualization tools.',
      'Implemented BERT-based models to generate semantic text representations, leveraging a structured news corpus in CSV.',
    ],
    repo: 'https://github.com/pigchip/Nota-Insights',
    hasMedia: true,
  },
  {
    title: 'Mobility Time Saver',
    period: 'November 2024',
    description:
      'Mobile multi-platform PWA designed to generate reports on incidents within the Integrated Mobility System of Mexico City (CDMX).',
    icon: 'Bus',
    logo: mtsLogo,
    scope: 'personal',
    stack: ['Next.js', 'React', 'TypeScript', 'Java', 'OpenTripPlanner'],
    points: [
      'Developed an intuitive interface using React + TypeScript with Next.js to interact with the Java backend.',
      'Enhanced functionality with real-time location sharing, report generation, and two-factor authentication (2FA).',
      'Implemented OpenTripPlanner to create itineraries and route mapping, using government-provided GTFS data.',
    ],
    url: 'https://pwa-nextjs-nine.vercel.app',
    hasMedia: true,
  },
  {
    title: 'Mawí Ecológica',
    period: 'July 2024',
    description:
      'Shopify e-commerce storefront for an eco-friendly, sustainable products brand - a fully configured online store with a custom-themed catalog, secure checkout, and a mobile-first shopping experience.',
    icon: 'Sparkles',
    logo: mawiLogo,
    logoChip: true,
    scope: 'personal',
    stack: ['Shopify', 'Liquid', 'E-commerce', 'HTML/CSS'],
    points: [
      'Set up and configured the full Shopify store, from products and collections to shipping, taxes and checkout.',
      'Customized the storefront theme with Liquid - tailoring sections, branding and layout to the brand identity.',
      'Built the product catalog and a streamlined checkout flow to support in-person and online sales.',
    ],
    url: 'https://mawiecologica.com',
    hasMedia: true,
  },
  {
    title: 'AI-NOW SaaS Web Application',
    period: 'January 2024',
    description:
      'A SaaS application integrating ChatGPT for advanced user interaction and content generation.',
    icon: 'MessageSquare',
    logo: aiNowLogo,
    scope: 'personal',
    stack: ['Next.js', 'React', 'Prisma', 'Clerk', 'Stripe'],
    points: [
      'Integrated Stripe for efficient payment processing and built secure authentication mechanisms.',
      'Employed a tech stack including Next.js, React, Prisma and Clerk to create a scalable and secure platform.',
      'Integrated ChatGPT and Replicate.ai APIs to enable dynamic, intelligent interactions.',
    ],
    repo: 'https://github.com/pigchip/AI-NOW',
    hasMedia: true,
  },
  {
    title: 'Toy Store E-commerce',
    period: 'January 2024',
    description:
      'Full-stack online toy store with product browsing, user authentication and a shopping cart, built as a single-page Angular app backed by a Supabase database and deployed on Render.',
    icon: 'ToyBrick',
    scope: 'personal',
    stack: ['Angular', 'TypeScript', 'Supabase', 'Render'],
    points: [
      'Built a responsive Angular single-page application with a product catalog, cart and user login flow.',
      'Used Supabase for the database, authentication and data access powering the storefront.',
      'Deployed the app on Render for continuous hosting with a public live URL.',
    ],
    url: 'https://zesty-chaja-7e767e.netlify.app/',
    links: [{ label: 'GitHub', href: 'https://github.com/pigchip/ecommerce-app' }],
    hasMedia: true,
  },
]
