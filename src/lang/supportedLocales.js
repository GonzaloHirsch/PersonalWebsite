import supportedLocales from '@/config/supportedLocales'

export function supportedLocalesInclude (locale) {
  return Object.keys(supportedLocales).includes(locale)
}
