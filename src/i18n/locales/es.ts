import type { EnglishCatalog } from './en'
import type { DeepTranslated } from '../types'

export const es = {
  metadata: {
    title: 'Andrés Miguel Guzmán Cruz - Ingeniero de software en Microsoft',
    description:
      'Andrés Miguel Guzmán Cruz - Ingeniero de software en Microsoft. Ingeniero en Sistemas Computacionales y entusiasta de la IA que crea experiencias web rápidas y fáciles de mantener con React, TypeScript y C#. Portafolio, proyectos y experiencia.',
    socialDescription:
      'Ingeniero de software en Microsoft. Ingeniero en Sistemas Computacionales y entusiasta de la IA que crea experiencias web rápidas y fáciles de mantener con React, TypeScript y C#.',
    imageAlt: 'Andrés Miguel Guzmán Cruz - Ingeniero de software en Microsoft',
    openGraphLocale: 'es_MX',
    jobTitle: 'Ingeniero de software',
  },
  languageMenu: {
    buttonLabel: 'Elegir idioma',
    menuLabel: 'Idioma',
    currentLanguage: 'Idioma actual: {language}',
    names: {
      en: 'Inglés',
      es: 'Español',
      'zh-CN': 'Chino simplificado',
    },
  },
  common: {
    logoAlt: 'Logotipo de {name}',
    copied: 'Copiado',
    copy: 'Copiar {label}',
    work: 'Profesional',
    personal: 'Personal',
    showDetails: 'Mostrar detalles',
    hideDetails: 'Ocultar detalles',
    links: {
      github: 'GitHub',
      frontend: 'Frontend',
      backend: 'Backend',
    },
  },
  nav: {
    hero: 'Inicio',
    about: 'Perfil',
    experience: 'Trabajo',
    projects: 'Proyectos',
    skills: 'Aptitudes',
    contact: 'Contacto',
  },
  hero: {
    role: 'INGENIERO DE SOFTWARE L60 @ {company}',
    tagline:
      'Ingeniero de software que crea experiencias web rápidas y fáciles de mantener con React, TypeScript y C#. Ingeniero en Sistemas Computacionales y entusiasta de la IA.',
    viewProjects: 'Ver proyectos',
    getInTouch: 'Ponte en contacto',
  },
  about: {
    title: 'Sobre mí',
    eyebrow: 'Quién soy',
    missionDate: 'Mi objetivo',
    mission:
      '“Quiero contribuir a un futuro en el que la tecnología de vanguardia sea ampliamente accesible, esté democratizada y fomente el crecimiento socioeconómico de los grupos marginados.”',
    education: {
      escom: {
        school: 'Escuela Superior de Cómputo, Instituto Politécnico Nacional',
        degree: 'Licenciatura en Ingeniería en Sistemas Computacionales',
        period: 'Graduado en julio de 2025',
        points: [
          'Promedio general: 9.0 / 10.0.',
          'Miembro del Club de Algoritmos.',
        ],
      },
      chandigarh: {
        school: 'Chandigarh University',
        degree: 'Licenciatura en Ingeniería en Ciencias de la Computación (IoT)',
        period: 'febrero de 2023 a junio de 2023',
        points: [
          'Intercambio semestral en Punjab, India.',
          'Desarrollé proyectos de visión artificial con una Raspberry Pi 4.',
        ],
      },
    },
  },
  experience: {
    title: 'Experiencia e investigación',
    eyebrow: 'Dónde he trabajado',
    items: {
      microsoftEngineer: {
        role: 'Ingeniero de software',
        org: 'Microsoft, tiempo completo',
        period: 'enero de 2025 a la fecha',
        summary: 'Desarrollo web con React + TS + MobX; backend con C# y Neo4j.',
        points: [
          'Contribuí a proyectos internos y optimicé los tiempos de carga en un 20 % mediante técnicas de concurrencia en experiencias web.',
          'Migré aplicaciones y componentes completos de React a prácticas de código y convenciones internas más recientes, lo que mejoró la facilidad de mantenimiento.',
          'Desarrollé funcionalidades desde cero, elaboré especificaciones funcionales detalladas, lideré reuniones con clientes y entregué nuevas experiencias.',
        ],
      },
      ipnResearch: {
        role: 'Asistente de investigación',
        org: 'Instituto Politécnico Nacional',
        period: 'marzo de 2025 a la fecha',
        summary: 'Investigación en el campo del aprendizaje automático.',
        points: [
          'Colaboré en el desarrollo de modelos predictivos para aplicaciones reales.',
          'Trabajé estrechamente con investigadores sénior para comprender técnicas y metodologías avanzadas de aprendizaje automático.',
          'Participé en discusiones semanales de investigación para ampliar conocimientos y contribuir a proyectos en curso.',
        ],
      },
      banxicoIntern: {
        role: 'Practicante de ciberseguridad',
        org: 'Banco de México',
        period: 'agosto de 2024 a septiembre de 2024',
        summary: 'Búsqueda, documentación y reporte de vulnerabilidades en sistemas internos.',
        points: [
          'Entregué un proyecto de visualización de datos que demostró dominio de Python y Tableau, muy elogiado por la alta dirección.',
          'Investigué plataformas como CVE, NVD, OSV y Twitter para identificar y documentar vulnerabilidades críticas, lo que fortaleció la seguridad de los sistemas.',
        ],
      },
      microsoftIntern: {
        role: 'Practicante de ingeniería de software',
        org: 'Microsoft',
        period: 'febrero de 2024 a agosto de 2024',
        summary: 'Enfocado en desarrollo web con React + TS + MobX y SQL Server.',
        points: [
          'Perfeccioné un modelo de proyecto interno mediante consultas de OData con Neo4j, lo que mejoró la eficiencia al gestionar solicitudes basadas en identidad.',
          'Creé interfaces de búsqueda dinámicas para aplicaciones web, API y permisos en un nuevo portal, integrando API REST.',
          'Fui seleccionado como uno de los principales candidatos de LATAM y México para la cohorte inaugural de este programa de prácticas.',
        ],
      },
    },
  },
  projects: {
    title: 'Proyectos',
    eyebrow: 'Lo que he creado',
    items: {
      emhoInitiative: {
        title: 'EMHO Initiative',
        period: 'octubre de 2026',
        description:
          'Un espacio editorial bilingüe para proyectos de aprendizaje independientes, que conecta la práctica de mandarín, el estudio de algoritmos y artículos originales con un diseño claro inspirado en collages.',
        points: [
          'Creé navegación en español e inglés, collages adaptables de proyectos y artículos bilingües en Markdown.',
          'Publiqué rutas estáticas con metadatos por página y un menú lateral izquierdo adaptado a móviles.',
        ],
      },
      chino100: {
        title: 'Chino 100',
        period: 'octubre de 2026',
        description:
          'Una aplicación para aprender mandarín en español con lecciones guiadas, práctica interactiva, exámenes y audio natural en chino, además de asistencia opcional de IA en el dispositivo.',
        points: [
          'Implementé ejercicios y evaluación en el navegador, rutas de aprendizaje y seguimiento del progreso sin un servidor de aplicación.',
          'Integré la voz neuronal Xiaoxiao con pronunciación normal y lenta, voz del navegador como respaldo y asistencia local opcional de IA para las instrucciones.',
        ],
      },
      dsaMastery: {
        title: 'DSA Mastery',
        period: 'octubre de 2026',
        description:
          'Un espacio interactivo de práctica de algoritmos con editor de Python y ejecución de código en el navegador, que complementa los ejercicios de recuperación activa de One-DSA.',
        points: [
          'Ejecuta Python directamente en el navegador con Pyodide, manteniendo la ejecución en un worker.',
          'Publiqué una aplicación de práctica junto a One-DSA, con caché sin conexión aislada.',
        ],
      },
      llmFineTuning: {
        title: 'Ajuste fino y comparación de LLM de pesos abiertos',
        period: 'julio de 2026',
        description:
          'Ajuste fino y evaluación comparativa de Qwen3-8B-Instruct y Phi-4 con QDoRA en una sola RTX 5090; después, despliegue del modelo ganador como una versión de ONNX optimizada para CPU (pesos INT4 + cómputo INT8), todo controlado desde una aplicación web de Streamlit.',
        points: [
          'Ajusté Qwen3-8B-Instruct y Phi-4 con QDoRA (4 bits + DoRA, todas las capas lineales) en una sola RTX 5090 mediante LLaMA-Factory, con los mismos hiperparámetros principales para una comparación justa.',
          'Evalué ambos modelos con preguntas del dominio reservadas y generadas, métricas de referencia (ROUGE, BLEU, chrF) y un LLM-as-a-judge de Copilot CLI, por pares y calificado contra referencias, para fundamentar la selección del modelo con datos.',
          'Exporté el modelo seleccionado a ONNX optimizado para CPU (pesos INT4 + cómputo INT8) para un Microsoft Dev Box sin GPU, además de un SDK reutilizable de inferencia con ONNX Runtime.',
          'Orquesté todo el pipeline —ingesta, preparación de datos, entrenamiento, combinación, exportación, evaluación e inferencia— desde una aplicación web de Streamlit con registros en vivo de trabajos de GPU y conectores empresariales de ingesta de datos.',
        ],
      },
      localRag: {
        title: 'RAG local',
        period: 'julio de 2026',
        description:
          'Aplicación de chat con generación aumentada por recuperación: un frontend de Vite + React sobre un pipeline de FastAPI + Haystack + LanceDB, con respuestas fundamentadas y citadas transmitidas token por token, y generación con proveedor intercambiable.',
        points: [
          'Creé bases de conocimiento independientes, cada una como una tabla aislada de LanceDB, con descripciones y preguntas de ejemplo generadas automáticamente, y con el historial de sesiones almacenado en SQLite.',
          'Entregué respuestas fundamentadas con citas en línea [n] y extractos de fuentes expandibles, transmitidas token por token mediante SSE con un botón para detenerlas.',
          'Permití intercambiar el proveedor de generación en tiempo de ejecución (Groq, NVIDIA NIM, Google Gemini, OpenRouter, Hugging Face), mientras que las incrustaciones y la recuperación siempre se ejecutan localmente.',
          'Desplegué el backend de FastAPI detrás de Caddy en una VM de Azure y la SPA en GitHub Pages en aguzmancruz.com/local-rag.',
        ],
      },
      oneDsa: {
        title: 'One-DSA',
        period: 'julio de 2026',
        description:
          'Sistema de dominio de DSA centrado en Python: ejercicios de programación de recuperación activa y repetición espaciada para los patrones de algoritmos necesarios para destacar en entrevistas técnicas.',
        points: [
          'Construí un planificador personalizado de repetición espaciada SM-2 con un flujo de calificación de 4 botones, que conserva el estado de revisión de cada tarjeta en el almacenamiento local.',
          'Diseñé cuatro tipos de ejercicios: reconocimiento, completar espacios, código y sintaxis, con sesiones de estudio por patrón y de repaso mixto.',
          'Publiqué una SPA rápida de React 19 + Vite del lado del cliente, con resaltado de sintaxis de Shiki optimizado para la lectura.',
        ],
      },
      devxWorkflows: {
        title: 'DevX Workflows UI Desktop',
        period: 'junio de 2026',
        description:
          'Aplicación de escritorio de Electron que encapsula el SDK de GitHub Copilot (Agency), con una interfaz de chat, conocimiento RAG en el dispositivo y creación de proyectos.',
        points: [
          'Construí la aplicación con React 19 + Fluent UI v9 + Framer Motion sobre Electron, transmitiendo sesiones del SDK de Copilot con modos plan/autopilot y selector de modelo.',
          'Implementé RAG privado en el dispositivo (LanceDB + MiniLM mediante @huggingface/transformers) para indexar y buscar en documentación y archivos, además de conversión de voz a Markdown sin conexión.',
          'Agregué un generador de proyectos con orquestación de subagentes y un panel de MCP que administra servidores de puente de navegador, Azure DevOps, WorkIQ y GitHub.',
        ],
      },
      exchangePlatform: {
        title: 'Plataforma de solicitudes de intercambio semestral',
        period: 'marzo de 2025',
        description:
          'Lideré el desarrollo del sistema universitario del Instituto Politécnico Nacional (IPN) para gestionar las solicitudes de estudiantes que desean cursar estudios en el extranjero.',
        points: [
          'Lideré un equipo de 3 estudiantes y brindé orientación sobre el diseño del sistema y la arquitectura.',
          'Desarrollé con pgAdmin 4, WebApi Core, React + TS y scripts de Bash para la configuración en servidores internos.',
          'Aumenté la eficiencia, la colaboración y la productividad entre el personal administrativo y la comunidad estudiantil.',
        ],
      },
      notaInsights: {
        title: 'Nota Insights',
        period: 'enero de 2025',
        description:
          'Aplicación de escritorio de PLN con motor de búsqueda, recomendación de contenido, detección de plagio, análisis de tendencias y resumen automático.',
        points: [
          'Desarrollé una interfaz gráfica de usuario intuitiva con customtkinter y CTkTable, integrada con herramientas de visualización dinámica de datos.',
          'Implementé modelos basados en BERT para generar representaciones semánticas de texto, aprovechando un corpus estructurado de noticias en CSV.',
        ],
      },
      mobilityTimeSaver: {
        title: 'Mobility Time Saver',
        period: 'noviembre de 2024',
        description:
          'Aplicación web progresiva móvil y multiplataforma, diseñada para generar reportes de incidentes dentro del Sistema de Movilidad Integrada de la Ciudad de México (CDMX).',
        points: [
          'Desarrollé una interfaz intuitiva con React + TypeScript y Next.js para interactuar con el backend de Java.',
          'Mejoré la funcionalidad con uso compartido de ubicación en tiempo real, generación de reportes y autenticación de dos factores (2FA).',
          'Implementé OpenTripPlanner para crear itinerarios y mapas de rutas con datos GTFS proporcionados por el gobierno.',
        ],
      },
      mawi: {
        title: 'Mawí Ecológica',
        period: 'julio de 2024',
        description:
          'Tienda de comercio electrónico de Shopify para una marca de productos ecológicos y sostenibles: una tienda en línea totalmente configurada con catálogo de tema personalizado, pago seguro y una experiencia de compra centrada en dispositivos móviles.',
        points: [
          'Configuré la tienda completa de Shopify, desde productos y colecciones hasta envíos, impuestos y pago.',
          'Personalicé el tema de la tienda con Liquid, adaptando secciones, identidad visual y diseño a la identidad de la marca.',
          'Construí el catálogo de productos y un flujo de pago optimizado para respaldar las ventas presenciales y en línea.',
        ],
      },
      aiNow: {
        title: 'Aplicación web SaaS AI-NOW',
        period: 'enero de 2024',
        description:
          'Aplicación SaaS que integra ChatGPT para interacción avanzada con usuarios y generación de contenido.',
        points: [
          'Integré Stripe para un procesamiento de pagos eficiente y creé mecanismos de autenticación seguros.',
          'Utilicé una pila tecnológica que incluye Next.js, React, Prisma y Clerk para crear una plataforma escalable y segura.',
          'Integré las API de ChatGPT y Replicate.ai para habilitar interacciones dinámicas e inteligentes.',
        ],
      },
      toyStore: {
        title: 'Tienda de juguetes de comercio electrónico',
        period: 'enero de 2024',
        description:
          'Tienda de juguetes en línea de pila completa, con exploración de productos, autenticación de usuarios y carrito de compras; creada como una aplicación Angular de una sola página, respaldada por una base de datos de Supabase y desplegada en Render.',
        points: [
          'Construí una aplicación Angular adaptable de una sola página con catálogo de productos, carrito y flujo de inicio de sesión.',
          'Usé Supabase para la base de datos, la autenticación y el acceso a datos que impulsan la tienda.',
          'Desplegué la aplicación en Render para alojamiento continuo con una URL pública activa.',
        ],
      },
    },
  },
  skills: {
    title: 'Habilidades',
    eyebrow: 'Tecnologías con las que trabajo',
    categories: {
      programmingLanguages: 'Lenguajes de programación',
      languages: 'Idiomas',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bases de datos',
      cloud: 'Nube',
      machineLearning: 'Aprendizaje automático',
      languageModels: 'Modelos de lenguaje',
      aiTools: 'Herramientas de IA',
      tools: 'Herramientas',
    },
    languageItems: {
      Spanish: 'Español',
      English: 'Inglés',
      'Mandarin Chinese (Simplified)': 'Chino mandarín (simplificado)',
    },
  },
  contact: {
    title: 'Ponte en contacto',
    eyebrow: 'Conectemos',
    labels: {
      workEmail: 'Correo electrónico',
      personalEmail: 'Gmail',
      workGitHub: 'GitHub',
      personalGitHub: 'GitHub',
      linkedin: 'LinkedIn',
      website: 'Sitio web',
    },
  },
} as const satisfies DeepTranslated<EnglishCatalog>
