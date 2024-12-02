import React from 'react'

const Footer = () => {
  return (

    <div>

      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
        <nav className='flex flex-wrap justify-center gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-grey-700'>
          <a className='text-amber-500 hover:text-cyan-500' href="#">Home</a>
          <a className='text-amber-500 hover:text-cyan-500' href="#">About</a>
          <a className='text-amber-500 hover:text-cyan-500' href="#">Delivery</a>
          <a className='text-amber-500 hover:text-cyan-500' href="#">Contact</a>
        </nav>

        <div className='flex  justify-center space-x-5 transition-transform duration-300 ease-in-out transform hover:scale-105 '>
          <a href="" target='blank' rel='nofollow noopener'>
            <img src="https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000" alt="facebook logo" />
          </a>

          <a href="" target='blank' rel='nofollow noopener'>
            <img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="Instagram logo" />
          </a>

          <a href="" target='blank' rel='nofollow noopener'>
            <img src="https://img.icons8.com/?size=100&id=63676&format=png&color=000000" alt="printerest logo" />
          </a>

        </div>
        <p className='text-center text-amber-400 hover:text-cyan-500 font-medium mb-8'>© 2024 Yasir Kashif. All rights reserved.</p>
        <br />
        <br />
        <br />

      </footer>
    </div>

  )
}

export default Footer