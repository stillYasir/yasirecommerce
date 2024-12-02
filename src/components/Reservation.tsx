import React from 'react'


const Reservation = () => {
    return (
        <section className='bg-gradient-to-r from-black to-slate-700 py-10'>
            <div className='container mx-auto text-center'>
                <h2 className='text-3xl font-extrabold  mb-6 text-white'>Make A Reservation:</h2>

                <form className='max-w-md mx-auto'>
                    <div className='mb-4 text-black '>
                        <input type="text"
                            placeholder='Name'
                            className='w-full p-2 border border-gray-300 rounded-md'
                            required />
                    </div>
                    <div className='mb-4 text-black '>
                        <input type="email"
                            placeholder='Email'
                            className='w-full p-2 border border-gray-300 rounded-md'
                            required />
                    </div>
                    <div className='mb-4 text-black '>
                        <input type="date"
                            placeholder='Date'
                            className='w-full p-2 border border-gray-300 rounded-md'
                            required />
                    </div>
                    <div className='mb-4 text-black '>
                        <input type="time"
                            placeholder='Time'
                            className='w-full p-2 border border-gray-300 rounded-md'
                            required />
                    </div>
                    <div className='mb-4  '>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>
                            Reserved
                        </button>
                    </div>




                </form>
            </div>
        </section>
    )
}

export default Reservation