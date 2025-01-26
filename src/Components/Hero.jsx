import React from 'react'
import Banner from './Banner'
import HeroContent from './HeroContent'
import PublicUrl from './PublicUrl'

const Hero = () => {
  return (
    <div className='h-fit  text-black w-full overflow-hidden bg-white'>
      <Banner />
      <div className='flex flex-col sm:mt-8 md:flex-row justify-between md:items-center'>
        <HeroContent />
        {/* Hide PublicUrl on small devices, show it on medium and larger */}
        <div className='hidden sm:block'>
          <PublicUrl />
        </div>
      </div>
    </div>
  )
}

export default Hero
