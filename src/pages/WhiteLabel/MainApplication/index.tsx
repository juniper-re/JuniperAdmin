import React from 'react'

import { ColourForm } from './Colours'
import { FontForm } from './Fonts'
import { MainApplicationMockup } from './MainApplicationMockup'
import { LogoForm } from './LogoForm'

export const MainApplication: React.FC = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='relative col-span-4 flex flex-col '>
        <ColourForm />
        <FontForm />
        <LogoForm />
      </div>
      <div className='col-span-7 col-start-6'>
        <MainApplicationMockup />
      </div>
    </div>
  )
}
