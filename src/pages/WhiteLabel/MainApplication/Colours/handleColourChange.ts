import { type IBrandingOverrides } from 'pages/WhiteLabel/types/brandingOverrides'
import Color from 'color'

export enum EColourSelector {
  primary,
  secondary,
  tertiary
}

const transformToDark = (col: Color): Color => {
  return col.saturate(1).darken(0.47)
}

const transformToDarker = (col: Color): Color => {
  return col.saturate(1).darken(0.8)
}

const transformToLighter = (col: Color): Color => {
  return col.lighten(0.77)
}

export const handleColourChange = (currentBranding: IBrandingOverrides, newColour: string, selector: EColourSelector): IBrandingOverrides => {
  const newBrandingOverrides = { ...currentBranding }
  const color = Color(newColour)

  switch (selector) {
  case EColourSelector.primary:{
    const primary: IBrandingOverrides['colours']['primary'] = {
      regular: color.hex(),
      dark: transformToDark(color).hex(),
      darker: transformToDarker(color).hex()
    }
    newBrandingOverrides.colours.primary = primary
    break
  }

  case EColourSelector.secondary:{
    const secondary: IBrandingOverrides['colours']['secondary'] = {
      regular: color.hex(),
      dark: transformToDark(color).hex(),
      darker: transformToDarker(color).hex(),
      lighter: transformToLighter(color).hex()
    }
    newBrandingOverrides.colours.secondary = secondary
    break
  }

  case EColourSelector.tertiary:{
    const tertiary: IBrandingOverrides['colours']['tertiary'] = {
      regular: color.hex(),
      dark: transformToDark(color).hex()
    }
    newBrandingOverrides.colours.tertiary = tertiary
    break
  }
  }
  console.log(newBrandingOverrides)

  return newBrandingOverrides
}
