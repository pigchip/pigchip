import { useEffect, useRef, useState } from 'react'
import { Globe } from '@/lib/icons'
import { formatMessage, locales, type Locale } from '@/i18n/types'
import { useLocale } from '@/i18n/useLocale'

const shortNames: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  'zh-CN': '中文',
}

export function LanguageSwitcher() {
  const { locale, messages, setLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const activeItemRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])

  useEffect(() => {
    if (!open) return

    activeItemRef.current?.focus()

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const selectLocale = (nextLocale: Locale) => {
    setLocale(nextLocale)
    setOpen(false)
    buttonRef.current?.focus()
  }

  const onMenuKeyDown = (event: React.KeyboardEvent) => {
    const items = itemRefs.current.filter(
      (item): item is HTMLButtonElement => item != null,
    )
    const currentIndex = items.indexOf(document.activeElement as HTMLButtonElement)
    let nextIndex: number | undefined

    if (event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % items.length
    } else if (event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + items.length) % items.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = items.length - 1
    }

    if (nextIndex != null) {
      event.preventDefault()
      items[nextIndex]?.focus()
    }
  }

  return (
    <div
      ref={containerRef}
      data-language-switcher
      className="relative shrink-0"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={formatMessage(messages.languageMenu.currentLanguage, {
          language: messages.languageMenu.names[locale],
        })}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="glass flex h-full min-w-9 items-center justify-center gap-1 rounded-full px-2 text-[0.65rem] font-bold text-white transition-colors hover:border-white/35 hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ember)] sm:min-w-11 sm:px-2.5 sm:text-xs"
        title={messages.languageMenu.buttonLabel}
      >
        <Globe size={16} aria-hidden="true" />
        <span>{shortNames[locale]}</span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={messages.languageMenu.menuLabel}
          onKeyDown={onMenuKeyDown}
          className="glass absolute right-0 top-[calc(100%+0.5rem)] flex min-w-52 flex-col gap-1.5 rounded-xl p-1.5 backdrop-blur-xl backdrop-saturate-150"
        >
          {locales.map((option, index) => {
            const active = option === locale
            return (
              <button
                key={option}
                ref={(element) => {
                  itemRefs.current[index] = element
                  if (active) activeItemRef.current = element
                }}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                tabIndex={active ? 0 : -1}
                onClick={() => selectLocale(option)}
                className={`flex w-full items-center justify-between gap-4 rounded-lg px-3.5 py-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-ember)] ${
                  active
                    ? 'bg-[var(--color-ember)]/25 text-white'
                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap">
                  {messages.languageMenu.names[option]}
                </span>
                <span className="whitespace-nowrap text-xs font-bold text-white/55">
                  {shortNames[option]}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
