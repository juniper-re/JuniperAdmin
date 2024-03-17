import { Form } from 'antd'
import { BrandingOverrideContext } from 'pages/WhiteLabel'
import { handleImageSubmit } from 'pages/WhiteLabel/utilities/handleImageUpload'
import React, { useContext } from 'react'

export const LogoForm: React.FC = () => {
  const { brandingOverrides, setBrandingOverrides } = useContext(BrandingOverrideContext)

  return (
    <div>
      <h2>Logo</h2>
      <Form layout='vertical'>
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
                          mainApplication: data
                        }
                      }
                    })
                  }
                })
                .catch(e => { alert('error uploading image' + e) })
            }}
          />
        </Form.Item>
      </Form>
    </div>
  )
}
