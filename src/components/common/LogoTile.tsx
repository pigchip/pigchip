import type { LucideIcon } from '@/lib/icons'

interface LogoTileProps {
  /** Imported image URL for a real logo. Falls back to {@link Icon} when absent. */
  logo?: string
  /** Invert a monochrome (dark-on-transparent) logo so it reads on the dark tile. */
  invert?: boolean
  /** Render the logo on a white contrasting chip (for colored institutional marks). */
  chip?: boolean
  /** Fallback lucide icon rendered inside an accent tile when there is no logo. */
  Icon?: LucideIcon
  /** Accessible label for the logo image. */
  alt: string
}

/**
 * Square brand tile shared by project and experience cards. Real logos render
 * transparent on the dark glass; colored institutional marks can opt into a
 * white contrasting chip via {@link chip}. Otherwise an accent-tinted lucide
 * icon is shown.
 */
export function LogoTile({ logo, invert, chip, Icon, alt }: LogoTileProps) {
  if (logo) {
    return (
      <span
        className={
          chip
            ? 'flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.6rem] bg-white p-1 ring-1 ring-black/5 sm:h-11 sm:w-11 sm:p-1.5'
            : 'flex h-9 w-9 shrink-0 items-center justify-center sm:h-11 sm:w-11'
        }
      >
        <img
          src={logo}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-contain${invert ? ' [filter:invert(1)]' : ''}`}
        />
      </span>
    )
  }
  return (
    <span
      className="icon-tile h-9 w-9 shrink-0 text-[var(--color-ember)] sm:h-11 sm:w-11"
      style={{ ['--accent' as string]: '#4890d8' }}
    >
      {Icon && <Icon size={20} />}
    </span>
  )
}
