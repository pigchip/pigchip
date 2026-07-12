import type { ReactNode } from 'react'
import { motion, useInView } from 'motion/react'
import { staggerItem } from '@/lib/motion'
import { useCenterPop } from '@/lib/usePop'

interface TimelineProps {
  children: ReactNode
  className?: string
}

/**
 * LinkedIn-style vertical timeline: a centered, constrained column with a
 * single vertical rail. Children are {@link TimelineItem}s, each pinned to the
 * rail by an accent node dot. Reveal animations are inherited from an ancestor
 * staggered container (see {@link Section}).
 */
export function Timeline({ children, className = '' }: TimelineProps) {
  return (
    <div className={`relative mx-auto w-full max-w-2xl ${className}`}>
      {/* Vertical rail: a soft gradient that fades at both ends, aligned with
          the node dots (left-4 = center of the pl-8 gutter). */}
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-4 top-2 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
      />
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  )
}

interface TimelineItemProps {
  children: ReactNode
  /** Accent color for the node dot (defaults to the ember accent). */
  accent?: string
  /** Optional date label rendered next to the node dot, above the content. */
  date?: string
}

/**
 * A single entry on the {@link Timeline}: a glowing accent node pinned to the
 * rail, an optional accent date pill beside it, plus the entry content offset
 * to the right of the rail. When the entry is the viewport's current focus
 * (centered vertically), its node lights up and pulses.
 */
export function TimelineItem({ children, accent, date }: TimelineItemProps) {
  const color = accent ?? 'var(--color-ember)'
  const { ref, animate } = useCenterPop<HTMLDivElement>()
  // Active while the item sits within the middle ~20% band of the viewport.
  const active = useInView(ref, { margin: '-40% 0px -40% 0px' })

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      initial="hidden"
      animate={animate}
      className="group/timeline relative pl-10 sm:pl-12"
    >
      {/* Lit rail segment: overlays the dim base rail and glows accent while
          the entry is in focus. Starts just below the node (so neither the
          line nor its glow reads above the node) and extends past the bottom
          to bridge the gap to the next node as one continuous glow. */}
      <motion.span
        aria-hidden="true"
        className="absolute -bottom-8 left-4 top-5 z-0 w-0.5 -translate-x-1/2 rounded-full"
        animate={{
          backgroundColor: active ? 'rgba(72,144,216,0.9)' : 'rgba(72,144,216,0)',
          boxShadow: active
            ? '0 0 10px rgba(72,144,216,0.6)'
            : '0 0 0px rgba(72,144,216,0)',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      {/* Node: pulsing halo that brightens while the entry is in focus. */}
      <motion.span
        aria-hidden="true"
        className="absolute left-4 top-1 z-10 h-4 w-4 -translate-x-1/2 rounded-full blur-[4px]"
        style={{ backgroundColor: color }}
        animate={
          active
            ? { opacity: [0.55, 1, 0.55], scale: [1, 1.7, 1] }
            : { opacity: 0.35, scale: 1 }
        }
        transition={
          active
            ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.4 }
        }
      />
      {/* Core dot: bright white core encircled by an accent glow ring that
          intensifies and scales up while the entry is in focus. */}
      <motion.span
        aria-hidden="true"
        className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-white"
        animate={{
          scale: active ? 1.3 : 1,
          boxShadow: active
            ? `0 0 0 3px ${color}, 0 0 18px 3px ${color}`
            : `0 0 0 2px ${color}, 0 0 8px ${color}`,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
      {date && (
        <motion.p
          className="mb-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider text-white/90"
          animate={{
            borderColor: active
              ? 'rgba(72,144,216,1)'
              : 'rgba(72,144,216,0.5)',
            backgroundColor: active
              ? 'rgba(72,144,216,0.35)'
              : 'rgba(72,144,216,0.2)',
            boxShadow: active
              ? '0 2px 14px rgba(72,144,216,0.45)'
              : '0 1px 8px rgba(0,0,0,0.35)',
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {date}
        </motion.p>
      )}
      {/* Content: the card lifts and gains an accent glow while in focus; the
          glow rides along with the hover lift so it never detaches behind. */}
      <motion.div
        className="rounded-2xl"
        whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
        animate={{
          boxShadow: active
            ? '0 0 0 1px rgba(72,144,216,0.55), 0 10px 34px rgba(72,144,216,0.28)'
            : '0 0 0 1px rgba(72,144,216,0), 0 10px 34px rgba(72,144,216,0)',
          y: active ? -2 : 0,
        }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
