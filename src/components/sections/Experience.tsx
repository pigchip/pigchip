import { Section } from '@/components/layout/Section'
import { Timeline, TimelineItem } from '@/components/common/Timeline'
import { ExperienceCard } from '@/components/common/ExperienceCard'
import { experience } from '@/data/experience'
import { useLocale } from '@/i18n/useLocale'

export function Experience() {
  const { messages } = useLocale()

  return (
    <Section
      id="experience"
      title={messages.experience.title}
      icon="Briefcase"
      eyebrow={messages.experience.eyebrow}
    >
      <Timeline>
        {experience.map((item) => {
          const copy = messages.experience.items[item.id]
          const localizedItem = { ...item, ...copy, points: [...copy.points] }
          return (
            <TimelineItem key={item.id} accent="#4890d8" date={copy.period}>
              <ExperienceCard item={localizedItem} />
            </TimelineItem>
          )
        })}
      </Timeline>
    </Section>
  )
}
