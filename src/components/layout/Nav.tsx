import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { currentSectionIndex, onAnchorClick, scrollToId } from '@/lib/scroll'
import { SECTIONS } from '@/lib/sections'
import { useLocale } from '@/i18n/useLocale'

/**
 * Sticky, translucent section nav centered at the top. Links smooth-scroll to
 * their section (via CSS `scroll-behavior` + `scroll-padding-top`) and a sliding
 * pill marks the section currently in view, resolved from scroll geometry.
 *
 * On phones the pill bar is also drag-follow: sliding a finger across it scrolls
 * live to whichever pill is under the touch.
 */
export function Nav() {
  const { locale, messages } = useLocale()
  const [active, setActive] = useState<string>(SECTIONS[0].id)
  const navRef = useRef<HTMLElement>(null)
  const dragId = useRef<string | null>(null)

  // The active section is derived from geometry on every scroll frame rather
  // than from IntersectionObserver callbacks. An observer only fires when a
  // threshold is *crossed*, so scrolling back to the very top could leave the
  // hash stuck on the section that won the last crossing (e.g. `#about`) with
  // no further callback to correct it once `hero` settled into view.
  useEffect(() => {
    let frame = 0

    const resolveActive = () => {
      frame = 0
      const doc = document.documentElement
      const atTop = window.scrollY <= 2
      const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 2

      let id: string
      if (atTop) {
        id = SECTIONS[0].id
      } else if (atBottom) {
        id = SECTIONS[SECTIONS.length - 1].id
      } else {
        id = SECTIONS[currentSectionIndex()].id
      }

      setActive(id)

      const isFirst = id === SECTIONS[0].id
      const nextHash = isFirst ? '' : `#${id}`
      if (window.location.hash !== nextHash) {
        window.history.replaceState(
          null,
          '',
          isFirst ? window.location.pathname + window.location.search : nextHash,
        )
      }
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(resolveActive)
    }

    resolveActive()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    // Switching locale (or any late reflow, e.g. web fonts settling) changes
    // section heights without firing scroll or resize, which would otherwise
    // leave the active pill and hash pointing at the pre-reflow section.
    const resizeObserver = new ResizeObserver(schedule)
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) resizeObserver.observe(el)
    })

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      resizeObserver.disconnect()
    }
  }, [])

  // Keep the active pill centred while the bar overflows horizontally. Merely
  // nudging it just inside the edge leaves it flush against the border, which
  // hides its neighbours (e.g. the "AG" logo) and makes the bar look stuck when
  // the pill is technically visible but the items past it are still cut off.
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const centerActivePill = () => {
      const pill = nav.querySelector<HTMLElement>(`[data-nav-id="${active}"]`)
      const maxScroll = nav.scrollWidth - nav.clientWidth
      if (!pill || maxScroll <= 0) return

      const navRect = nav.getBoundingClientRect()
      const pillRect = pill.getBoundingClientRect()
      const pillCenter = pillRect.left - navRect.left + nav.scrollLeft + pillRect.width / 2
      const left = Math.max(0, Math.min(pillCenter - nav.clientWidth / 2, maxScroll))
      if (Math.abs(left - nav.scrollLeft) < 1) return

      nav.scrollTo({ left, behavior: 'smooth' })
    }

    const frame = requestAnimationFrame(centerActivePill)
    window.addEventListener('resize', centerActivePill)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', centerActivePill)
    }
  }, [active, locale])

  // Drag-follow: while a finger slides across the pill bar, scroll live to the
  // section whose pill sits under the touch point.
  const followTouch = (e: React.TouchEvent) => {
    const nav = navRef.current
    if (nav && nav.scrollWidth > nav.clientWidth) return

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
      className="glass flex w-max max-w-[calc(100vw-3.75rem)] min-w-0 flex-none touch-pan-x select-none items-center gap-0.5 overflow-x-auto rounded-full p-0.5 backdrop-blur-xl backdrop-saturate-150 sm:touch-auto sm:overflow-visible sm:p-1"
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
            className={`relative shrink-0 rounded-full px-1.5 py-1 text-[0.62rem] font-semibold transition-colors min-[380px]:px-2 min-[380px]:text-[0.7rem] sm:px-3 sm:text-sm ${
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
                  aria-label={messages.nav.hero}
                  className="h-[1.05rem] w-[1.05rem] sm:h-5 sm:w-5"
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
              <span>{messages.nav[s.id]}</span>
            )}
          </a>
        )
      })}
    </nav>
  )
}
