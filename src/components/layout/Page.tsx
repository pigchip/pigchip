import { Nav } from '@/components/layout/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'

/**
 * Single-page vertical layout: a sticky pill nav over a column of full-viewport,
 * scroll-snapping sections. Replaces the former horizontal slide deck.
 */
export function Page() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
