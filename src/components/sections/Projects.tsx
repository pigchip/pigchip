import { Section } from '@/components/layout/Section'
import { Timeline, TimelineItem } from '@/components/common/Timeline'
import { ProjectCard } from '@/components/common/ProjectCard'
import { projects } from '@/data/projects'
import { useLocale } from '@/i18n/useLocale'

export function Projects() {
  const { messages } = useLocale()

  return (
    <Section
      id="projects"
      title={messages.projects.title}
      icon="FolderGit2"
      eyebrow={messages.projects.eyebrow}
    >
      <Timeline>
        {projects.map((project) => {
          const copy = messages.projects.items[project.id]
          const localizedProject = {
            ...project,
            ...copy,
            points: [...copy.points],
            links: project.links?.map((link) => ({
              ...link,
              label: messages.common.links[link.id],
            })),
          }
          return (
            <TimelineItem key={project.id} accent="#4890d8" date={copy.period}>
              <ProjectCard project={localizedProject} />
            </TimelineItem>
          )
        })}
      </Timeline>
    </Section>
  )
}
