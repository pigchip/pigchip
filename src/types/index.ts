export type ContactKind = 'mail' | 'phone' | 'globe' | 'github' | 'linkedin'

export interface ContactLink {
  kind: ContactKind
  label: string
  handle: string
  href: string
}

export interface Profile {
  name: string
  company: string
  tagline: string
  location: string
  contacts: ContactLink[]
}

/** A single technology shown as a tile inside a SkillCard. */
export interface SkillItem {
  label: string
  /** Key into the brand registry (data/brands.ts). Omit to render a mono badge. */
  brand?: string
  /** Short fallback monogram when there is no brand logo (e.g. "C#"). */
  mono?: string
}

export interface SkillCategory {
  title: string
  /** Accent colour used for the card tint + border. */
  accent: string
  /** lucide-react icon name for the category header. */
  icon: string
  items: SkillItem[]
  detail?: string
}

export interface Project {
  title: string
  period: string
  description: string
  points: string[]
  /** External live/demo URL. */
  url?: string
  /** Source repository URL. */
  repo?: string
  /** When true, reserve a white-frame media placeholder for a photo/video. */
  hasMedia?: boolean
}

export interface ExperienceItem {
  role: string
  org: string
  period: string
  summary: string
  points: string[]
  kind: 'work' | 'research'
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  points: string[]
}
