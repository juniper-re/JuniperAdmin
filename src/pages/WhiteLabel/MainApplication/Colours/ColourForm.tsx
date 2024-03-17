import React, { useContext } from 'react'

import { Form, ColorPicker } from 'antd'
import { type IBrandingContext } from 'pages/WhiteLabel/types/context'
import { BrandingOverrideContext } from 'pages/WhiteLabel'
import { EColourSelector, handleColourChange } from './handleColourChange'

export const ColourForm: React.FC = () => {
  const { brandingOverrides, setBrandingOverrides } = useContext<IBrandingContext>(BrandingOverrideContext)

  return (
    <div>
      <h2>Colours</h2>
      <Form layout="vertical">
        <div className="flex flex-row justify-between">
          <Form.Item
            label="Primary"
          >
            <ColorPicker
              showText
              disabledAlpha
              value={brandingOverrides.colours.primary.regular}
              onChangeComplete={
                (col) => {
                  console.log('changing colour')
                  setBrandingOverrides?.(
                    handleColourChange(brandingOverrides, col.toHexString(), EColourSelector.primary)
                  )
                }
              }
            />
          </Form.Item>

          <Form.Item
            label="Secondary"
          >
            <ColorPicker
              showText
              disabledAlpha
              value={brandingOverrides?.colours.secondary.regular}
              onChangeComplete={
                (col) => {
                  console.log('changing colour')
                  setBrandingOverrides?.(
                    handleColourChange(brandingOverrides, col.toHexString(), EColourSelector.secondary)
                  )
                }
              }
            />
          </Form.Item>

          <Form.Item
            label="Tertiary"
          >
            <ColorPicker
              showText
              disabledAlpha
              value={brandingOverrides?.colours.tertiary.regular}
              onChangeComplete={
                (col) => {
                  console.log('changing colour')
                  setBrandingOverrides?.(
                    handleColourChange(brandingOverrides, col.toHexString(), EColourSelector.tertiary)
                  )
                }
              }
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}
