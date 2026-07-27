import { Section } from '@/components/layout/Section'
import { SkillCard } from '@/components/common/SkillCard'
import { skills } from '@/data/skills'
import { useLocale } from '@/i18n/useLocale'

export function Skills() {
  const { messages } = useLocale()

  return (
    <Section
      id="skills"
      title={messages.skills.title}
      icon="Code2"
      eyebrow={messages.skills.eyebrow}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => {
          const localizedCategory = {
            ...category,
            title: messages.skills.categories[category.id],
            items: category.items.map((item) => ({
              ...item,
              label: item.localizationKey
                ? messages.skills.languageItems[item.localizationKey]
                : item.label,
            })),
          }
          return <SkillCard key={category.id} category={localizedCategory} />
        })}
      </div>
    </Section>
  )
}
