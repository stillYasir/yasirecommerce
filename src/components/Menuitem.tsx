import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
    const productImages = [
        "burger5carousel.jpeg",
        "freepik__candid-image-photography-natural-textures-highly-r__28205.jpeg",
        "burger3carousel.jpeg",
        "burger1forcarousel.jpeg",
        "burger4carousel.jpeg",
        "burger6carousel.jpeg",
    ];
    return(
        <div className='relative text-center p-10'>
            <div className='absolute inset-0' 
            style={{
                backgroundImage: `url('bg-1.jpg')`,
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               zIndex:0,
               opacity: 0.1,
            }}/>
                <h1 className='font-bold text-4xl mb-4 text-white z-10 relative'>Most Requested Items</h1>
                <h1 className='text-3xl text-white z-10 relative'>ORDER NOW....</h1>


                <section id='Projects'
                className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 '>
{Array.from({ length: 6 }).map((_, index) => (
    <div key={index}
    className='w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative'>
        <a href="#">
            <img src={productImages[index]}
            alt={`Product ${index + 1}`} 
            className='h-80 w-72 object-cover rounded-t-xl'/>
            <div className='px-4 py-3 w-72'>
                <span className='text-slate-500 mr-3 uppercase text-xs'>Category</span>
                <p className='text-lg font-bold text-red-700 truncate block capitalize'>burger name {index + 1}</p>

                <div className='flex items-center'>
                    <p className='text-lg font-semibold text-black my-3 cursor-auto'>$149</p>

                    <del>
                        <br />
                        <p className='text-sm text-green-400 cursor-auto ml-2'>{" "} $199</p>
                    </del>


                    <div className='ml-auto'>
                    <FaShoppingCart className='w-5 h-5 text-red-600 hover:text-red-900'/> 
                    </div>
                </div>

            </div>
        </a>

    </div>
))}
                </section>

            </div>

        
    )
}
export default ProductCardGrid;