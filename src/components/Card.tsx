import React from 'react'

const Card = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10'>
        <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Burgers</h2>
        <p className='text-white mb-4 '>Expeience the best burgers in the town . made with fresh ingredients and grilled to perfection</p>
        <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200'>Order Now</button>


        <h3 className='text-2xl font-semibold mt-6 mb-2 text-center'>COMING SOON: Our new menu !</h3>
        <ul>
          <li> <strong>Chessy BBQ Bacon Burger: </strong>
           a classic burger with a cheezy twist 
           </li>
          <br />
          <li> <strong>Spicy Jalapino Burger : </strong>
           A spicy burger with jalapeno peppers and onions
           </li>
          <br />
          <li> <strong>Mushrooms Swiss Burger : </strong>
           A classic burger with mushrooms and swiss cheese to make it extra special.
           </li>
          <br />
          <li> <strong>Avocados Veggie Burger : </strong>
           A vegan burger with avocado and lettuce to make it extra healthy and tasty.
           </li>
          <br />

        </ul>
        </div>
        <div className='md:w-1/2 mt-6 md:mt-0'>
        <img src="image for bg.jpg"
       alt="Burger image" 
       className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/>
        </div>

      
    </section>
  )
}

export default Card