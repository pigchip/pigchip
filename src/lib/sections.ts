/** Single source of truth for section identity and order. */
export const SECTIONS = [
  { id: 'hero' },
  { id: 'about' },
  { id: 'experience' },
  { id: 'projects' },
  { id: 'skills' },
  { id: 'contact' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']
