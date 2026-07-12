import { Section } from '@/components/layout/Section'
import { SkillCard } from '@/components/common/SkillCard'
import { skills } from '@/data/skills'

export function Skills() {
  return (
    <Section id="skills" title="Skills" icon="Code2" eyebrow="What I work with">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>
    </Section>
  )
}
