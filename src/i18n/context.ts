import { createContext } from 'react'
import type { Catalog } from '@/i18n/catalog'
import type { Locale } from '@/i18n/types'

export interface LocaleContextValue {
  locale: Locale
  messages: Catalog
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
