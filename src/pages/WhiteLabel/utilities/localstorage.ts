import { type IBrandingOverrides } from '../types/brandingOverrides'
import npmPackage from '../../../../package.json'
import { defaults } from './defaults'

export const getBrandingLocalStorage = (): IBrandingOverrides => {
  const localStorageStringObject = localStorage.getItem(import.meta.env.VITE_WHITE_LABEL_STORAGE_KEY)
  try {
    const localStorageObject = JSON.parse(localStorageStringObject ?? '')
    if (localStorageStringObject === null || localStorageObject.version !== npmPackage.version) {
      setBrandingLocalStorage(defaults)
      return { ...defaults }
    }
  } catch (e) {
    setBrandingLocalStorage(defaults)
    return { ...defaults }
  }

  return JSON.parse(localStorageStringObject)
}

export const setBrandingLocalStorage = (branding: IBrandingOverrides): void => {
  localStorage.setItem(import.meta.env.VITE_WHITE_LABEL_STORAGE_KEY, JSON.stringify(branding))
}

export const removeBrandingLocalStorage = (): void => {
  localStorage.removeItem(import.meta.env.VITE_WHITE_LABEL_STORAGE_KEY)
}
