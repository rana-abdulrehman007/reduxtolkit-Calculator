import React from 'react'

export default function HeroSection() {


  return (
    <>

      <section className=' bg-[#49BBBD] '>
        <div className='flex  justify-center py-20   '>
          <div className='w-[50%] '>
            <h2 className='text-5xl font-sans '> <span className='text-amber-500'>Studying</span> Online is now much easier</h2>
            <p className='pt-6 '> TOTC is an interesting platform that will teach you in more an interactive way</p>
            <p className='flex item-center'>Watch how it works</p>
            <button className='p-2 mt-15 rounded-2xl bg-blue-200'>Join for free</button>
          </div>
          <div className='flex justify-center'>
            <img className='object-contain w-full   h-[400px] max-w-[500px]' src="./girl.png" alt="" />
          </div>
        </div>


      </section>








    </>
  )
}