import React from 'react'

const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 opacity-20'>
        <img src="bnaner 2.jpg" 
        alt="T-Shirt Design." 
        className='w-full h-full object-cover'/>

      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-white sm:text-5xl font-bold mb-4'>
        Discover our menu
        </h2>
        <p className='text-white text-lg text-center mb-6 amx-w-xl'>
          Shop Now for Exclusive Burger Discounts!
        </p>
       <button
       type='button'
       className='bg-yellow-300 hover:bg-yellow-500 text-black text-sm font-semibold py-3 px-6 rounded-full shadow-lg transition ease-in duration-300'>
        Exclusive Deals Launch at 12PM!
       </button>
      </div>
    </div>
  )
}

export default Banner