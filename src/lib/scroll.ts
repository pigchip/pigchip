/**
 * Smooth-scroll to a section by id. Sections already include top padding
 * (`py-24` ≈ 96px) that clears the sticky nav, so we align the section's top to
 * the viewport top without an extra offset. Computing the target manually is
 * more reliable than `scrollIntoView`, which doesn't honor `scroll-padding-top`
 * across all browsers.
 */
function scrollToId(id: string) {
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
