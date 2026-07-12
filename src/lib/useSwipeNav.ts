import { useEffect } from 'react'
import { SECTIONS } from '@/lib/sections'
import { currentSectionIndex, scrollToId } from '@/lib/scroll'

const MIN_DISTANCE = 60 // px a horizontal swipe must travel to register
const MAX_DURATION = 600 // ms — longer drags are treated as scrolling, not swipes

/**
 * Phone-only left/right swipe navigation between sections. A dominantly
 * horizontal flick (left = next section, right = previous, wrapping around)
 * smooth-scrolls to the neighbouring section. Vertical scrolling is never
 * intercepted: we only act on `touchend`, after the gesture is complete, and
 * only when horizontal travel clearly dominates.
 */
export function useSwipeNav() {
  useEffect(() => {
    let startX = 0
    let startY = 0
    let startT = 0
    let tracking = false

    const onStart = (e: TouchEvent) => {
      if (window.innerWidth >= 640 || e.touches.length !== 1) {
        tracking = false
        return
      }
      // Ignore gestures that begin on the nav pill bar (it has its own follow).
      const target = e.target as Element | null
      if (target?.closest('nav')) {
        tracking = false
        return
      }
      const t = e.touches[0]
      startX = t.clientX
      startY = t.clientY
      startT = Date.now()
      tracking = true
    }

    const onEnd = (e: TouchEvent) => {
      if (!tracking) return
      tracking = false
      const t = e.changedTouches[0]
      if (!t) return
      const dx = t.clientX - startX
      const dy = t.clientY - startY
      if (Date.now() - startT > MAX_DURATION) return
      if (Math.abs(dx) < MIN_DISTANCE) return
      if (Math.abs(dx) < Math.abs(dy) * 1.5) return // not clearly horizontal

      const count = SECTIONS.length
      const current = currentSectionIndex()
      // Swipe left (dx < 0) → next; swipe right (dx > 0) → previous. Wraps.
      const next = dx < 0 ? (current + 1) % count : (current - 1 + count) % count
      scrollToId(SECTIONS[next].id)
    }

    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [])
}
