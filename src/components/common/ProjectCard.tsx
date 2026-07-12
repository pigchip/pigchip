import type { Project } from '@/types'
import { icons, ExternalLink } from '@/lib/icons'
import { LogoTile } from '@/components/common/LogoTile'

interface ProjectCardProps {
  project: Project
}

/**
 * Static project card: the project's real logo (or an accent lucide icon tile)
 * alongside the title, a muted period, and the main description. When the
 * project has a link it renders as an anchor that opens in a new tab.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const Logo = icons[project.icon]
  const links = project.links ?? []
  const singleLink = project.url ?? (links.length === 0 ? project.repo : undefined)
  const clickable = Boolean(singleLink)

  const body = (
    <>
      <div className="flex items-start gap-3">
        <LogoTile
          logo={project.logo}
          invert={project.logoInvert}
          chip={project.logoChip}
          Icon={Logo}
          alt={`${project.title} logo`}
        />
        <div className="flex flex-col">
          <h3 className="font-serif text-lg font-bold leading-tight text-white">
            {project.title}
          </h3>
          {project.stack && (
            <span className="mt-0.5 text-xs font-medium text-[var(--color-ember)]">
              {project.stack.join(' · ')}
            </span>
          )}
        </div>
        {(project.scope || clickable) && (
          <div className="ml-auto flex shrink-0 items-center gap-2">
            {project.scope && (
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1"
                style={
                  project.scope === 'internal'
                    ? {
                        color: '#7cb3ec',
                        backgroundColor: 'rgba(72,144,216,0.12)',
                        ['--tw-ring-color' as string]: 'rgba(72,144,216,0.35)',
                      }
                    : {
                        color: '#8fd6a0',
                        backgroundColor: 'rgba(63,185,80,0.12)',
                        ['--tw-ring-color' as string]: 'rgba(63,185,80,0.35)',
                      }
                }
              >
                {project.scope === 'internal' ? 'Work' : 'Personal'}
              </span>
            )}
            {clickable && (
              <ExternalLink
                size={16}
                aria-hidden="true"
                className="text-white/35 transition-colors group-hover:text-[var(--color-ember)]"
              />
            )}
          </div>
        )}
      </div>

      <p className="text-justify text-[0.95rem] leading-relaxed text-white/75">
        {project.description}
      </p>

      {links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/75 transition-colors hover:bg-white/15 hover:text-white"
            >
              <ExternalLink size={13} aria-hidden="true" />
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )

  const className = 'glass group flex h-full flex-col gap-3 rounded-2xl p-6'

  if (singleLink) {
    return (
      <a
        href={singleLink}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {body}
      </a>
    )
  }

  return (
    <article className={className}>
      {body}
    </article>
  )
}
