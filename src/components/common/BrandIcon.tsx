import { brands } from '@/data/brands'

interface BrandIconProps {
  /** Key into the brand registry. */
  brand: string
  size?: number
  className?: string
}

/**
 * Renders a brand/tech logo (simple-icons path) as a solid, single-colour SVG.
 * Icons are intentionally solid (full opacity); the containers are translucent.
 */
export function BrandIcon({ brand, size = 22, className }: BrandIconProps) {
  const b = brands[brand]
  if (!b) return null
  return (
    <svg
      role="img"
      aria-label={b.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d={b.path} />
    </svg>
  )
}
