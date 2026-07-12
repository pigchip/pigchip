import { motion } from 'motion/react'
import type { SkillCategory } from '@/types'
import { icons } from '@/lib/icons'
import { staggerItem, hoverLift } from '@/lib/motion'
import { useCenterPop } from '@/lib/usePop'

interface SkillCardProps {
  category: SkillCategory
}

/**
 * Glassy, accent-tinted card mirroring the presentation's StackCard:
 * a header, a row of icon tiles, and an optional detail line. Brand logos render
 * transparent in their official colours; text-only entries keep an
 * accent-tinted monogram tile.
 */
export function SkillCard({ category }: SkillCardProps) {
  const HeaderIcon = icons[category.icon]
  // Balance the logo grid so multi-row cards keep an even count per row
  // (e.g. 6 items render as 3 + 3 rather than 5 + 1).
  const count = category.items.length
  const rows = Math.ceil(count / 5)
  const cols = Math.ceil(count / rows)
  const { ref, animate } = useCenterPop<HTMLDivElement>()
  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      initial="hidden"
      animate={animate}
      whileHover={hoverLift}
      className="glass-accent flex h-full flex-col gap-3 rounded-2xl p-3 sm:gap-4 sm:p-6"
      style={{ ['--accent' as string]: category.accent }}
    >
      <div className="flex items-center gap-2.5">
        {HeaderIcon && (
          <HeaderIcon
            size={18}
            style={{ color: category.accent }}
            strokeWidth={2.25}
            className="shrink-0 sm:h-5 sm:w-5"
          />
        )}
        <h3 className="font-serif text-base font-semibold text-white sm:text-lg">{category.title}</h3>
      </div>

      <div
        className="grid flex-1 content-center justify-items-center gap-1.5 sm:gap-3"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {category.items.map((item) => (
          <div
            key={item.label}
            className="flex w-12 flex-col items-center gap-1 sm:w-16 sm:gap-1.5"
          >
            {item.logo ? (
              <span className="flex h-8 w-8 items-center justify-center sm:h-12 sm:w-12">
                <img
                  src={item.logo}
                  alt={`${item.label} logo`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </span>
            ) : (
              <span
                className="icon-tile h-8 w-8 text-white sm:h-12 sm:w-12"
                style={{ ['--accent' as string]: category.accent }}
              >
                <span
                  className="text-xs font-bold text-white sm:text-sm"
                  aria-hidden="true"
                >
                  {item.mono}
                </span>
              </span>
            )}
            <span className="text-center text-[0.62rem] leading-tight text-white/80 sm:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {category.detail && (
        <p className="text-sm leading-snug text-white/70">
          {category.detail}
        </p>
      )}
    </motion.div>
  )
}
