import { Section } from '@/components/layout/Section'
import { SkillCard } from '@/components/common/SkillCard'
import { skills } from '@/data/skills'

export function Skills() {
  return (
    <Section id="skills" title="Skills" icon="Code2">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>
    </Section>
  )
}
