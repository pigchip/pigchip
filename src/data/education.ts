import type { EducationItem } from '@/types'
import escomLogo from '@/assets/logos/escom.png'
import chandigarhLogo from '@/assets/logos/chandigarh.png'

export const education: EducationItem[] = [
  {
    school: 'Escuela Superior de Cómputo, Instituto Politécnico Nacional',
    degree: 'B.S. in Computer Systems Engineering',
    period: 'Graduated July 2025',
    logo: escomLogo,
    logoChip: true,
    points: [
      'Overall average: 9.0 / 10.0.',
      'Member of the Algorithm Club.',
    ],
  },
  {
    school: 'Chandigarh University',
    degree: 'B.S. in Computer Science Engineering (IoT)',
    period: 'February 2023 to June 2023',
    logo: chandigarhLogo,
    points: [
      'Semester exchange in Punjab, India.',
      'Built artificial vision projects using a Raspberry Pi 4.',
    ],
  },
]
