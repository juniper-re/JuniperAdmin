import type React from 'react'

export const handleImageSubmit = async (e: React.ChangeEvent<HTMLInputElement>): Promise<string | null> => {
  if (!e.target.files) return null
  const imageFile = e.target.files[0]
  return await convertToBase64(imageFile)
}

const convertToBase64 = async (image: File): Promise<string | null> => {
  return await new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(image)
    fileReader.onload = () => {
      resolve(String(fileReader.result))
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
