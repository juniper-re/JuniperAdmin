import { getBrandingLocalStorage } from '../localstorage'

export const download = () => {
  console.log('downloading')
  const data = getBrandingLocalStorage()
  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`
  const link = document.createElement('a')
  link.href = jsonString
  link.download = 'theme.json'

  link.click()
  link.remove()
}
