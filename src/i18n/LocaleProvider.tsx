import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { catalogs, type Catalog } from '@/i18n/catalog'
import { isLocale, type Locale } from '@/i18n/types'
import { LocaleContext } from '@/i18n/context'

const STORAGE_KEY = 'pigchip.locale.v1'

function readStoredLocale(): Locale {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return isLocale(value) ? value : 'en'
  } catch {
    return 'en'
  }
}

function setMetaContent(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

function syncDocument(locale: Locale, messages: Catalog) {
  const { metadata } = messages
  document.documentElement.lang = locale
  document.title = metadata.title

  setMetaContent('meta[name="description"]', metadata.description)
  setMetaContent('meta[property="og:title"]', metadata.title)
  setMetaContent('meta[property="og:description"]', metadata.socialDescription)
  setMetaContent('meta[property="og:image:alt"]', metadata.imageAlt)
  setMetaContent('meta[property="og:locale"]', metadata.openGraphLocale)
  setMetaContent('meta[name="twitter:title"]', metadata.title)
  setMetaContent('meta[name="twitter:description"]', metadata.socialDescription)

  const personJsonLd = document.querySelector<HTMLScriptElement>('#person-jsonld')
  if (personJsonLd?.textContent) {
    const person = JSON.parse(personJsonLd.textContent) as Record<string, unknown>
    person.jobTitle = metadata.jobTitle
    personJsonLd.textContent = JSON.stringify(person)
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readStoredLocale)
  const messages = catalogs[locale]

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // The selected locale still applies for this session when storage is blocked.
    }
    syncDocument(locale, messages)
  }, [locale, messages])

  const value = useMemo(
    () => ({ locale, messages, setLocale }),
    [locale, messages],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
