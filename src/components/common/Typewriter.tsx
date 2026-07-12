import { useEffect, useState } from 'react'

/**
 * Renders `text` with a script-style typewriter effect.
 *
 * `cursor` controls the trailing block cursor (▌):
 *  - 'always' keeps it blinking even after typing finishes
 *  - 'typing' shows it only while characters are still appearing
 *  - 'none' hides it entirely
 *
 * When `enabled` is false the full text is shown instantly. Pair two instances
 * (one 'typing', the next 'always', started after the first finishes) to get a
 * single continuous cursor that flows across multiple lines.
 */
export function Typewriter({
  text,
  enabled = true,
  speed = 55,
  startDelay = 0,
  cursor = 'always',
  className,
  textClassName,
  cursorClassName,
}: {
  text: string
  enabled?: boolean
  speed?: number
  startDelay?: number
  cursor?: 'always' | 'typing' | 'none'
  className?: string
  textClassName?: string
  cursorClassName?: string
}) {
  const [count, setCount] = useState(enabled ? 0 : text.length)
  const [started, setStarted] = useState(!enabled)
  const done = count >= text.length

  useEffect(() => {
    if (!enabled) return
    let i = 0
    let interval: ReturnType<typeof setInterval> | undefined
    const startTimer = setTimeout(() => {
      setStarted(true)
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= text.length && interval) clearInterval(interval)
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(startTimer)
      if (interval) clearInterval(interval)
    }
  }, [text, enabled, speed, startDelay])

  const showCursor =
    started && (cursor === 'always' || (cursor === 'typing' && !done))

  return (
    <span className={className}>
      <span className={textClassName}>{text.slice(0, count)}</span>
      {showCursor && (
        <span className={`blink-cursor ${cursorClassName ?? ''}`} aria-hidden="true">
          ▌
        </span>
      )}
    </span>
  )
}
