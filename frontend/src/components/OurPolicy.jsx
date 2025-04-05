import React from 'react'
import lowSugar from '../assets/lowsugar.jpg'
import cholestrolFree from '../assets/CholestrolFree.jpg'
import highInCalcium from '../assets/highInCalcium.jpg'
import richInFibre from '../assets/richInFibre.jpg'
import richiniron from '../assets/richiniron.jpg'
import zeroTransFat from '../assets/zeroTransFat.jpg'

const OurPolicy = () => {
  return (
    <>
    <div className='bg-white rounded-3xl drop-shadow-[8px_8px_0px_#000] mb-20 p-20'>
    <h1 className='text-3xl font-extrabold text-center text-rose-600'>GUILT FREE SUPERSNACKS</h1>
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={cholestrolFree} className='w-24 m-auto mb-5' alt="" />
        <p className=' font-extrabold text-2xl'>Cholestrol Free</p>
        <p className=' text-gray-400 '>We offer Cholestrol free  Makhanas.</p>
      </div>
      <div>
        <img src={highInCalcium} className='w-24 m-auto mb-5' alt="" />
        <p className=' font-extrabold text-2xl'>High In Calcium</p>
        <p className=' text-gray-400'>Our Makhanas Offer high Calcium properties. </p>
      </div>
      <div>
        <img src={richInFibre} className='w-24 m-auto mb-5' alt="" />
        <p className=' font-extrabold text-2xl'>Rich In Fibre</p>
        <p className=' text-gray-400'>Our product is rich in fibre making it best product out there.</p>
      </div>
      <div>
        <img src={lowSugar} className='w-24 m-auto ' alt="" />
        <p className=' font-extrabold text-2xl'>Almost NO Sugar</p>
        <p className=' text-gray-400'>Our Product is a low Sugar Product.</p>
      </div>
      <div>
        <img src={richiniron} className='w-24 m-auto mb-5' alt="" />
        <p className=' font-extrabold text-2xl'>Rich In Iron</p>
        <p className=' text-gray-400'>Our Product provides high Mineral value.</p>
      </div>
      <div>
        <img src={zeroTransFat} className='w-24 m-auto mb-5' alt="" />
        <p className=' font-extrabold text-2xl'>Zero Trans Fat</p>
        <p className=' text-gray-400'>Our Product contains absolutely 0% Trans Fat</p>
      </div>

    </div>
    </div>
    </>
  )
}

export default OurPolicy
