import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { icons } from '@/lib/icons'
import { staggerItem } from '@/lib/motion'
import { useCenterPop } from '@/lib/usePop'

interface SectionProps {
  id: string
  title: string
  /** Optional lucide icon name shown beside the title. */
  icon?: string
  eyebrow?: string
  children: ReactNode
  className?: string
  /** Extra classes for the outer <section> (e.g. min-height / centering). */
  sectionClassName?: string
}

/**
 * Full-viewport, scroll-snapping section. Provides the shared heading and a
 * staggered container so children reveal on scroll. Each section fills at least
 * the viewport height and snaps to the top of the scrollport.
 */
export function Section({
  id,
  title,
  icon,
  eyebrow,
  children,
  className = '',
  sectionClassName = '',
}: SectionProps) {
  const Icon = icon ? icons[icon] : undefined
  const { ref: headerRef, animate: headerAnim } = useCenterPop<HTMLElement>()
  return (
    <section
      id={id}
      className={`w-full px-5 pb-14 pt-20 sm:px-10 sm:py-24 ${sectionClassName}`}
    >
      <div className={`mx-auto flex w-full max-w-6xl flex-col ${className}`}>
        <motion.header
          ref={headerRef}
          variants={staggerItem}
          initial="hidden"
          animate={headerAnim}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col gap-2.5">
            {eyebrow && (
              <span className="flex items-center gap-2.5">
                <span className="h-px w-8 bg-gradient-to-r from-[var(--color-flame)] to-transparent" />
                <span className="text-gradient-animated text-[0.7rem] font-semibold uppercase tracking-[0.22em] sm:text-xs">
                  {eyebrow}
                </span>
              </span>
            )}
            <h2 className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight sm:gap-3.5 sm:text-4xl">
              {Icon && (
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border backdrop-blur-xl backdrop-saturate-150 sm:h-12 sm:w-12"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(72,144,216,0.32), rgba(45,103,147,0.24))',
                    borderColor: 'rgba(72,144,216,0.45)',
                  }}
                >
                  <Icon size={26} className="text-white" />
                </span>
              )}
              <span className="title-contrast font-serif font-semibold leading-[1.2] tracking-normal text-white [padding-bottom:0.12em]">
                {title}
              </span>
            </h2>
          </div>
        </motion.header>
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  )
}
