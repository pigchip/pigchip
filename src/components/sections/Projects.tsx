import { Section } from '@/components/layout/Section'
import { Timeline, TimelineItem } from '@/components/common/Timeline'
import { ProjectCard } from '@/components/common/ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <Section id="projects" title="Projects" icon="FolderGit2" eyebrow="Things I've built">
      <Timeline>
        {projects.map((p) => (
          <TimelineItem key={p.title} accent="#4890d8" date={p.period}>
            <ProjectCard project={p} />
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  )
}
