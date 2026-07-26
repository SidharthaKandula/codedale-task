import Navbar from '@/components/navbar/Navbar'
import Showcase from '@/components/showcase'
import Image_blur from '@/components/section1/Image_blur'
import React from 'react'
import Flow from '@/components/section1/Flow'
import Cards from '@/components/section1/Cards'
import FeatureSlider from '@/components/section1/FeatureSlider'

import Grantee from '@/components/section1/Grantee'
import Pets from '@/components/section1/Petsmart'
import Stats from '@/components/section1/Small'
import AwardsCarousel from '@/components/section1/AwardsCarousel'
import LogoWall from '@/components/section1/LogoWall'
import Footer from '@/components/section1/Footer'
import FloatingWidgets from '@/components/section1/FloatingWidgets'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Showcase/>
      <Image_blur/>
      <Flow/>
      <Cards/>
      <FeatureSlider />
      <Grantee/>
      <Pets/>
      <Stats/>
      <AwardsCarousel/>
      <LogoWall/>
      <Footer/>
      <FloatingWidgets/>
    </div>
  )
}

export default page
