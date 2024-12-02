import React from 'react'

const Progresser = () => {
  return (
    <div>
      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-10'>

        {/* for step1 */}
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-black font-bold'>1</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-cyan-500'></div>
          </div>

          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-amber-500'>STEP: 1 Choose Your Dish.</h6>
            <p className='text-xs text-white'>Explore our delicious menu and choose your favorite dish.</p>
          </div>
        </div>


{/* for step2 */}
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-black font-bold'>2</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-cyan-500'></div>
          </div>

          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-amber-500'>STEP: 2 Customize Your Order.</h6>
            <p className='text-xs text-white'>Tailor your order to your taste!</p>
          </div>
        </div>

{/* for step3 */}
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-black font-bold'>3</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-cyan-500'></div>
          </div>

          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-amber-500'>STEP: 3 Place Your Order.</h6>
            <p className='text-xs text-white'>Ready To Eat? Proceed to checkout and place your order.</p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Progresser