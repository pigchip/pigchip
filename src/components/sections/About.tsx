import { Section } from '@/components/layout/Section'
import { Timeline, TimelineItem } from '@/components/common/Timeline'
import { LogoTile } from '@/components/common/LogoTile'
import { education } from '@/data/education'
import { GraduationCap } from '@/lib/icons'

export function About() {
  return (
    <Section id="about" title="About me" icon="Sparkles" eyebrow="Who I am">
      <div className="mx-auto w-full max-w-2xl">
        <Timeline>
          {/* Mission statement leads the timeline as its first node. */}
          <TimelineItem accent="#4890d8" date="My goal">
            <blockquote className="glass rounded-2xl border-l-4 border-[var(--color-ember)] p-6">
              <p className="text-justify text-[1.05rem] font-medium leading-relaxed text-white/90">
                “I want to contribute to a future where cutting-edge technology is
                widely accessible, democratized, and promotes the socioeconomic
                growth of marginalized groups.”
              </p>
            </blockquote>
          </TimelineItem>

          {education.map((e) => (
            <TimelineItem key={e.school} accent="#4890d8" date={e.period}>
              <article className="glass flex h-full flex-col gap-4 rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <LogoTile
                      logo={e.logo}
                      chip={e.logoChip}
                      Icon={GraduationCap}
                      alt={`${e.school} logo`}
                    />
                    <div>
                      <h4 className="font-serif text-lg font-bold leading-tight text-white">
                        {e.degree}
                      </h4>
                      <p className="text-sm text-white/70">{e.school}</p>
                    </div>
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {e.points.map((p) => (
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
          ))}
        </Timeline>
      </div>
    </Section>
  )
}
