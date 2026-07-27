import type { ContactId, ContactKind } from '@/types'
import faviconLogo from '@/assets/logos/favicon.svg'
import gmailLogo from '@/assets/brands/gmail.svg'
import microsoftLogo from '@/assets/logos/microsoft.svg'

export const profile = {
  name: 'Andrés Miguel Guzmán Cruz',
  company: 'Microsoft',
  contacts: [
    {
      id: 'workEmail',
      kind: 'mail',
      handle: 'aguzmancruz@microsoft.com',
      href: 'mailto:aguzmancruz@microsoft.com',
      logo: microsoftLogo,
      scope: 'internal',
    },
    {
      id: 'personalEmail',
      kind: 'mail',
      handle: 'guzmancruzandresmiguel@gmail.com',
      href: 'mailto:guzmancruzandresmiguel@gmail.com',
      logo: gmailLogo,
      scope: 'personal',
    },
    {
      id: 'workGitHub',
      kind: 'github',
      handle: 'aguzmancruz_microsoft',
      href: 'https://github.com/aguzmancruz_microsoft',
      scope: 'internal',
    },
    {
      id: 'personalGitHub',
      kind: 'github',
      handle: 'pigchip',
      href: 'https://github.com/pigchip',
      scope: 'personal',
    },
    {
      id: 'linkedin',
      kind: 'linkedin',
      handle: 'aguzmancruz',
      href: 'https://linkedin.com/in/aguzmancruz',
      scope: 'personal',
    },
    {
      id: 'website',
      kind: 'globe',
      handle: 'aguzmancruz.com',
      href: 'https://www.aguzmancruz.com',
      logo: faviconLogo,
      scope: 'personal',
    },
  ],
} satisfies {
  name: string
  company: string
  contacts: Array<{
    id: ContactId
    kind: ContactKind
    handle: string
    href: string
    logo?: string
    scope?: 'personal' | 'internal'
  }>
}
