import { motion } from 'motion/react'
import type { Project } from '@/types'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { ArrowUpRight, ExternalLink, X } from '@/lib/icons'
import { staggerItem } from '@/lib/motion'

interface ProjectCardProps {
  project: Project
  /** Open the full-slide expanded view for this project. */
  onExpand: () => void
}

/**
 * Collapsed card showing title + main description. On hover it grows
 * *downwards* (transform-origin top, so it never covers the section header)
 * and reveals the period, thumbnail, and bullets. Clicking opens the
 * full-slide {@link ExpandedProject} view.
 */
export function ProjectCard({ project, onExpand }: ProjectCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      onClick={onExpand}
      whileHover={{ scale: 1.12, zIndex: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{ transformOrigin: 'center top' }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onExpand()
        }
      }}
      className="group glass relative flex h-full cursor-pointer flex-col gap-3 rounded-2xl p-6 hover:border-white/30"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="flex items-center gap-1.5 text-lg font-bold leading-tight text-white">
            {project.title}
            <ArrowUpRight
              size={18}
              className="shrink-0 text-[var(--color-ember)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </h3>
          <span className="max-h-0 shrink-0 overflow-hidden rounded-full bg-white/8 px-2 text-xs font-semibold text-white/70 opacity-0 transition-all duration-300 group-hover:max-h-6 group-hover:py-0.5 group-hover:opacity-100">
            {project.period}
          </span>
        </div>

        <p className="text-[0.95rem] leading-relaxed text-white/75">
          {project.description}
        </p>
      </div>

      {/* Details: collapsed (0fr) until hover, then expand to content height. */}
      <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:mt-1 group-hover:grid-rows-[1fr] group-hover:opacity-100">
        <div className="overflow-hidden">
          <div className="flex items-start gap-3">
            {project.hasMedia && (
              <MediaPlaceholder
                thumb
                ratio="16 / 9"
                className="mt-0.5 w-20 shrink-0"
              />
            )}
            <ul className="flex flex-1 flex-col gap-1">
              {project.points.map((p) => (
                <li
                  key={p}
                  className="relative pl-3.5 text-[0.72rem] leading-snug text-white/65 before:absolute before:left-0 before:top-[0.45rem] before:h-1 before:w-1 before:rounded-full before:bg-[var(--color-ember)]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

/**
 * Full-slide expanded view of a project: fills the Projects content area
 * (below the header), showing every detail plus a link button and a close
 * control. Rendered inside a `relative` container by the Projects section.
 */
export function ExpandedProject({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const href = project.url ?? project.repo
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      className="glass-accent no-scrollbar absolute inset-0 z-40 flex flex-col gap-4 overflow-auto rounded-2xl p-6 sm:p-8"
      style={{ ['--accent' as string]: '#4890d8' }}
    >
      <button
        type="button"
        aria-label="Close project"
        onClick={onClose}
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
      >
        <X size={18} />
      </button>

      <div className="flex flex-wrap items-center gap-3 pr-10">
        <h3 className="text-xl font-extrabold text-white sm:text-2xl">{project.title}</h3>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">
          {project.period}
        </span>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        {project.hasMedia && (
          <MediaPlaceholder
            ratio="16 / 9"
            className="w-full shrink-0 sm:w-72"
          />
        )}
        <div className="flex flex-col gap-3">
          <p className="text-sm leading-relaxed text-white/80">
            {project.description}
          </p>
          <ul className="flex flex-col gap-2">
            {project.points.map((p) => (
              <li
                key={p}
                className="relative pl-4 text-[0.85rem] leading-relaxed text-white/70 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-ember)]"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-br from-[#4890d8] to-[#2d6793] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-900/40 transition hover:brightness-110"
        >
          <ExternalLink size={15} />
          {project.url ? 'Visit site' : 'View repository'}
        </a>
      )}
    </motion.div>
  )
}
