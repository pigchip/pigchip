import type { Profile } from '@/types'

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
    },
    {
      kind: 'globe',
      label: 'Website',
      handle: 'aguzmancruz.com',
      href: 'https://www.aguzmancruz.com',
    },
    {
      kind: 'github',
      label: 'GitHub',
      handle: 'pigchip',
      href: 'https://github.com/pigchip',
    },
    {
      kind: 'github',
      label: 'GitHub',
      handle: 'aguzmancruz_microsoft',
      href: 'https://github.com/aguzmancruz_microsoft',
    },
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      handle: 'aguzmancruz',
      href: 'https://linkedin.com/in/aguzmancruz',
    },
  ],
}
