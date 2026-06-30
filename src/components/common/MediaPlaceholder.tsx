interface MediaPlaceholderProps {
  /** Optional caption shown inside the frame. */
  label?: string
  className?: string
  /** Aspect ratio, e.g. '16 / 9' (default) or '4 / 3'. */
  ratio?: string
  /** Compact thumbnail styling (smaller text, thinner border). */
  thumb?: boolean
}

/**
 * White-framed placeholder reserved for a photo or video to be added later.
 * Renders an empty bordered "frame" with a subtle hint.
 */
export function MediaPlaceholder({
  label = 'Photo / video coming soon',
  className = '',
  ratio = '16 / 9',
  thumb = false,
}: MediaPlaceholderProps) {
  return (
    <div
      className={
        'flex items-center justify-center overflow-hidden rounded-lg border border-dashed border-white/35 bg-white/5 text-center font-medium tracking-wide text-white/45 ' +
        (thumb ? 'text-[0.62rem] ' : 'border-2 text-xs ') +
        className
      }
      style={{ aspectRatio: ratio }}
      aria-label={label}
    >
      <span className="px-2">{label}</span>
    </div>
  )
}
