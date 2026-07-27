import { Nav } from '@/components/layout/Nav'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'

export function TopBar() {
  return (
    <div
      data-top-bar
      className="fixed left-1/2 top-3 z-[60] flex w-auto max-w-[calc(100vw-0.75rem)] -translate-x-1/2 items-stretch gap-1.5 sm:top-6 sm:gap-2"
    >
      <Nav />
      <LanguageSwitcher />
    </div>
  )
}
