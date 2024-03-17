import React, { createContext, useEffect, useState } from 'react'
import { Button } from 'components/Button'
import { Login } from './Login'
import { MainApplication } from './MainApplication'
import { getBrandingLocalStorage, setBrandingLocalStorage } from './utilities/localstorage'
import { type IBrandingContext } from './types/context'
import { defaults } from './utilities/defaults'
import { download } from './utilities/download'
import { type IBrandingOverrides } from './types/brandingOverrides'

export const BrandingOverrideContext = createContext<IBrandingContext>({ brandingOverrides: JSON.parse(JSON.stringify(defaults)) as IBrandingOverrides, setBrandingOverrides: () => {} })
export const WhiteLabel: React.FC = () => {
  const [brandingOverrides, setBrandingOverrides] = useState(getBrandingLocalStorage())
  useEffect(() => { setBrandingLocalStorage(brandingOverrides) }, [brandingOverrides])

  return (
    <BrandingOverrideContext.Provider value={{ brandingOverrides, setBrandingOverrides }}>
      <div className='rounded-2xl bg-gray-100 p-10 pb-20 pl-20'>
        <h1 className='DM-Serif-Display text-5xl text-gray-400'>Theme Generator</h1>
        <div className="mt-10 rounded-3xl bg-white p-5 shadow-md">
          <Login />
        </div>

        <div className="mt-10 rounded-3xl bg-white p-5 shadow-md">
          <MainApplication />
        </div>
      </div>

      <div className="fixed bottom-0 flex w-full items-center bg-white bg-opacity-90 p-3">
        <Button variant='filled' onClick={() => { download() }} className='mx-4'>Save</Button>
        <Button variant='outlined' onClick={() => { setBrandingOverrides(JSON.parse(JSON.stringify(defaults)) as IBrandingOverrides) }}>Clear</Button>
      </div>
    </BrandingOverrideContext.Provider>
  )
}
