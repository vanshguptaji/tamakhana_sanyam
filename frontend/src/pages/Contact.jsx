import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import Navbar from '../components/Navbar'
import "./Home.css"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-black'>Our Store</p>
          <p className=' text-black'>Near SBI bank <br /> Gullobara Darbhanga, Bihar, India</p>
          <p className=' text-black'>Tel: 9471638551 <br /> Email: tamakhana1@gmail.com</p>
          {/* <p className='font-semibold text-xl text-black'>Careers at Forever</p>
          <p className=' text-black'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button> */}
        </div>
      </div>

      <div className="container">
      <NewsletterBox />
      </div>
    </div>
  )
}

export default Contact
