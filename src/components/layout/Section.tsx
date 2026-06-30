import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { icons } from '@/lib/icons'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

interface SectionProps {
  id: string
  title: string
  /** Optional lucide icon name shown beside the title. */
  icon?: string
  eyebrow?: string
  children: ReactNode
  className?: string
}

/**
 * Reveal-on-scroll section wrapper. Provides the shared heading and a
 * staggered container so children animate in sequence.
 */
export function Section({
  id,
  title,
  icon,
  eyebrow,
  children,
  className = '',
}: SectionProps) {
  const Icon = icon ? icons[icon] : undefined
  return (
    <motion.section
      id={id}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mx-auto flex h-full w-full max-w-6xl flex-col ${className}`}
    >
      <div className="show-scrollbar flex min-h-0 flex-1 flex-col overflow-y-auto pr-1">
        <motion.header variants={fadeUp} className="mb-4 shrink-0">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ember)] text-legible-strong">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-1 flex items-center gap-3 text-3xl font-extrabold tracking-tight text-white text-legible sm:text-4xl">
            {Icon && <Icon size={28} className="text-[var(--color-ember)]" />}
            {title}
          </h2>
        </motion.header>
        <div className="flex w-full flex-1 flex-col [justify-content:safe_center]">
          {children}
        </div>
        {/* Trailing spacer: keeps the last line above the bottom scrim/dots at
            scroll-end. A real child is used (a scroll container's own
            padding-bottom is omitted from scrollHeight in Chrome). */}
        <div aria-hidden="true" className="h-10 w-full shrink-0" />
      </div>
    </motion.section>
  )
}
