export const en = {
  metadata: {
    title: 'Andrés Miguel Guzmán Cruz - Software Engineer at Microsoft',
    description:
      'Andrés Miguel Guzmán Cruz - Software Engineer at Microsoft. Computer Systems Engineer and AI enthusiast building fast, maintainable web experiences with React, TypeScript and C#. Portfolio, projects and experience.',
    socialDescription:
      'Software Engineer at Microsoft. Computer Systems Engineer and AI enthusiast building fast, maintainable web experiences with React, TypeScript and C#.',
    imageAlt: 'Andrés Miguel Guzmán Cruz - Software Engineer at Microsoft',
    openGraphLocale: 'en_US',
    jobTitle: 'Software Engineer',
  },
  languageMenu: {
    buttonLabel: 'Choose language',
    menuLabel: 'Language',
    currentLanguage: 'Current language: {language}',
    names: {
      en: 'English',
      es: 'Spanish',
      'zh-CN': 'Simplified Chinese',
    },
  },
  common: {
    logoAlt: '{name} logo',
    copied: 'Copied',
    copy: 'Copy {label}',
    work: 'Work',
    personal: 'Personal',
    showDetails: 'Show details',
    hideDetails: 'Hide details',
    links: {
      github: 'GitHub',
      frontend: 'Frontend',
      backend: 'Backend',
    },
  },
  nav: {
    hero: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    role: 'SOFTWARE ENGINEER L60 @ {company}',
    tagline:
      'Software Engineer building fast, maintainable web experiences with React, TypeScript and C#. Computer Systems Engineer and AI enthusiast.',
    viewProjects: 'View projects',
    getInTouch: 'Get in touch',
  },
  about: {
    title: 'About me',
    eyebrow: 'Who I am',
    missionDate: 'My goal',
    mission:
      '“I want to contribute to a future where cutting-edge technology is widely accessible, democratized, and promotes the socioeconomic growth of marginalized groups.”',
    education: {
      escom: {
        school: 'Escuela Superior de Cómputo, Instituto Politécnico Nacional',
        degree: 'B.S. in Computer Systems Engineering',
        period: 'Graduated July 2025',
        points: [
          'Overall average: 9.0 / 10.0.',
          'Member of the Algorithm Club.',
        ],
      },
      chandigarh: {
        school: 'Chandigarh University',
        degree: 'B.S. in Computer Science Engineering (IoT)',
        period: 'February 2023 to June 2023',
        points: [
          'Semester exchange in Punjab, India.',
          'Built artificial vision projects using a Raspberry Pi 4.',
        ],
      },
    },
  },
  experience: {
    title: 'Experience & Research',
    eyebrow: "Where I've worked",
    items: {
      microsoftEngineer: {
        role: 'Software Engineer',
        org: 'Microsoft, Full-time',
        period: 'January 2025 to Present',
        summary: 'Web development using React + TS + MobX, backend using C#, Neo4j.',
        points: [
          'Contributed to internal projects, optimizing load times by 20% through concurrency techniques on web experiences.',
          'Migrated entire React applications and components to newer code practices and internal conventions, improving maintainability.',
          'Developed features from scratch, authored detailed functional specifications, led client meetings, and delivered new experiences.',
        ],
      },
      ipnResearch: {
        role: 'Research Assistant',
        org: 'Instituto Politécnico Nacional',
        period: 'March 2025 to Present',
        summary: 'Conducting research in the field of Machine Learning.',
        points: [
          'Collaborated on the development of predictive models for real-world applications.',
          'Worked closely with senior researchers to understand advanced ML techniques and methodologies.',
          'Participated in weekly research discussions to enhance knowledge and contribute to ongoing projects.',
        ],
      },
      banxicoIntern: {
        role: 'Cybersecurity Intern',
        org: 'Bank of Mexico',
        period: 'August 2024 to September 2024',
        summary: 'Search, document, and report vulnerabilities in internal systems.',
        points: [
          'Delivered a data visualization project showcasing proficiency in Python and Tableau, highly praised by senior management.',
          'Researched platforms like CVE, NVD, OSV, and Twitter to identify and document critical vulnerabilities, enhancing system security.',
        ],
      },
      microsoftIntern: {
        role: 'Software Engineer Intern',
        org: 'Microsoft',
        period: 'February 2024 to August 2024',
        summary: 'Focused on web development using React + TS + MobX and SQL Server.',
        points: [
          'Refined an internal project model using OData queries with Neo4j, improving efficiency handling identity-based requests.',
          'Crafted dynamic search interfaces for web apps, APIs, and permissions in a new portal, integrating REST APIs.',
          'Selected as one of the top candidates in LATAM and Mexico for the inaugural cohort of this internship program.',
        ],
      },
    },
  },
  projects: {
    title: 'Projects',
    eyebrow: "Things I've built",
    items: {
      emhoInitiative: {
        title: 'EMHO Initiative',
        period: 'October 2026',
        description:
          'A bilingual editorial home for independent learning projects, connecting Mandarin practice, algorithm study, and original articles in a light, collage-inspired design.',
        points: [
          'Built English and Spanish navigation, responsive project collages, and bilingual Markdown articles.',
          'Published static routes with page-specific metadata and a mobile-friendly left-side menu.',
        ],
      },
      chino100: {
        title: 'Chino 100',
        period: 'October 2026',
        description:
          'A Spanish-language Mandarin learning app with guided lessons, interactive practice, exams, and natural Chinese audio, plus optional on-device AI assistance.',
        points: [
          'Delivered browser-based exercises and grading, learning paths, and progress tracking without a backend.',
          'Integrated Xiaoxiao neural audio with normal and slow pronunciation, browser speech backup, and optional local AI wording assistance.',
        ],
      },
      dsaMastery: {
        title: 'DSA Mastery',
        period: 'October 2026',
        description:
          'An interactive algorithm practice workspace with a Python editor and browser-based code execution, complementing One-DSA active-recall drills.',
        points: [
          'Run Python directly in the browser with Pyodide, keeping execution in a worker.',
          'Published as a dedicated practice app alongside One-DSA, with isolated offline caching.',
        ],
      },
      llmFineTuning: {
        title: 'Open-Weight LLM Fine-Tuning & Comparison',
        period: 'July 2026',
        description:
          'Fine-tuning and benchmarking Qwen3-8B-Instruct and Phi-4 with QDoRA on a single RTX 5090, then deploying the winner as a CPU-optimized ONNX (INT4 weights + INT8 compute) build, all driven from a Streamlit web app.',
        points: [
          'Fine-tuning Qwen3-8B-Instruct and Phi-4 with QDoRA (4-bit + DoRA, all-linear) on a single RTX 5090 using LLaMA-Factory, with identical core hyperparameters for a fair comparison.',
          'Evaluating both models on held-out and generated domain questions with reference metrics (ROUGE, BLEU, chrF) and a Copilot-CLI LLM-as-judge (pairwise and reference-graded) to drive a data-backed model selection.',
          'Exporting the selected model to CPU-optimized ONNX (INT4 weights + INT8 compute) for a GPU-less Microsoft Dev Box, plus a reusable ONNX Runtime inference SDK.',
          'Orchestrating the whole pipeline - ingestion, data prep, training, merge, export, evaluation and inference - from a Streamlit web app with live GPU-job logs and enterprise data-ingestion connectors.',
        ],
      },
      localRag: {
        title: 'Local RAG',
        period: 'July 2026',
        description:
          'A retrieval-augmented chat app: a Vite + React frontend over a FastAPI + Haystack + LanceDB pipeline, with grounded, cited answers streamed token-by-token and provider-swappable generation.',
        points: [
          'Built per-KB knowledge bases as isolated LanceDB tables with auto-generated descriptions and example questions, backed by SQLite session history.',
          'Delivered grounded answers with inline [n] citations and expandable source excerpts, streamed token-by-token over SSE with a stop button.',
          'Made generation provider-swappable at runtime (Groq, NVIDIA NIM, Google Gemini, OpenRouter, Hugging Face) while embeddings and retrieval always run locally.',
          'Deployed the FastAPI backend behind Caddy on an Azure VM and the SPA on GitHub Pages at aguzmancruz.com/local-rag.',
        ],
      },
      oneDsa: {
        title: 'One-DSA',
        period: 'July 2026',
        description:
          'A Python-first DSA mastery system: active-recall coding drills and spaced repetition for the algorithm patterns you need to ace technical interviews.',
        points: [
          'Built a custom SM-2 spaced-repetition scheduler with a 4-button grading flow, persisting per-card review state in local storage.',
          'Designed four drill types - recognition, fill-in-the-blank, code, and syntax - with pattern-scoped and mixed-review study sessions.',
          'Shipped as a fast client-side React 19 + Vite SPA with Shiki-powered syntax highlighting for reading-optimized code.',
        ],
      },
      devxWorkflows: {
        title: 'DevX Workflows UI Desktop',
        period: 'June 2026',
        description:
          'Electron desktop app wrapping the GitHub Copilot SDK (Agency) with a chat UI, on-device RAG knowledge, and project building.',
        points: [
          'Built with React 19 + Fluent UI v9 + Framer Motion on Electron, streaming Copilot SDK sessions with plan/autopilot modes and a model picker.',
          'Implemented private on-device RAG (LanceDB + MiniLM via @huggingface/transformers) for indexing and search across docs and files, plus offline speech-to-Markdown.',
          'Added a Project Builder with sub-agent orchestration and an MCP dashboard managing browser bridge, Azure DevOps, WorkIQ, and GitHub servers.',
        ],
      },
      exchangePlatform: {
        title: 'Semester Exchange Request Platform',
        period: 'March 2025',
        description:
          'Led development of the National Polytechnic Institute (IPN) college system to manage students’ requests for studying abroad.',
        points: [
          'Led a team of 3 students, guiding on system and architecture design.',
          'Developed using pgAdmin 4, WebApi Core, React + TS and Bash scripting to set up on internal servers.',
          'Increased efficiency, collaboration, and productivity between administrative staff and the student community.',
        ],
      },
      notaInsights: {
        title: 'Nota Insights',
        period: 'January 2025',
        description:
          'Desktop NLP application featuring a search engine, content recommendation, plagiarism detection, trend analysis, and automatic summarization.',
        points: [
          'Developed an intuitive GUI using customtkinter and CTkTable, integrated with dynamic data visualization tools.',
          'Implemented BERT-based models to generate semantic text representations, leveraging a structured news corpus in CSV.',
        ],
      },
      mobilityTimeSaver: {
        title: 'Mobility Time Saver',
        period: 'November 2024',
        description:
          'Mobile multi-platform PWA designed to generate reports on incidents within the Integrated Mobility System of Mexico City (CDMX).',
        points: [
          'Developed an intuitive interface using React + TypeScript with Next.js to interact with the Java backend.',
          'Enhanced functionality with real-time location sharing, report generation, and two-factor authentication (2FA).',
          'Implemented OpenTripPlanner to create itineraries and route mapping, using government-provided GTFS data.',
        ],
      },
      mawi: {
        title: 'Mawí Ecológica',
        period: 'July 2024',
        description:
          'Shopify e-commerce storefront for an eco-friendly, sustainable products brand - a fully configured online store with a custom-themed catalog, secure checkout, and a mobile-first shopping experience.',
        points: [
          'Set up and configured the full Shopify store, from products and collections to shipping, taxes and checkout.',
          'Customized the storefront theme with Liquid - tailoring sections, branding and layout to the brand identity.',
          'Built the product catalog and a streamlined checkout flow to support in-person and online sales.',
        ],
      },
      aiNow: {
        title: 'AI-NOW SaaS Web Application',
        period: 'January 2024',
        description:
          'A SaaS application integrating ChatGPT for advanced user interaction and content generation.',
        points: [
          'Integrated Stripe for efficient payment processing and built secure authentication mechanisms.',
          'Employed a tech stack including Next.js, React, Prisma and Clerk to create a scalable and secure platform.',
          'Integrated ChatGPT and Replicate.ai APIs to enable dynamic, intelligent interactions.',
        ],
      },
      toyStore: {
        title: 'Toy Store E-commerce',
        period: 'January 2024',
        description:
          'Full-stack online toy store with product browsing, user authentication and a shopping cart, built as a single-page Angular app backed by a Supabase database and deployed on Render.',
        points: [
          'Built a responsive Angular single-page application with a product catalog, cart and user login flow.',
          'Used Supabase for the database, authentication and data access powering the storefront.',
          'Deployed the app on Render for continuous hosting with a public live URL.',
        ],
      },
    },
  },
  skills: {
    title: 'Skills',
    eyebrow: 'What I work with',
    categories: {
      programmingLanguages: 'Programming Languages',
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      cloud: 'Cloud',
      machineLearning: 'Machine Learning',
      languageModels: 'Language Models',
      aiTools: 'AI Tools',
      tools: 'Tools',
    },
    languageItems: {
      Spanish: 'Spanish',
      English: 'English',
      'Mandarin Chinese (Simplified)': 'Mandarin Chinese (Simplified)',
    },
  },
  contact: {
    title: 'Get in touch',
    eyebrow: "Let's connect",
    labels: {
      workEmail: 'Email',
      personalEmail: 'Gmail',
      workGitHub: 'GitHub',
      personalGitHub: 'GitHub',
      linkedin: 'LinkedIn',
      website: 'Website',
    },
  },
} as const

export type EnglishCatalog = typeof en
