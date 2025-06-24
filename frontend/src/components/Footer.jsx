import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='mt-8 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm text-black'>

        <div>
            <div className='font-sans text-4xl font-bold'>TAMAKHANA</div>
            <p className='w-full md:w-2/3 text-black'>
              Tamakhana is a website founded by Sanyam, dedicated to selling premium quality makhana (fox nuts). We are passionate about delivering healthy and delicious snacks to your doorstep.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-black'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-black'>
                <li>+1-212-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ tamakhana.com - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
