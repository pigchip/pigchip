import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { onAnchorClick, scrollToId } from '@/lib/scroll'
import { SECTIONS } from '@/lib/sections'

/**
 * Sticky, translucent section nav centered at the top. Links smooth-scroll to
 * their section (via CSS `scroll-behavior` + `scroll-padding-top`) and a sliding
 * pill marks the section currently in view, tracked with an IntersectionObserver.
 *
 * On phones the pill bar is also drag-follow: sliding a finger across it scrolls
 * live to whichever pill is under the touch.
 */
export function Nav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id)
  const navRef = useRef<HTMLElement>(null)
  const dragId = useRef<string | null>(null)

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

  // Drag-follow: while a finger slides across the pill bar, scroll live to the
  // section whose pill sits under the touch point.
  const followTouch = (e: React.TouchEvent) => {
    const t = e.touches[0]
    if (!t) return
    const target = document.elementFromPoint(t.clientX, t.clientY)
    const pill = target?.closest<HTMLElement>('[data-nav-id]')
    const id = pill?.dataset.navId
    if (id && id !== dragId.current) {
      dragId.current = id
      setActive(id)
      scrollToId(id)
    }
  }

  return (
    <nav
      ref={navRef}
      onTouchStart={followTouch}
      onTouchMove={followTouch}
      onTouchEnd={() => {
        dragId.current = null
      }}
      onTouchCancel={() => {
        dragId.current = null
      }}
      className="glass fixed left-1/2 top-3 z-[60] flex -translate-x-1/2 touch-none select-none items-center gap-0.5 rounded-full p-0.5 backdrop-blur-xl backdrop-saturate-150 sm:top-6 sm:touch-auto sm:p-1"
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
            data-nav-id={s.id}
            onClick={(e) => onAnchorClick(e, s.id)}
            aria-current={isActive ? 'true' : undefined}
            className={`relative rounded-full px-2 py-1 text-[0.7rem] font-semibold transition-colors sm:px-3 sm:text-sm ${
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
                  className="h-[1.05rem] w-[1.05rem] sm:h-[1.35rem] sm:w-[1.35rem]"
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
