import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode, TouchEvent as ReactTouchEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { ChevronLeft, ChevronRight } from '@/lib/icons'
import { ease } from '@/lib/motion'

/** Single source of truth for slide identity, order, and nav labels. */
const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

const slideVariants = {
  enter: (dir: number) => ({ x: dir >= 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: '0%', opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? '-100%' : '100%', opacity: 0 }),
}

/** Slide ids in display order (matches SECTIONS). */
const ORDER: string[] = SECTIONS.map((s) => s.id)

/** Vite base path (BASE_URL); defaults to '/'. */
const BASE = import.meta.env.BASE_URL

/** URL path for a slide: the home slide lives at the base, others append their id. */
function pathForSlide(id: string): string {
  return id === 'hero' ? BASE : `${BASE}${id}`
}

/** Resolve the current slide index from the browser location (defaults to home). */
function indexFromLocation(): number {
  const path = window.location.pathname
  const rest = path.startsWith(BASE) ? path.slice(BASE.length) : path.replace(/^\//, '')
  const seg = rest.split('/')[0]
  if (!seg) return 0
  const i = ORDER.indexOf(seg)
  return i >= 0 ? i : 0
}

/**
 * Full-screen, manually-navigated horizontal slide deck. Each résumé section is
 * a slide; users advance with the prev/next buttons, the dots, or a swipe
 * (touch). A glowing, device-aware hint nudges first-time users and disappears
 * after two interactions. No scrollbar or navbar.
 */
export function Slideshow() {
  const [index, setIndex] = useState(indexFromLocation)
  const [dir, setDir] = useState(1)
  const [interactions, setInteractions] = useState(0)

  const showHint = interactions < 2

  const order = useMemo<string[]>(() => SECTIONS.map((s) => s.id), [])

  const labels = useMemo<Record<string, string>>(
    () => Object.fromEntries(SECTIONS.map((s) => [s.id, s.label])),
    [],
  )

  const registerInteraction = useCallback(() => setInteractions((n) => n + 1), [])

  const goTo = useCallback(
    (id: string) => {
      const target = order.indexOf(id)
      if (target < 0) return
      setIndex((cur) => {
        setDir(target >= cur ? 1 : -1)
        return target
      })
    },
    [order],
  )

  const next = useCallback(() => {
    setDir(1)
    setIndex((cur) => (cur + 1) % order.length)
    registerInteraction()
  }, [order.length, registerInteraction])

  const prev = useCallback(() => {
    setDir(-1)
    setIndex((cur) => (cur - 1 + order.length) % order.length)
    registerInteraction()
  }, [order.length, registerInteraction])

  // Arrow-key navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Keep the URL in sync with the active slide (home at the base, others append
  // their id, e.g. /about). Pushing history lets the browser back/forward
  // buttons move between slides.
  useEffect(() => {
    const path = pathForSlide(order[index])
    if (window.location.pathname !== path) {
      window.history.pushState({ slide: order[index] }, '', path)
    }
  }, [index, order])

  // Respond to back/forward navigation by syncing the slide to the URL.
  useEffect(() => {
    const onPop = () => {
      const target = indexFromLocation()
      setIndex((cur) => {
        setDir(target >= cur ? 1 : -1)
        return target
      })
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Bottom-fade visibility: the scrim only shows while the active slide still
  // has content below the fold. It disappears once the slide is scrolled to the
  // end (or doesn't scroll at all), so the fade reads as "more below".
  const [atEnd, setAtEnd] = useState(true)

  const recomputeAtEnd = useCallback(() => {
    const sc = document.querySelector<HTMLElement>(
      `#${order[index]} .show-scrollbar`,
    )
    if (!sc) {
      setAtEnd(true)
      return
    }
    const max = sc.scrollHeight - sc.clientHeight
    setAtEnd(max <= 1 || sc.scrollTop >= max - 1)
  }, [order, index])

  // Recompute after the active slide mounts / changes and on resize, and track
  // descendant scrolling via the capture phase (scroll events don't bubble).
  useEffect(() => {
    const raf = requestAnimationFrame(recomputeAtEnd)
    const onScroll = () => recomputeAtEnd()
    window.addEventListener('scroll', onScroll, true)
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll, true)
      window.removeEventListener('resize', onScroll)
    }
  }, [recomputeAtEnd])

  const slides = useMemo<Record<string, ReactNode>>(
    () => ({
      hero: <Hero onNavigate={goTo} />,
      about: <About />,
      experience: <Experience />,
      projects: <Projects />,
      skills: <Skills />,
      contact: <Contact />,
    }),
    [goTo],
  )

  // Swipe (touch) navigation: mirrors the prev/next buttons on mobile.
  const touchX = useRef<number | null>(null)
  const onTouchStart = (e: ReactTouchEvent) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: ReactTouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)()
    touchX.current = null
  }

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* The horizontal slides. */}
      <AnimatePresence custom={dir} initial={false}>
        <motion.div
          key={index}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { duration: 0.55, ease }, opacity: { duration: 0.35 } }}
          className="absolute inset-0 flex px-16 pb-4 pt-20 sm:px-24 sm:pb-6 sm:pt-24"
        >
          {slides[order[index]]}
        </motion.div>
      </AnimatePresence>

      {/* Translucent section nav: centered at the top; a sliding pill marks the active. */}
      <nav className="glass fixed left-1/2 top-4 z-[60] flex -translate-x-1/2 items-center gap-0.5 rounded-full p-1 sm:top-6">
        {order.map((s) => {
          const isActive = order[index] === s
          return (
            <button
              key={s}
              type="button"
              aria-label={`Go to ${labels[s]} slide`}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => {
                goTo(s)
                registerInteraction()
              }}
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
              {labels[s]}
            </button>
          )
        })}
      </nav>

      {/* Previous control: full-height lateral bar; arrow reveals on hover. */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="group fixed left-0 top-0 z-50 flex h-full w-14 items-center justify-center text-white/70 transition-colors hover:bg-white/5 hover:text-white sm:w-20"
      >
        <ChevronLeft
          size={30}
          className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      </button>

      {/* Next control: full-height lateral bar; arrow glows while the hint is
          active, otherwise reveals on hover. */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="group fixed right-0 top-0 z-50 flex h-full w-14 items-center justify-center text-white/70 transition-colors hover:bg-white/5 hover:text-white sm:w-20"
      >
        <motion.span
          className={
            showHint
              ? 'opacity-100'
              : 'opacity-0 transition-opacity duration-200 group-hover:opacity-100'
          }
          animate={
            showHint
              ? {
                  filter: [
                    'drop-shadow(0 0 0px rgba(72,144,216,0))',
                    'drop-shadow(0 0 12px rgba(72,144,216,0.9))',
                    'drop-shadow(0 0 0px rgba(72,144,216,0))',
                  ],
                }
              : { filter: 'drop-shadow(0 0 0px rgba(72,144,216,0))' }
          }
          transition={{ duration: 1.6, repeat: showHint ? Infinity : 0, ease: 'easeInOut' }}
        >
          <ChevronRight size={30} />
        </motion.span>
      </button>

      {/* Bottom scrim: fades scrolling content out behind the fixed dots so a
          slide's last row never looks hard-cut. Hidden once the slide is
          scrolled to the end (or doesn't scroll), so it reads as "more below". */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 h-20 bg-gradient-to-t from-[#05060f] via-[#05060f]/85 to-transparent transition-opacity duration-300 ${
          atEnd ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Navigation dots (orientation + manual jump). */}
      <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">
        {order.map((s, i) => (
          <button
            key={s}
            type="button"
            aria-label={`Go to ${s} slide`}
            onClick={() => {
              goTo(s)
              registerInteraction()
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? 'w-7 bg-[var(--color-ember)]'
                : 'w-2 bg-white/30 hover:bg-white/55'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
