import { Button, Dropdown, Form } from 'antd'
import { BrandingOverrideContext } from 'pages/WhiteLabel'
import { type IBrandingOverrides, type IFont } from 'pages/WhiteLabel/types/brandingOverrides'
import React, { type ReactNode, useContext } from 'react'

import { fontList } from './fontList'

export const FontForm: React.FC = () => {
  const { brandingOverrides, setBrandingOverrides } = useContext(BrandingOverrideContext)

  const getFontLabel = (key: IFont): ReactNode => {
    return fontList.filter(font => font?.key === key)[0].label
  }

  const handleFontChange = (key: keyof IBrandingOverrides['fonts'], newFont: IFont): void => {
    const newBrandingOverrides = { ...brandingOverrides }
    newBrandingOverrides.fonts[key] = newFont
    setBrandingOverrides(newBrandingOverrides)
  }
  return (
    <div>
      <h2>Fonts</h2>
      <Form layout='vertical'>
        <Form.Item label="Primary Heading">
          <Dropdown menu={{ items: fontList, onClick: ({ key }) => { handleFontChange('primaryHeading', key as IFont) } }}>
            <Button className='w-full text-start'>{getFontLabel(brandingOverrides.fonts.primaryHeading)}</Button>
          </Dropdown>
        </Form.Item>
        <Form.Item label="Secondary Heading">
          <Dropdown menu={{ items: fontList, onClick: ({ key }) => { handleFontChange('secondaryHeading', key as IFont) } }}>
            <Button className='w-full text-start'>{getFontLabel(brandingOverrides.fonts.secondaryHeading)}</Button>
          </Dropdown>
        </Form.Item>
        <Form.Item label="General Content">
          <Dropdown menu={{ items: fontList, onClick: ({ key }) => { handleFontChange('generalContent', key as IFont) } }}>
            <Button className='w-full text-start'>{getFontLabel(brandingOverrides.fonts.generalContent)}</Button>
          </Dropdown>
        </Form.Item>
      </Form>
    </div>

  )
}
