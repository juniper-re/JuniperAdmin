import React, { useContext } from 'react'
import { BrandingOverrideContext } from '..'

export const MainApplicationMockup: React.FC = () => {
  const { brandingOverrides } = useContext(BrandingOverrideContext)
  return (
    <div className="aspect-video overflow-hidden rounded-lg border border-zinc-100 shadow-lg">
      <div className="grid h-full grid-cols-12">
        <div className='col-span-2 flex h-full p-2' style={{ backgroundColor: brandingOverrides.colours.primary.dark }}>
          <div className="mt-11 h-8 w-full rounded-sm" style={{ backgroundColor: brandingOverrides.colours.primary.regular }}></div>
        </div>
        <div className="col-start-3 col-end-13 p-5">
          <h3 className={`${brandingOverrides.fonts.secondaryHeading} text-lg`} style={{ color: brandingOverrides.colours.secondary.dark }}>Secondary Heading</h3>
          <h3 className={`${brandingOverrides.fonts.generalContent} text-xs`} style={{ color: brandingOverrides.colours.tertiary.dark }}>Disabled Text</h3>
          <p className={`${brandingOverrides.fonts.generalContent} text-xs`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue ex vitae tincidunt ultricies. Sed eleifend odio sit amet suscipit varius.
            Suspendisse nec erat vitae sem eleifend ullamcorper vitae et leo. Nulla dignissim ex nec diam iaculis ultricies. Aliquam eget arcu eu justo molestie iaculis. Nam imperdiet nibh vitae dui pharetra vulputate.
            Nulla porta vestibulum suscipit. Nulla felis eros, ullamcorper ultricies enim pharetra, egestas luctus magna.
          </p>
          <div className='float-left my-3 w-14 rounded-sm p-1 text-center text-xs text-white' style={{ backgroundColor: brandingOverrides.colours.secondary.dark }}>Button</div>
          <div className='float-left m-3 w-28 rounded-sm p-1 text-center text-xs text-white' style={{ backgroundColor: brandingOverrides.colours.tertiary.dark }}>Secondary Button</div>
        </div>
      </div>
    </div>
  )
}
