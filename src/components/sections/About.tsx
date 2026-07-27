import { Section } from '@/components/layout/Section'
import { Timeline, TimelineItem } from '@/components/common/Timeline'
import { LogoTile } from '@/components/common/LogoTile'
import { education } from '@/data/education'
import { GraduationCap } from '@/lib/icons'
import { useLocale } from '@/i18n/useLocale'
import { formatMessage } from '@/i18n/types'

export function About() {
  const { messages } = useLocale()

  return (
    <Section
      id="about"
      title={messages.about.title}
      icon="Sparkles"
      eyebrow={messages.about.eyebrow}
    >
      <div className="mx-auto w-full max-w-2xl">
        <Timeline>
          {/* Mission statement leads the timeline as its first node. */}
          <TimelineItem accent="#4890d8" date={messages.about.missionDate}>
            <blockquote className="glass rounded-2xl border-l-4 border-[var(--color-ember)] p-3 sm:p-6">
              <p className="text-left text-base font-medium leading-relaxed text-white/90 sm:text-justify sm:text-[1.05rem]">
                {messages.about.mission}
              </p>
            </blockquote>
          </TimelineItem>

          {education.map((e) => {
            const copy = messages.about.education[e.id]
            return (
            <TimelineItem key={e.id} accent="#4890d8" date={copy.period}>
              <article className="glass flex h-full flex-col gap-3 rounded-2xl p-3 sm:gap-4 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <LogoTile
                      logo={e.logo}
                      chip={'logoChip' in e ? e.logoChip : undefined}
                      Icon={GraduationCap}
                      alt={formatMessage(messages.common.logoAlt, { name: copy.school })}
                    />
                    <div>
                      <h4 className="font-serif text-lg font-bold leading-tight text-white">
                        {copy.degree}
                      </h4>
                      <p className="text-sm text-white/70">{copy.school}</p>
                    </div>
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {copy.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-4 text-left text-[0.88rem] leading-relaxed text-white/65 before:absolute before:left-0 before:top-[0.6rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-ember)] sm:text-justify"
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
      </div>
    </Section>
  )
}
