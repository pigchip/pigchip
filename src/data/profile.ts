import type { Profile } from '@/types'
import faviconLogo from '@/assets/logos/favicon.svg'
import gmailLogo from '@/assets/brands/gmail.svg'
import microsoftLogo from '@/assets/logos/microsoft.svg'

export const profile: Profile = {
  name: 'Andrés Miguel Guzmán Cruz',
  company: 'Microsoft',
  tagline:
    'Software Engineer building fast, maintainable web experiences with React, TypeScript and C#. Computer Systems Engineer and AI enthusiast.',
  location: 'Mexico City, Mexico',
  contacts: [
    {
      kind: 'mail',
      label: 'Email',
      handle: 'aguzmancruz@microsoft.com',
      href: 'mailto:aguzmancruz@microsoft.com',
      logo: microsoftLogo,
      scope: 'internal',
    },
    {
      kind: 'mail',
      label: 'Gmail',
      handle: 'guzmancruzandresmiguel@gmail.com',
      href: 'mailto:guzmancruzandresmiguel@gmail.com',
      logo: gmailLogo,
      scope: 'personal',
    },
    {
      kind: 'github',
      label: 'GitHub',
      handle: 'aguzmancruz_microsoft',
      href: 'https://github.com/aguzmancruz_microsoft',
      scope: 'internal',
    },
    {
      kind: 'github',
      label: 'GitHub',
      handle: 'pigchip',
      href: 'https://github.com/pigchip',
      scope: 'personal',
    },
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      handle: 'aguzmancruz',
      href: 'https://linkedin.com/in/aguzmancruz',
      scope: 'personal',
    },
    {
      kind: 'globe',
      label: 'Website',
      handle: 'aguzmancruz.com',
      href: 'https://www.aguzmancruz.com',
      logo: faviconLogo,
      scope: 'personal',
    },
  ],
}
