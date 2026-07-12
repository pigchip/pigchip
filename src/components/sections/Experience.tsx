import { Section } from '@/components/layout/Section'
import { Timeline, TimelineItem } from '@/components/common/Timeline'
import { LogoTile } from '@/components/common/LogoTile'
import { experience } from '@/data/experience'
import { Briefcase, FlaskConical } from '@/lib/icons'

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience & Research"
      icon="Briefcase"
      eyebrow="Where I've worked"
    >
      <Timeline>
        {experience.map((item) => {
          const Icon = item.kind === 'research' ? FlaskConical : Briefcase
          return (
            <TimelineItem key={`${item.org}-${item.period}`} accent="#4890d8" date={item.period}>
              <article className="glass flex h-full flex-col gap-4 rounded-2xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <LogoTile logo={item.logo} chip={item.logoChip} Icon={Icon} alt={`${item.org} logo`} />
                  <div>
                    <h3 className="font-serif text-lg font-bold leading-tight text-white">{item.role}</h3>
                    <p className="text-sm text-white/70">{item.org}</p>
                  </div>
                </div>
              </div>

              <p className="text-justify text-[0.95rem] leading-relaxed text-white/75">{item.summary}</p>

              <ul className="flex flex-col gap-2">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="relative pl-4 text-justify text-[0.88rem] leading-relaxed text-white/65 before:absolute before:left-0 before:top-[0.6rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-ember)]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              </article>
            </TimelineItem>
          )
        })}
      </Timeline>
    </Section>
  )
}
