import { useTranslations } from 'next-intl';
import React from 'react'

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className='flex min-h-12 shrink-0 items-center justify-center bg-black px-3 py-2 text-center text-xs text-white sm:px-4 sm:text-sm'>
      <span>{t("title")}</span>
    </footer>
  )
}

export default Footer