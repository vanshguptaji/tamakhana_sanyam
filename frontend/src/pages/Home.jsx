import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ScrollingMarquee from '../components/ScrollingMarquee'
import HeroSection from '../useful_components/HeroSection'
import Navbar from '../components/Navbar'
import BackgroundCarousel from '../useful_components/BackgroundCarousel'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <BackgroundCarousel/>
      {/* <HeroSection /> */}
      {/* <ScrollingMarquee /> */}
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
