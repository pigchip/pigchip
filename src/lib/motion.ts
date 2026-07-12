import type { Variants, Transition } from 'motion/react'

/** Shared cubic-bezier easing curve used across reveal/slide animations. */
const ease: Transition['ease'] = [0.22, 1, 0.36, 1]

/** Fade + rise, used for most reveal-on-scroll elements. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

/** Parent container that staggers its children into view. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

/** Per-item entrance used inside a staggered container: pops up with a spring. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 420, damping: 24, mass: 0.7 },
  },
}

/**
 * "Pop" reveal: element springs up from a smaller scale with a fade. Used for
 * the hero buttons/tags once the typewriter finishes.
 */
export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 500, damping: 22, mass: 0.7 },
  },
}

/** Parent that staggers `pop` children in one after another. */
export const popGroup: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

/** Shared hover lift for cards. */
export const hoverLift = {
  y: -6,
  transition: { duration: 0.25, ease },
}
