import microsoftLogo from '@/assets/logos/microsoft.svg'
import ipnLogo from '@/assets/logos/ipn.png'
import banxicoLogo from '@/assets/logos/banxico.svg'

export const experience = [
  {
    id: 'microsoftEngineer',
    kind: 'work',
    logo: microsoftLogo,
  },
  {
    id: 'ipnResearch',
    kind: 'research',
    logo: ipnLogo,
    logoChip: true,
  },
  {
    id: 'banxicoIntern',
    kind: 'work',
    logo: banxicoLogo,
    logoChip: true,
  },
  {
    id: 'microsoftIntern',
    kind: 'work',
    logo: microsoftLogo,
  },
] as const
