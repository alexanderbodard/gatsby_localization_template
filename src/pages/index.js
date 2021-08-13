/*
  The localization plugin makes you choose between using a prefix for the default language or not.
  Using a prefix is useful for search engines. However this causes '/' to result in a blank page.
  This fix simply redirects to the default language.  
*/

import { useEffect } from 'react';
import { navToLangPage } from '../common/helpers';

export default function indexMain () {
  useEffect(() => {
    return navToLangPage('/');
  }, []);
  return null;
};
