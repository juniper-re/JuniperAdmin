import React, { type ReactNode } from 'react'

interface IFontItem {
  label: ReactNode
  key: string
}

export const fontList: IFontItem[] = [
  {
    label: <span className='DM-Serif-Display'>DM Serif Display</span>,
    key: 'DM-Serif-Display'
  },
  {
    label: <span className='Assistant'>Assistant</span>,
    key: 'Assistant'
  },
  {
    label: <span className='GT-Sectra'>GT Sectra</span>,
    key: 'GT-Sectra'
  },
  {
    label: <span className='HelveticaNeueThin'>Helvetica Neue Thin</span>,
    key: 'HelveticaNeue-Thin'
  },
  {
    label: <span className='HelveticaNeueLight'>Helvetica Neue Light</span>,
    key: 'HelveticaNeue-Light'
  },
  {
    label: <span className='MrEavesXLModOT-Bold'>Mr Eaves XL Mod OT Bold</span>,
    key: 'MrEavesXLModOT-Bold'
  },
  {
    label: <span className='MrEavesXLModOT-Reg'>Mr Eaves XL Mod OT Reg</span>,
    key: 'MrEavesXLModOT-Reg'
  },
  {
    label: <span className='MyriadProBold'>Myriad Pro Bold</span>,
    key: 'MyriadProBold'
  },
  {
    label: <span className='ProximaNovaBold'>Proxima Nova Bold</span>,
    key: 'ProximaNovaBold'
  },
  {
    label: <span className='ProximaNovaThin'>Proxima Nova Thin</span>,
    key: 'ProximaNovaThin'
  },
  {
    label: <span className='Sequel-Sans-Medium-Body'>Sequel Sans Medium Body</span>,
    key: 'Sequel-Sans-Medium-Body'
  }

]
