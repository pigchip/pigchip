import { motion } from 'motion/react'
import type { SkillCategory } from '@/types'
import { BrandIcon } from '@/components/common/BrandIcon'
import { icons } from '@/lib/icons'
import { staggerItem, hoverLift } from '@/lib/motion'

interface SkillCardProps {
  category: SkillCategory
}

/**
 * Glassy, accent-tinted card mirroring the presentation's StackCard:
 * a header, a row of solid icon tiles, and an optional detail line.
 */
export function SkillCard({ category }: SkillCardProps) {
  const HeaderIcon = icons[category.icon]
  return (
    <motion.div
      variants={staggerItem}
      whileHover={hoverLift}
      className="glass-accent flex h-full flex-col gap-4 rounded-2xl p-6"
      style={{ ['--accent' as string]: category.accent }}
    >
      <div className="flex items-center gap-2.5">
        {HeaderIcon && (
          <HeaderIcon
            size={20}
            style={{ color: category.accent }}
            strokeWidth={2.25}
          />
        )}
        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {category.items.map((item) => (
          <div
            key={item.label}
            className="flex w-16 flex-col items-center gap-1.5"
          >
            <span
              className="icon-tile h-12 w-12 text-white"
              style={{ ['--accent' as string]: category.accent }}
            >
              {item.brand ? (
                <BrandIcon brand={item.brand} size={24} />
              ) : (
                <span
                  className="text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {item.mono}
                </span>
              )}
            </span>
            <span className="text-center text-xs leading-tight text-white/80">
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
