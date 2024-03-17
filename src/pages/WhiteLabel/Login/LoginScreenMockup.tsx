import React, { useContext } from 'react'
import './styles/mockupStyle.css'
import { BrandingOverrideContext } from '..'

interface IProps {
  image?: string
  tagLine?: string
  primaryColor?: string
  logo?: string
  primaryFont?: string
  accentFont?: string
}

export const LoginScreenMockup: React.FC<IProps> = () => {
  const { brandingOverrides } = useContext(BrandingOverrideContext)
  return (
    <div className="mockup-container pointer-events-none flex aspect-video select-none overflow-hidden rounded-lg border border-zinc-100 shadow-lg">
      {/* Login Form */}
      <div className="flex basis-1/2 flex-col justify-center gap-3 p-10 ">
        <img className='absolute top-10 self-center' style={{ width: '5vw' }} src={brandingOverrides.images.logo.login} />
        <span className={`${brandingOverrides.fonts.primaryHeading} medium-text self-start`} style={{ color: brandingOverrides?.colours.secondary.dark }}>Log in to your dashboard</span>
        <div className="form-input-size rounded-md bg-zinc-200"></div>
        <div className="form-input-size rounded-md bg-zinc-200"></div>
        <div className={`${brandingOverrides.fonts.generalContent} small-text self-center font-semibold`} style={{ color: brandingOverrides?.colours.secondary.dark }}>FORGOT PASSWORD?</div>
        <div className={`${brandingOverrides.fonts.generalContent} small-text flex items-center justify-center rounded-sm p-2 font-semibold text-white`} style={{ backgroundColor: brandingOverrides?.colours.secondary.dark }}>Login</div>
      </div>
      {/* Right side image */}
      <div className="basis-1/2 bg-cover p-5" style={{ backgroundImage: `url(${brandingOverrides.images.signInBackground})` }}>
        <span className={`${brandingOverrides.fonts.primaryHeading} large-text text block text-white`} style={{ width: '8em' }}>{brandingOverrides.text.loginScreenDescription}</span>
      </div>
    </div>
  )
}
