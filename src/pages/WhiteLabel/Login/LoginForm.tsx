import { UploadOutlined } from '@ant-design/icons'
import { Button, Form } from 'antd'
import React, { useContext } from 'react'
import { BrandingOverrideContext } from '..'

export const LoginForm: React.FC = () => {
  const { brandingOverrides, setBrandingOverrides } = useContext(BrandingOverrideContext)
  return (
    <Form layout="vertical">
      <Form.Item
        label="Logo"
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Form.Item>

      <Form.Item
        label="Background"
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
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
