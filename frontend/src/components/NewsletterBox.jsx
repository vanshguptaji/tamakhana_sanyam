import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className=' text-center'>
      <p className='text-2xl font-medium text-gray-800'>JOIN US now & get 5% off</p>
      <p className='text-gray-400 mt-3'>
      Join us now and get benefits of exclusive offers, discounts and more.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none pl-4 ' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>JOIN US</button>
      </form>
    </div>
  )
}

export default NewsletterBox
