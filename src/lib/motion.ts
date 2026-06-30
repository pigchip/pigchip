import type { Variants, Transition } from 'motion/react'

/** Shared cubic-bezier easing curve used across reveal/slide animations. */
export const ease: Transition['ease'] = [0.22, 1, 0.36, 1]

/** Fade + rise, used for most reveal-on-scroll elements. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

/** Slightly larger fade for hero / headings. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
}

/** Parent container that staggers its children into view. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

/** Per-item entrance used inside a staggered container. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
}

/** Shared hover lift for cards. */
export const hoverLift = {
  y: -6,
  transition: { duration: 0.25, ease },
}

/** Common viewport config for whileInView. */
export const viewportOnce = { once: true, margin: '-80px' } as const
