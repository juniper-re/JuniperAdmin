import { type IFont, type IBrandingOverrides } from '../types/brandingOverrides'

export const applyBrandingToLegacyStyles = (branding) => {

}
// need to add
// color-inklightest (text-lightest)
// color-teal-dark (secondary dark)
const applyColours = (colours: IBrandingOverrides['colours']) => {
  document.documentElement.style.setProperty(
    '--color-ink-lightest',
    colours.text.lightest
  )
  document.documentElement.style.setProperty(
    '--color-complete-button',
    colours.primary.regular
  )
  document.documentElement.style.setProperty(
    '--color-teal-dark',
    colours.secondary.dark
  )
  document.documentElement.style.setProperty(
    '--button-background-color',
    colours.secondary.dark
  )
  document.documentElement.style.setProperty(
    '--color-juniper',
    colours.primary.regular
  )
  document.documentElement.style.setProperty(
    '--toast-message-text',
    colours.primary.regular
  )
  document.documentElement.style.setProperty(
    '--color-search-border',
    colours.primary.regular
  )
  document.documentElement.style.setProperty(
    '--color-ink-lighter',
    colours.text.light
  )
  document.documentElement.style.setProperty(
    '--color-disabled-button',
    colours.text.light
  )
  document.documentElement.style.setProperty(
    '--color-sky',
    colours.tertiary.regular
  )
  document.documentElement.style.setProperty(
    '--color-teal',
    colours.secondary.regular
  )
  document.documentElement.style.setProperty(
    '--color-checkIcon',
    colours.secondary.regular
  )
  document.documentElement.style.setProperty(
    '--walkthroughcompletecheckbox',
    colours.secondary.regular
  )
  document.documentElement.style.setProperty(
    '--color-ink-light',
    colours.text.light
  )
  document.documentElement.style.setProperty(
    '--color-juniper-dark',
    colours.primary.dark
  )
  document.documentElement.style.setProperty(
    '--tab-background-color',
    colours.primary.dark
  )
  document.documentElement.style.setProperty(
    '--color-juniper-darker',
    colours.primary.darker
  )
  document.documentElement.style.setProperty(
    '--color-red-darker',
    colours.red.regular
  )
  document.documentElement.style.setProperty(
    '--color-red-lighter',
    colours.red.light
  )
  document.documentElement.style.setProperty(
    '--color-sky-dark',
    colours.tertiary.dark
  )
  document.documentElement.style.setProperty(
    '--color-teal-darker',
    colours.secondary.darker
  )
  document.documentElement.style.setProperty(
    '--color-teal-lighter',
    colours.secondary.lighter
  )
  document.documentElement.style.setProperty(
    '--color-yellow-lighter',
    colours.yellow.lighter
  )
  document.documentElement.style.setProperty(
    '--color-yellow-darker',
    colours.yellow.lighter
  )
  document.documentElement.style.setProperty(
    '--links',
    colours.util.link
  )
  document.documentElement.style.setProperty(
    '--color-dark',
    colours.util.dark
  )

  document.documentElement.style.setProperty(
    '--breadcrumb',
    colours.util.link
  )
  document.documentElement.style.setProperty(
    '--left-nav-text-color',
    colours.text.nav
  )
  document.documentElement.style.setProperty(
    '--left-nav-active-text-color',
    colours.white.regular
  )
  document.documentElement.style.setProperty(
    '--time-line',
    colours.secondary.regular
  )
  document.documentElement.style.setProperty(
    '--toast-background-shadow',
    colours.util.toast.shadow
  )
  document.documentElement.style.setProperty(
    '--icomoon-color',
    colours.secondary.regular
  )
  document.documentElement.style.setProperty(
    '--sidebar-tenant-color',
    colours.white.regular
  )
  document.documentElement.style.setProperty(
    '--closed-overview-color',
    colours.tertiary.dark
  )
  document.documentElement.style.setProperty(
    '--backGroundColors',
    colours.util.background
  )
  document.documentElement.style.setProperty(
    '--recentActivityPanColor',
    colours.primary.darker
  )
  document.documentElement.style.setProperty(
    '--HOtitle',
    colours.primary.darker
  )
  document.documentElement.style.setProperty(
    '--textAreaOnFocusBroderHighLight',
    colours.util.textAreaFocus
  )
  document.documentElement.style.setProperty(
    '--tableListHoverColor',
    colours.util.tableHover
  )

  document.documentElement.style.setProperty(
    '--toastSuccessColor',
    colours.util.toast.success
  )
  document.documentElement.style.setProperty(
    '--toastSuccessBackGroundColor',
    colours.white.regular
  )
  document.documentElement.style.setProperty(
    '--toastSuccessBorderColor',
    colours.util.toast.success
  )
  document.documentElement.style.setProperty(
    '--toastSuccessProgressBarColor',
    colours.util.toast.success
  )
  document.documentElement.style.setProperty(
    '--toastSuccessCloseButtonColor',
    colours.util.toast.success
  )
  document.documentElement.style.setProperty(
    '--toastErrorColor',
    colours.util.toast.error
  )
  document.documentElement.style.setProperty(
    '--toastErrorBackGroundColor',
    colours.white.warm
  )
  document.documentElement.style.setProperty(
    '--toastErrorBorderColor',
    colours.util.toast.error
  )
  document.documentElement.style.setProperty(
    '--toastErrorProgressBarColor',
    colours.util.toast.error
  )
  document.documentElement.style.setProperty(
    '--toastErrorCloseButtonColor',
    colours.util.toast.error
  )

  document.documentElement.style.setProperty(
    '--color-issue-type-header',
    colours.primary.regular
  )
  document.documentElement.style.setProperty(
    '--color-anchor-link',
    colours.primary.regular
  )

  document.documentElement.style.setProperty(
    '--color-left-nav-background',
    colours.primary.regular
  )
  document.documentElement.style.setProperty(
    '--complete-button',
    colours.primary.regular
  )
  document.documentElement.style.setProperty(
    '--color-expires-text',
    colours.yellow.darker
  )
}

const fontTransformation: Record<IFont, string> = {
  'Sequel-Sans-Medium-Body': 'Sequel Sans Medium Body',
  ProximaNovaThin: 'ProximaNovaThin',
  ProximaNovaBold: 'ProximaNovaBold',
  MyriadProBold: 'MyriadProBold',
  'MrEavesXLModOT-Reg': 'MrEavesXLModOT-Reg',
  'MrEavesXLModOT-Bold': 'MrEavesXLModOT-Bold',
  'HelveticaNeue-Thin': 'HelveticaNeue-Thin',
  'HelveticaNeue-Light': 'HelveticaNeue-Light',
  'GT-Sectra': 'GT Sectra Fine Book',
  'DM-Serif-Display': 'DM Serif Display',
  Assistant: 'Assistant'
}

const applyFonts = (fonts: IBrandingOverrides['fonts']) => {
  document.documentElement.style.setProperty(
    '--primary-heading-font',
    fontTransformation[fonts.primaryHeading]
  )
  document.documentElement.style.setProperty(
    '--secondary-heading-font',
    fontTransformation[fonts.secondaryHeading]
  )
  document.documentElement.style.setProperty(
    '--general-content-font',
    fontTransformation[fonts.generalContent]
  )
}
