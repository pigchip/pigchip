import { Section } from '@/components/layout/Section'
import { Timeline, TimelineItem } from '@/components/common/Timeline'
import { ExperienceCard } from '@/components/common/ExperienceCard'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience & Research"
      icon="Briefcase"
      eyebrow="Where I've worked"
    >
      <Timeline>
        {experience.map((item) => (
          <TimelineItem key={`${item.org}-${item.period}`} accent="#4890d8" date={item.period}>
            <ExperienceCard item={item} />
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  )
}
