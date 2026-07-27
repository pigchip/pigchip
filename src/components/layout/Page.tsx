import { TopBar } from '@/components/layout/TopBar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { useSwipeNav } from '@/lib/useSwipeNav'
import { useLocale } from '@/i18n/useLocale'

/**
 * Single-page vertical layout: a sticky pill nav over a column of full-viewport,
 * scroll-snapping sections. Replaces the former horizontal slide deck.
 */
export function Page() {
  const { locale } = useLocale()
  useSwipeNav()

  return (
    <>
      <TopBar />
      <main className="relative">
        <Hero key={locale} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
