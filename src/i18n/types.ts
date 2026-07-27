export const locales = ['en', 'es', 'zh-CN'] as const

export type Locale = (typeof locales)[number]

export type DeepTranslated<T> =
  T extends string
    ? string
    : T extends readonly unknown[]
      ? { readonly [K in keyof T]: DeepTranslated<T[K]> }
      : T extends object
        ? { readonly [K in keyof T]: DeepTranslated<T[K]> }
        : T

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale)
}

export function formatMessage(
  message: string,
  values: Record<string, string | number>,
) {
  return message.replace(/\{(\w+)\}/g, (match, key: string) =>
    Object.hasOwn(values, key) ? String(values[key]) : match,
  )
}
