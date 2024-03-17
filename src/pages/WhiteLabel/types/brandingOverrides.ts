export interface IBrandingOverrides {
  colours: {
    primary: {
      regular: string
      dark: string
      darker: string
    }
    secondary: {
      regular: string
      dark: string
      darker: string
      lighter: string
    }
    tertiary: {
      regular: string
      dark: string
    }
    red: {
      regular: string
      light: string
    }
    yellow: {
      darker: string
      lighter: string
    }

    white: {
      regular: string
      warm: string
    }

    text: {
      regular: string
      light: string
      nav: string
    }

    util: {
      dark: string
      background: string
      link: string
      toast: {
        success: string
        error: string
        shadow: string
      }
      tableHover: string
      textAreaFocus: string

    }
  }

  fonts: {
    primaryHeading: IFont
    secondaryHeading: IFont
    generalContent: IFont
  }

  images: {
    signInBackground: string
    logo: {
      regular: string
      large: string
    }
  }

  text: {
    loginScreenDescription: string
    walkthroughSignatureTermsAndConditions: string
    homeOwnerWalkthroughSignatureTermsAndConditions: string
  }

  qrCode: {
    data: ITenantID
  }
}

export type IFont =
  'DM-Serif-Display' |
  'Assistant' |
  'GT-Sectra' |
  'HelveticaNeue-Thin' |
  'HelveticaNeue-Light' |
  'MrEavesXLModOT-Bold' |
  'MrEavesXLModOT-Reg' |
  'ProximaNovaThin' |
  'ProximaNovaBold' |
  'MyriadProBold' |
  'Sequel-Sans-Medium-Body'

export type ITenantID = string
