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
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <div className='container'>
      <BackgroundCarousel />
      </div>
      <div className='container'>
      <LatestCollection />
      </div>
      <div className='container'>
      <BestSeller />
      </div>
      <div className='container'>
      <OurPolicy />
      </div>
      <div className='container'>
      <NewsletterBox />
      </div>
      {/* <HeroSection />
      <ScrollingMarquee />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox /> */}
    </div>
  )
}

export default Home
