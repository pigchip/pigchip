export type ContactKind = 'mail' | 'phone' | 'globe' | 'github' | 'linkedin'

export interface ContactLink {
  kind: ContactKind
  label: string
  handle: string
  href: string
  /** Optional imported logo image URL, overriding the default kind icon. */
  logo?: string
  /** Whether this contact is a personal account or an internal (Microsoft) one. */
  scope?: 'personal' | 'internal'
}

export interface Profile {
  name: string
  company: string
  tagline: string
  location: string
  contacts: ContactLink[]
}

/** A single technology shown as a tile inside a SkillCard. */
interface SkillItem {
  label: string
  /** Key into the brand registry (data/brands.ts). Omit to render a mono badge. */
  brand?: string
  /** Imported colored logo image URL (rendered on a white chip). */
  logo?: string
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
  /** lucide-react icon name used as the project's main logo. */
  icon: string
  /** Key tech-stack skills, shown as a subtitle under the title. */
  stack?: string[]
  /** Imported image URL for the project's real logo (takes precedence over `icon`). */
  logo?: string
  /** Invert a monochrome logo so it reads on the transparent logo tile. */
  logoInvert?: boolean
  /** Render the logo on a white contrasting chip (colored institutional marks). */
  logoChip?: boolean
  /** Whether this is a work (Microsoft) or personal project. */
  scope?: 'personal' | 'internal'
  /** External live/demo URL. */
  url?: string
  /** Source repository URL. */
  repo?: string
  /** Multiple labelled links (e.g. separate frontend/backend repos). */
  links?: { label: string; href: string }[]
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
  /** Imported image URL for the institution's logo (falls back to a lucide icon). */
  logo?: string
  /** Render the logo on a white contrasting chip (colored institutional marks). */
  logoChip?: boolean
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  points: string[]
  /** Imported image URL for the school's logo (falls back to a lucide icon). */
  logo?: string
  /** Render the logo on a white contrasting chip (colored institutional marks). */
  logoChip?: boolean
}
