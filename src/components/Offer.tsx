'use client'
import React from 'react'

type Offer = {
  title : string;
  discription : string;
}


const SpecialOffer : React.FC = () => {
  const offers : Offer[] =[
    {
      title : "Happy Hours",
      discription : "( 5pm to 7pm )Get 50% off on all products during happy hours."
    },

    {
      title : "Family Punch",
      discription : "( 2pm to 4pm )Get all products at 20% off."
    },

    {
      title : "Weekly Brunch",
      discription : "( 5pm to 7pm )Get all colddrink at 40% off."
    },
  ];





  const handleOfferClick = (discription : string) => {
    alert(discription);
  }


return(
  <section className='py-10'>
    <div className='container mx-auto text-center'>
      <h2 className='text-4xl font-bold mb-6 text-white'>Special Offerz</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{offers.map((Offer, index) => (
  <button key={index}
  onClick={() => handleOfferClick(Offer.discription)} 
  className='bg-white shadow-lg rounded-lg text-center hover:bg-grey-300 transition duration-300 transform hover:scale-105'>
    <h3 className='text-2xl font-semibold text-red-700'>{Offer.title}</h3>
    <p className='text-slate-700 mt-3'>{Offer.discription}</p>

  </button>
))}
      </div>

    </div>
  </section>
)
}




 
export default  SpecialOffer