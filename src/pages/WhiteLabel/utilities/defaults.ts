import { type IBrandingOverrides } from '../types/brandingOverrides'
import npmPackage from '../../../../package.json'

export const defaults: IBrandingOverrides = {
  version: npmPackage.version,
  colours: {
    primary: {
      regular: '#43467F',
      dark: '#1C2260',
      darker: '#00044C'
    },
    secondary: {
      regular: '#47C1BF',
      dark: '#00848E', // 100% more saturated, 47% darker
      darker: '#003135', // 100% more saturated, 80% darker
      lighter: '#E0F5F5' // 77% brighter
    },
    tertiary: {
      light: '#DFE3E8',
      regular: '#DFE3E8',
      dark: '#C4CDD5'
    },
    red: {
      regular: '#330001',
      light: '#FBE9E5'
    },
    yellow: {
      darker: '#573A00',
      lighter: '#FBF1CD'
    },
    white: {
      regular: '#FFF',
      warm: '#FBEAE5'
    },
    text: {
      lightest: '#919eab',
      regular: '#454F5B',
      light: '#637381',
      nav: '#B3B5CB'
    },
    util: {
      dark: '#212B36',
      background: '#41457C',
      link: '#54938B',
      sky: {
        regular: '#285B9B',
        dark: '#C4CDD5'
      },
      toast: {
        success: '#154246',
        error: '#5A302F',
        shadow: '#B7ECEC'
      },
      tableHover: '#ffffff',
      textAreaFocus: '#36B5AC'
    }
  },
  fonts: {
    primaryHeading: 'DM-Serif-Display',
    secondaryHeading: 'Assistant',
    generalContent: 'Assistant'
  },
  text: {
    loginScreenDescription: 'Providing home and homeowner wellness',
    walkthroughSignatureTermsAndConditions: 'By signing this document, I acknowledge that I have completed the walkthrough and agree to the terms for this service. I understand that items noted as deficiencies will receive the necessary attention and warranty issues will be assessed and scheduled for repair as determined by the developer during the applicable warranty period.',
    homeOwnerWalkthroughSignatureTermsAndConditions: 'By signing this document, I acknowledge that I have completed the homeowner orientation and agree to the terms for this service. I understand that items noted as deficiencies will receive the necessary attention and warranty issues will be assessed and scheduled for repair as determined by the developer during the applicable warranty period.'
  },
  images: {
    signInBackground: '/assets/sign-in.png',
    logo: {
      login: '/assets/logo-juniper-color@2x.png',
      mainApplication: '/assets/logo-white.svg'
    }
  },
  tenantGUID: '132b6d75-ba06-459f-a780-0a1bf85e594c'

}
