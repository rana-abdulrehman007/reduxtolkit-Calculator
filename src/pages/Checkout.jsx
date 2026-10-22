import React from 'react'

export default function Checkout() {
    return (
        <>



            <section className='py-6 md:py-8 lg:py-10 px-4 max-w-7xl mx-auto pb-20 bg-blue-100  '>

                <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-12 '>

                    <div className='flex flex-col w-full h-auto  pb-10  p-5 bg-white rounded-2xl shadow-2xl '>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl  md:text-2xl font-bold'>Checkout</h1>
                            <p>Cart Type</p>

                            <div className='flex gap-10'>
                                <img className='object-contain size-20' src="./Paypal.png" alt="" />
                                <img className='object-contain size-20' src="./download 2.png" alt="" />
                                <img className='object-contain size-20' src="./download 1.png" alt="" />


                            </div>

                            <label htmlFor="">Name on Card</label>
                            <input className='border rounded-lg w-100 p-1' type="text" placeholder='Enter Name on Card' />
                            <label htmlFor=""> Card Number</label>
                            <input className='border rounded-lg w-100 p-1' type="text" placeholder='Enter Card Number' />

                            <label htmlFor="">Expiration Date ( MM/YY )</label>
                            <input className='border rounded-lg w-50 p-1' type="text" placeholder='Enter Expiration Date' />
                            <label htmlFor="">CVC</label>
                            <input className='border rounded-lg w-50 p-1' type="text" placeholder='Enter CVC' />
                            <button className='bg-[#49BBBD] text-white mt-5 rounded-xl h-10'>Confirm Payment</button>

                        </div>
                    </div>

                    <div className='flex flex-col w-[35%] py-15 bg-[#9DCCFF] rounded-2xl shadow-2xl '>
                        <h1 className='text-2xl '>Summary</h1>

                        <p className='mb-2'>Lorem ipsum dollar...</p>
                        <p className='mb-2'>$ 24.69</p>
                        <hr />
                        <p className='mb-2'>Lorem ipsum dollar...</p>
                        <p className='mb-2'>$ 24.69</p>

                        <hr />

                        <div className='flex   mt-5 justify-between'>
                            <h1>Subtotal</h1>
                            <p>$51.38</p>

                        </div>
                        <hr />
                        <div className='flex mt-5 justify-between'>
                            <h1>Coupon Discount</h1>
                            <p>0%</p>

                        </div>
                        <hr />
                        <div className='flex  mt-5 justify-between'>
                            <h1>TAX</h1>
                            <p>5</p>

                        </div>
                        <hr />

                        <div className='flex font-bold text-2xl  mt-5 justify-between'>
                            <h1>TOTAL</h1>
                            <p>56.38$</p>

                        </div>




                    </div>


                </div>


            </section>





            <Educationlisted />


        </>
    )
}



function Educationlisted() {
    return (
        <>


            <section className=' py-10'>
                <div className=' flex justify-between'>
                    <h2 className='text-xl mb-5 font-serif'>Top  Education offers and deals are listed here </h2>
                    <a href="#">See all</a>
                </div>

                <div className='  flex justify-center max-w-5xl mx-auto  gap-15  mb-20 '>

                    <div className="relative w-[300px] h-[300px] rounded-xl overflow-hidden">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="./Rectangle 32.png"
                            alt=""
                        />
                        <div className=" relative z-10 p-6 text-white">
                            <span className="inline-block bg-[#49BBBD] text-xs font-semibold px-3 py-3 rounded">
                                50%
                            </span>
                            <h1 className="mt-8 text-lg font-bold">Lorem ipsum dolor</h1>
                            <p className="mt-3  text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[300px] rounded-xl overflow-hidden">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="././Rectangle 33.png"
                            alt=""
                        />
                        <div className=" relative z-10 p-6 text-white">
                            <span className="inline-block bg-[#49BBBD] text-xs font-semibold px-3 py-3 rounded">
                                50%
                            </span>
                            <h1 className="mt-8 text-lg  font-bold">Lorem ipsum dolor</h1>
                            <p className="mt-3  text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[300px] rounded-xl overflow-hidden">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="./Group 43.png"
                            alt=""
                        />
                        <div className=" relative z-10 p-6 text-white">
                            <span className="inline-block bg-[#49BBBD] text-xs font-semibold px-3 py-3 rounded">
                                50%
                            </span>
                            <h1 className="mt-8 text-lg  font-bold">Lorem ipsum dolor</h1>
                            <p className="mt-3  text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>


                </div>
            </section>












        </>
    )
}