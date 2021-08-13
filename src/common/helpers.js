import { useEffect } from 'react';
import { navigate } from 'gatsby';
import strings from '../translations/localization'

export function navToLangPage(page) {
  const urlLang = getRedirectLanguage();
  navigate(`/${urlLang}` + page, {replace: true});
  return null;
}

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "en";

  switch (lang) {
    case "nl":
      return "nl";
    default:
      return "en";
  }
};
