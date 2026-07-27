import { en, type EnglishCatalog } from '@/i18n/locales/en'
import { es } from '@/i18n/locales/es'
import { zhCN } from '@/i18n/locales/zh-CN'
import type { DeepTranslated, Locale } from '@/i18n/types'

export type Catalog = DeepTranslated<EnglishCatalog>

export const catalogs: Record<Locale, Catalog> = {
  en,
  es,
  'zh-CN': zhCN,
}
