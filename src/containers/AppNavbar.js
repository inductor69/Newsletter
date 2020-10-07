import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarBrandLink,
  NavbarSecondary,
  NavbarLink,
} from '../components/Navbar'
import { useLangKey, I18nLink } from '../components/I18nContext'

const locales = {
  en: {
    about: 'About Me',
    workshops: 'Workshops',
  },
  fr: {
    about: 'A propos',
    workshops: 'Formations',
  },
}

export function AppNavbar() {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (
    <Navbar>
      <NavbarBrandLink as={I18nLink} to="/">
        <NavbarBrand>NlogN</NavbarBrand>
      </NavbarBrandLink>
      <NavbarSecondary>
        <NavbarLink as={I18nLink} to="https://salicylic.netlify.app/">
          {t.about}
        </NavbarLink>
      
       
      </NavbarSecondary>
    </Navbar>
  )
}
