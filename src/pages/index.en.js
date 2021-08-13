import React from 'react';
import { setGlobalLanguage } from '../translations/localization';
import Index from '../components/pages/index'

export default function indexEnMain () {
  setGlobalLanguage('en')

  return(
    <>
      <Index />
    </>
  );
}
