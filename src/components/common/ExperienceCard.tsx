import { useState } from 'react'
import type { ExperienceItem } from '@/types'
import { LogoTile } from '@/components/common/LogoTile'
import { Briefcase, FlaskConical, ChevronDown } from '@/lib/icons'

interface ExperienceCardProps {
  item: ExperienceItem
}

/**
 * Experience/research entry. On mobile the bullet points are collapsed behind a
 * toggle so only the logo, title and summary show by default; on desktop
 * (sm and up) the points are always visible.
 */
export function ExperienceCard({ item }: ExperienceCardProps) {
  const [open, setOpen] = useState(false)
  const Icon = item.kind === 'research' ? FlaskConical : Briefcase

  return (
    <article
      onClick={() => setOpen((v) => !v)}
      className="glass flex h-full cursor-pointer flex-col gap-3 rounded-2xl p-3 sm:cursor-default sm:gap-4 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <LogoTile logo={item.logo} chip={item.logoChip} Icon={Icon} alt={`${item.org} logo`} />
          <div>
            <h3 className="font-serif text-lg font-bold leading-tight text-white">{item.role}</h3>
            <p className="text-sm text-white/70">{item.org}</p>
          </div>
        </div>
      </div>

      <p className="text-left text-sm leading-relaxed text-white/75 sm:text-justify sm:text-[0.95rem]">
        {item.summary}
      </p>

      {item.points.length > 0 && (
        <span
          aria-hidden="true"
          className="flex items-center gap-1 self-start text-xs font-semibold text-[var(--color-ember)] sm:hidden"
        >
          {open ? 'Hide details' : 'Show details'}
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </span>
      )}

      <ul className={`${open ? 'flex' : 'hidden'} flex-col gap-2 sm:flex`}>
        {item.points.map((p) => (
          <li
            key={p}
            className="relative pl-4 text-left text-[0.88rem] leading-relaxed text-white/65 before:absolute before:left-0 before:top-[0.6rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-ember)] sm:text-justify"
          >
            {p}
          </li>
        ))}
      </ul>
    </article>
  )
}
