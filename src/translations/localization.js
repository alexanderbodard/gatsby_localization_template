import LocalizedStrings from 'react-localization'
import en from './translation.en.js'
import nl from './translation.nl.js'

const strings = new LocalizedStrings({
  en: en,
  nl: nl,
})

export let globalLanguage = 'en'

export const setGlobalLanguage = (locale) => {
  strings.setLanguage(locale)
  globalLanguage = locale
}

// Choose a default language
setGlobalLanguage('en')

export default strings
