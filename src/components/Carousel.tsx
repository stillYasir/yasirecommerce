import React from 'react'

const Carousel = () => {
  return (
    <div>
      <section className='bg-gradient-to-r from-black to-grey-700'>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col'>
              <a href=""
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                <img src="burger1forcarousel.jpeg"
                  alt=""
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition transform-duration-500 ease-in-out'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Classic Bites {""}</h3>
              </a>
            </div>


            {/* for second img */}
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 '>
              <a href=""
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 '>
                <img src="burger2forcarousel.jpeg"
                  alt="burger 2"
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition transform-duration-500 ease-in-out'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>{" "}Gourmet Grills {" "}</h3>
              </a>
<br />


              <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
                <a href=""
                  className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                  <img src="freepik__candid-image-photography-natural-textures-highly-r__28205.jpeg"
                    alt="burger 3"
                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition transform-duration-500 ease-in-out' 
                    />
                  <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>{" "}Spicy Bites {""}</h3>
                </a>




                <a href=""
                  className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                  <img src="freepik__candid-image-photography-natural-textures-highly-r__28204.jpeg"
                    alt="burger 4"
                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition transform-duration-500 ease-in-out'
                    />
                  <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'> {" "}Veggie{" "}</h3>
                </a>
              </div>


            </div>


            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col'>
              <a href=""
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                <img src="burger6carousel.jpeg"
                  alt="burger 5"
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition transform-duration-500 ease-in-out' />
                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'> {" "}Cheesy Delights{" "}</h3>
              </a>
            </div>



          </div>
        </div>
      </section>
    </div>
  )
}

export default Carousel