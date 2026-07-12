import type { SkillCategory } from '@/types'
import typescriptLogo from '@/assets/brands/typescript.svg'
import cplusplusLogo from '@/assets/brands/cplusplus.svg'
import csharpLogo from '@/assets/brands/csharp.svg'
import pythonLogo from '@/assets/brands/python.svg'
import javaLogo from '@/assets/brands/java.svg'
import cLogo from '@/assets/brands/c.svg'
import sqlserverLogo from '@/assets/brands/sqlserver.svg'
import postgresqlLogo from '@/assets/brands/postgresql.svg'
import neo4jLogo from '@/assets/brands/neo4j.svg'
import prismaLogo from '@/assets/brands/prisma.svg'
import supabaseLogo from '@/assets/brands/supabase.svg'
import reactLogo from '@/assets/brands/react.svg'
import nextjsLogo from '@/assets/brands/nextjs.svg'
import electronLogo from '@/assets/brands/electron.svg'
import tailwindcssLogo from '@/assets/brands/tailwindcss.svg'
import nodejsLogo from '@/assets/brands/nodejs.svg'
import dotnetcoreLogo from '@/assets/brands/dotnetcore.svg'
import springLogo from '@/assets/brands/spring.svg'
import visualstudioLogo from '@/assets/brands/visualstudio.svg'
import netlifyLogo from '@/assets/brands/netlify.svg'
import renderLogo from '@/assets/brands/render.svg'
import azureLogo from '@/assets/brands/azure.svg'
import googlecloudLogo from '@/assets/brands/googlecloud.svg'
import awsLogo from '@/assets/brands/aws.svg'
import gitLogo from '@/assets/brands/git.svg'
import latexLogo from '@/assets/brands/latex.svg'
import bashLogo from '@/assets/brands/bash.svg'
import cloudflareLogo from '@/assets/brands/cloudflare.svg'
import claudeLogo from '@/assets/brands/claude.svg'
import githubcopilotLogo from '@/assets/brands/githubcopilot.svg'
import comfyuiLogo from '@/assets/brands/comfyui.svg'
import reactRouterLogo from '@/assets/brands/reactrouter.svg'
import viteLogo from '@/assets/brands/vite.svg'
import framerMotionLogo from '@/assets/brands/framermotion.svg'
import pytorchLogo from '@/assets/brands/pytorch.svg'
import onnxLogo from '@/assets/brands/onnx.svg'
import huggingfaceLogo from '@/assets/brands/huggingface.svg'
import scikitlearnLogo from '@/assets/brands/scikitlearn.svg'
import mcpLogo from '@/assets/brands/mcp.svg'
import playwrightLogo from '@/assets/brands/playwright.svg'
import kustoLogo from '@/assets/brands/kusto.png'
import copilotColorLogo from '@/assets/brands/copilot-color.png'

export const skills: SkillCategory[] = [
  {
    title: 'Programming Languages',
    accent: '#4890d8',
    icon: 'Code2',
    items: [
      { label: 'TypeScript', logo: typescriptLogo },
      { label: 'C++', logo: cplusplusLogo },
      { label: 'C#', logo: csharpLogo },
      { label: 'Python', logo: pythonLogo },
      { label: 'Java', logo: javaLogo },
      { label: 'C', logo: cLogo },
    ],
  },
  {
    title: 'Languages',
    accent: '#c084fc',
    icon: 'Languages',
    items: [
      { label: 'Spanish', mono: 'ES' },
      { label: 'English', mono: 'EN' },
      { label: 'Mandarin Chinese (Simplified)', mono: '中文' },
    ],
  },
  {
    title: 'Frontend',
    accent: '#4ec2c7',
    icon: 'Layout',
    items: [
      { label: 'React', logo: reactLogo },
      { label: 'Next.js', logo: nextjsLogo },
      { label: 'React Router', logo: reactRouterLogo },
      { label: 'Vite', logo: viteLogo },
      { label: 'Framer Motion', logo: framerMotionLogo },
      { label: 'Electron', logo: electronLogo },
      { label: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    accent: '#3fb950',
    icon: 'Server',
    items: [
      { label: 'Node.js', logo: nodejsLogo },
      { label: 'ASP.NET Core', logo: dotnetcoreLogo },
      { label: 'Spring Boot', logo: springLogo },
      { label: 'Visual Studio', logo: visualstudioLogo },
    ],
  },
  {
    title: 'Databases',
    accent: '#e3a04e',
    icon: 'Database',
    items: [
      { label: 'SQL Server', logo: sqlserverLogo },
      { label: 'PostgreSQL', logo: postgresqlLogo },
      { label: 'Neo4j', logo: neo4jLogo },
      { label: 'Prisma', logo: prismaLogo },
      { label: 'Supabase', logo: supabaseLogo },
      { label: 'Kusto (KQL)', logo: kustoLogo },
    ],
  },
  {
    title: 'Cloud',
    accent: '#4890d8',
    icon: 'Cloud',
    items: [
      { label: 'Netlify', logo: netlifyLogo },
      { label: 'Render', logo: renderLogo },
      { label: 'Cloudflare', logo: cloudflareLogo },
      { label: 'Azure', logo: azureLogo },
      { label: 'GCP', logo: googlecloudLogo },
      { label: 'AWS', logo: awsLogo },
    ],
  },
  {
    title: 'Machine Learning',
    accent: '#ee4c2c',
    icon: 'BrainCircuit',
    items: [
      { label: 'PyTorch', logo: pytorchLogo },
      { label: 'scikit-learn', logo: scikitlearnLogo },
      { label: 'ONNX', logo: onnxLogo },
      { label: 'Hugging Face', logo: huggingfaceLogo },
      { label: 'BERT', mono: 'BERT' },
    ],
  },
  {
    title: 'AI Tools',
    accent: '#d97757',
    icon: 'Sparkles',
    items: [
      { label: 'Claude CLI', logo: claudeLogo },
      { label: 'Copilot CLI', logo: githubcopilotLogo },
      { label: 'MCP', logo: mcpLogo },
      { label: 'Playwright', logo: playwrightLogo },
      { label: 'WorkIQ', logo: copilotColorLogo },
      { label: 'ComfyUI', logo: comfyuiLogo },
    ],
  },
  {
    title: 'Tools',
    accent: '#9aa7c7',
    icon: 'Wrench',
    items: [
      { label: 'Git', logo: gitLogo },
      { label: 'LaTeX', logo: latexLogo },
      { label: 'Bash', logo: bashLogo },
    ],
  },
]
