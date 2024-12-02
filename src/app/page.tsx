import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import ProductCardGrid from '@/components/Menuitem'
import Navbar from '@/components/Navbar'
import SpecialOffer from '@/components/Offer'
import ProductList from '@/components/ProductList'
import Progresser from '@/components/Progresser'
import Testimonals from '@/components/Testimonals'
import Reservation from '@/components/Reservation'
import React from 'react'

function App() {
  return (
    <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen text-white' >
      <Navbar/>
      <Carousel/>
      <Progresser/>
      <ProductList/>
      <Banner/>
      <ProductCardGrid/>
      <SpecialOffer/>
      <Card/>
      <Reservation/>
      <Testimonals/>
      <Footer/>

    </div>
  )
}

export default App