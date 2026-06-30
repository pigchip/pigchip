import { motion } from 'motion/react'
import { Section } from '@/components/layout/Section'
import { education } from '@/data/education'
import { GraduationCap } from '@/lib/icons'
import { fadeUp } from '@/lib/motion'

export function About() {
  return (
    <Section id="about" title="About me" icon="Sparkles" eyebrow="Who I am">
      <motion.div
        variants={fadeUp}
        className="glass grid gap-x-10 gap-y-6 rounded-2xl p-6 md:grid-cols-2 md:p-8"
      >
        <div className="flex flex-col justify-center gap-6">
          <p className="text-[1.05rem] leading-relaxed text-white/80">
            I'm a Software Engineer at Microsoft focused on building fast,
            maintainable web experiences with React, TypeScript and C#. I enjoy
            turning ambiguous problems into well-specified deliverables.
          </p>

          <blockquote className="relative rounded-xl border-l-4 border-[var(--color-ember)] bg-white/[0.04] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ember)]">
              My goal
            </span>
            <p className="mt-2 text-[1.05rem] font-medium italic leading-relaxed text-white/90">
              “I want to contribute to a future where cutting-edge technology is
              widely accessible, democratized, and promotes the socioeconomic
              growth of marginalized groups.”
            </p>
          </blockquote>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <GraduationCap size={18} className="text-[var(--color-ember)]" />
            Education
          </div>
          <ul className="flex flex-col gap-5">
            {education.map((e) => (
              <li key={e.school} className="border-l-2 border-[var(--color-ember)]/50 pl-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="text-[0.95rem] font-semibold text-white">{e.school}</span>
                  <span className="text-xs font-medium text-white/55">{e.period}</span>
                </div>
                <p className="text-[0.85rem] text-white/70">{e.degree}</p>
                <ul className="mt-1.5 flex flex-col gap-1">
                  {e.points.map((p) => (
                    <li key={p} className="text-[0.82rem] text-white/55">
                      • {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}
