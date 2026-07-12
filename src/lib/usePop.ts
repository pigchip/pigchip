import { useEffect, useRef, useState } from 'react'

/** Nav bar bottom edge, in px: the line above which elements are hidden. */
const NAV_LINE = 88

/**
 * Drives a "pop" reveal tied to the element's position in the viewport. The
 * element is shown once it has entered from the bottom and stays shown until
 * *any* part of it crosses the nav line at the top — i.e. it pops out the
 * instant its top edge reaches {@link NAV_LINE}. Symmetric: scrolling back up
 * re-reveals it once its top clears the line again. Returns a ref plus the
 * variant label to feed a motion element's `animate` prop (pair with
 * `initial="hidden"` and the `staggerItem`/`pop` variants).
 */
export function useCenterPop<T extends Element = HTMLElement>() {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0

    const compute = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Entered from the bottom (top edge within ~95% of the viewport height)…
      const entered = rect.top <= vh * 0.95
      // …but no part has crossed the nav line yet (top edge still below it).
      const clearOfNav = rect.top > NAV_LINE
      setShown(entered && clearOfNav)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return { ref, shown, animate: (shown ? 'show' : 'hidden') as 'show' | 'hidden' }
}
