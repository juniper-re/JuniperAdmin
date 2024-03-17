import React, { useContext } from 'react'
import QRCode from 'react-qr-code'
import { BrandingOverrideContext } from '..'

export const Other: React.FC = () => {
  const { brandingOverrides, setBrandingOverrides } = useContext(BrandingOverrideContext)
  return (
    <div className="flex flex-row gap-10">
      <div className='flex-grow'>
        <h2>Text</h2>

        <p className='my-2'>Walkthrough Signature Terms and Conditions</p>
        <textarea
          rows={6}
          className='w-full'
          value={brandingOverrides.text.walkthroughSignatureTermsAndConditions}
          onChange={(e) => {
            setBrandingOverrides({
              ...brandingOverrides,
              text: {
                ...brandingOverrides.text,
                walkthroughSignatureTermsAndConditions: e.target.value
              }
            })
          }}
        />

        <p className='my-2'>Home Owner Walkthrough Signature Terms and Conditions</p>
        <textarea
          rows={6}
          className='w-full'
          value={brandingOverrides.text.homeOwnerWalkthroughSignatureTermsAndConditions}
          onChange={(e) => {
            setBrandingOverrides({
              ...brandingOverrides,
              text: {
                ...brandingOverrides.text,
                homeOwnerWalkthroughSignatureTermsAndConditions: e.target.value
              }
            })
          }}
        />

      </div>
      <div className='flex-grow'>
        <h2>QR Code</h2>
        <p className='my-2' aria-label='tenantId'>Tenant ID</p>
        <input
          name='tenantId'
          value={brandingOverrides.qrCode.data}
          className='w-full'
          onChange={(e) => {
            setBrandingOverrides({
              ...brandingOverrides,
              qrCode: { data: e.target.value }
            })
          }}
        />
        <QRCode className='m-3' value={brandingOverrides.qrCode.data} />
      </div>
    </div>
  )
}
