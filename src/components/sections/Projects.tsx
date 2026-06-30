import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { Section } from '@/components/layout/Section'
import { ProjectCard, ExpandedProject } from '@/components/common/ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const active = projects.find((p) => p.title === expanded) ?? null

  useEffect(() => {
    if (!expanded) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expanded])

  return (
    <Section
      id="projects"
      title="Projects"
      icon="FolderGit2"
    >
      <div className="relative flex w-full flex-1 flex-col [justify-content:safe_center]">
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              project={p}
              onExpand={() => setExpanded(p.title)}
            />
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <ExpandedProject
              key={active.title}
              project={active}
              onClose={() => setExpanded(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}
