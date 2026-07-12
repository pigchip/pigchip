import { SECTIONS } from '@/lib/sections'

/**
 * Smooth-scroll to a section by id. Sections already include top padding
 * (`py-24` ≈ 96px) that clears the sticky nav, so we align the section's top to
 * the viewport top without an extra offset. Computing the target manually is
 * more reliable than `scrollIntoView`, which doesn't honor `scroll-padding-top`
 * across all browsers.
 */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const isFirst = id === 'hero'
  const top = isFirst ? 0 : el.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top, behavior: 'smooth' })
  window.history.replaceState(
    null,
    '',
    isFirst ? window.location.pathname : `#${id}`,
  )
}

/** Anchor click handler that smooth-scrolls to `#id` instead of jumping. */
export function onAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
) {
  // Respect modifier clicks (open in new tab, etc.).
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  e.preventDefault()
  scrollToId(id)
}

/**
 * Index (into {@link SECTIONS}) of the section whose box currently covers the
 * vertical center of the viewport. Falls back to the nearest section above the
 * center. Used to compute swipe neighbors.
 */
export function currentSectionIndex(): number {
  const center = window.innerHeight / 2
  let best = 0
  let bestDist = Infinity
  SECTIONS.forEach((s, i) => {
    const el = document.getElementById(s.id)
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top <= center && rect.bottom >= center) {
      best = i
      bestDist = 0
      return
    }
    const dist = Math.min(Math.abs(rect.top - center), Math.abs(rect.bottom - center))
    if (bestDist !== 0 && dist < bestDist) {
      bestDist = dist
      best = i
    }
  })
  return best
}
