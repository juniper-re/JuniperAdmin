import { type IBrandingOverrides } from './brandingOverrides'

export interface IBrandingContext {
  brandingOverrides: IBrandingOverrides
  setBrandingOverrides: (c: IBrandingOverrides) => void
}
