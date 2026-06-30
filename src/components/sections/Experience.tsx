import { motion } from 'motion/react'
import { Section } from '@/components/layout/Section'
import { experience } from '@/data/experience'
import { Briefcase, FlaskConical } from '@/lib/icons'
import { staggerItem } from '@/lib/motion'

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience & Research"
      icon="Briefcase"
      eyebrow="Where I've worked"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {experience.map((item) => {
          const Icon = item.kind === 'research' ? FlaskConical : Briefcase
          return (
            <motion.article
              key={`${item.org}-${item.period}`}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="glass flex h-full flex-col gap-4 rounded-2xl p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span
                    className="icon-tile h-11 w-11 text-[var(--color-ember)]"
                    style={{ ['--accent' as string]: '#4890d8' }}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-white">{item.role}</h3>
                    <p className="text-sm text-white/70">{item.org}</p>
                  </div>
                </div>
                <span className="rounded-full bg-white/8 px-2.5 py-1 text-xs font-semibold text-white/70">
                  {item.period}
                </span>
              </div>

              <p className="text-[0.95rem] leading-relaxed text-white/75">{item.summary}</p>

              <ul className="flex flex-col gap-2">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="relative pl-4 text-[0.88rem] leading-relaxed text-white/65 before:absolute before:left-0 before:top-[0.6rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-ember)]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
