import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { onAnchorClick } from '@/lib/scroll'

/** Single source of truth for section identity, order, and nav labels. */
const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

/**
 * Sticky, translucent section nav centered at the top. Links smooth-scroll to
 * their section (via CSS `scroll-behavior` + `scroll-padding-top`) and a sliding
 * pill marks the section currently in view, tracked with an IntersectionObserver.
 */
export function Nav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id)

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el != null,
    )
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the most-visible section currently intersecting the viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          const id = visible[0].target.id
          setActive(id)
          const hash = id === SECTIONS[0].id ? ' ' : `#${id}`
          if (window.location.hash !== hash) {
            window.history.replaceState(null, '', id === SECTIONS[0].id ? window.location.pathname : hash)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="glass fixed left-1/2 top-4 z-[60] flex -translate-x-1/2 items-center gap-0.5 rounded-full p-1 backdrop-blur-xl backdrop-saturate-150 sm:top-6"
      style={{
        background:
          'linear-gradient(135deg, rgba(72,144,216,0.32), rgba(45,103,147,0.24))',
        borderColor: 'rgba(72,144,216,0.45)',
      }}
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => onAnchorClick(e, s.id)}
            aria-current={isActive ? 'true' : undefined}
            className={`relative rounded-full px-2.5 py-1 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
              isActive ? 'text-white' : 'text-white/55 hover:text-white/90'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-full border border-[var(--color-ember)]/50 bg-[var(--color-ember)]/20"
              />
            )}
            {s.id === 'hero' ? (
              <span className="flex items-center justify-center">
                <svg
                  viewBox="0 0 512 512"
                  role="img"
                  aria-label="Home"
                  className="h-[1.35rem] w-[1.35rem]"
                >
                  <rect width="512" height="512" rx="64" fill="#000000" />
                  <text
                    x="486"
                    y="474"
                    textAnchor="end"
                    fontFamily="'Open Sans', 'Segoe UI', Helvetica, Arial, sans-serif"
                    fontWeight="800"
                    fontSize="248"
                    letterSpacing="-8"
                    fill="#ffffff"
                  >
                    AG
                  </text>
                </svg>
              </span>
            ) : (
              s.label
            )}
          </a>
        )
      })}
    </nav>
  )
}
