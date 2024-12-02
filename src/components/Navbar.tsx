import React from 'react';
import { FaHamburger } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { MdOfflineBolt } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";




export default function Navbar() {
  return (
    <div>
      <div className='grid xl:grid-cols-1 grid-cols-1'>
        <div className='p-5'>
          <div className='py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-items-center items-center gap-2'>
                {/* logoo */}
                <FaHamburger className='w-6 h-6 text-white hover:text-yellow-300' />
                {/* {search icon } */}
                <div style={{ position: "relative" }}>
                  <input className='rounded-3xl py-3 px-3 outline-none text-xs w-[300px] pr-10 hidden lg:block md:block' placeholder='Search your taste Today.' />
                  <IoSearchCircle className='w-8 h-8 text-gray-700 absolute right-1 top-1/2 transform -translate-y-1/2 hidden lg:block md:block' />
                </div>
              </div>


              <div className='flex justify-center items-center gap-2'>
                <MdOfflineBolt className='w-6 h-6 text-white hover:text-yellow-300 hidden lg:block md:block' />
                <p className='text:sm text-white hidden lg:block md:block'>ORDER NOW! And get in just
                  <span className='text-yellow-300'> 30 minutes.</span></p>


                {/* {cart icon } */}
                <RiShoppingCart2Fill className='inline-block w-8 h-8 rounded-full p-1 ring-2 relative text-sky-400 hover:text-yellow-300' />
                <img className='inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-yellow-300'
                  src="banner.png"
                  alt="User avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

