import { Form } from 'antd'
import React, { useContext } from 'react'
import { BrandingOverrideContext } from '..'
import { handleImageSubmit } from '../utilities/handleImageUpload'

export const LoginForm: React.FC = () => {
  const { brandingOverrides, setBrandingOverrides } = useContext(BrandingOverrideContext)
  return (
    <Form layout="vertical">
      <Form.Item
        label="Logo"
      >
        <input
          type='file'
          name="logoUploader"
          accept='.png'
          onChange={(e) => {
            handleImageSubmit(e)
              .then(data => {
                if (data) {
                  setBrandingOverrides({
                    ...brandingOverrides,
                    images: {
                      ...brandingOverrides.images,
                      logo: {
                        ...brandingOverrides.images.logo,
                        login: data
                      }
                    }
                  })
                }
              })
              .catch(e => { alert('error uploading image' + e) })
          }}
        />
      </Form.Item>

      <Form.Item
        label="Background"
      >
        <input
          type='file'
          name="logoUploader"
          accept='.jpg, .png, .jpeg'
          onChange={(e) => {
            handleImageSubmit(e)
              .then(data => {
                if (data) {
                  setBrandingOverrides({
                    ...brandingOverrides,
                    images: {
                      ...brandingOverrides.images,
                      signInBackground: data
                    }
                  })
                }
              })
              .catch(e => { alert('error uploading image' + e) })
          }}
        />
      </Form.Item>

      <Form.Item
        label="Tagline"
      >
        <textarea value={brandingOverrides.text.loginScreenDescription} className='w-full resize-none rounded-md border border-gray-300 p-1' onChange={(e) => {
          setBrandingOverrides({
            ...brandingOverrides,
            text: {
              ...brandingOverrides.text,
              loginScreenDescription: e.target.value
            }
          })
        }} />
      </Form.Item>
    </Form>
  )
}
