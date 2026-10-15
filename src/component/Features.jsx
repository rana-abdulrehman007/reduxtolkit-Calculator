import React from 'react'

export default function Features() {
    return (
        <>


       <section className='py-16 px-6'>
  <div className='text-center'>
    <h1 className='text-2xl font-semibold text-[#2F327D]'>
      Our <span className='text-[#00CBB8]'>Features</span>
    </h1>
    <p className='text-[#696984] mt-2'>
      This very extraordinary feature, can make learning activities more efficient
    </p>
  </div>

  <div className='mt-14 flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto'>

    {/* Left image */}
    <img src="./Group 57.png" alt="" className='object-contain size-50' />
        <img src="./Group 63.png" alt="" className='object-contain' />

    

    {/* Right text */}
    <div className='md:w-1/2'>
      <h2 className='text-2xl font-semibold text-[#2F327D] leading-snug'>
        A <span className='text-[#00CBB8]'>user interface</span> designed for the classroom
      </h2>

      <ul className='mt-8 space-y-6'>
        <li className='flex items-center gap-4'>
          <img src="/icon1.png" alt="" className='w-10 h-10 shrink-0' />
          <p className='text-[#696984] text-sm'>Teachers don't get lost in the grid view and have a dedicated Podium space.</p>
        </li>
        <li className='flex items-center gap-4'>
          <img src="/icon2.png" alt="" className='w-10 h-10 shrink-0' />
          <p className='text-[#696984] text-sm'>TA's and presenters can be moved to the front of the class.</p>
        </li>
        <li className='flex items-center gap-4'>
          <img src="/icon3.png" alt="" className='w-10 h-10 shrink-0' />
          <p className='text-[#696984] text-sm'>Teachers can easily see all students and class data at one time.</p>
        </li>
      </ul>
    </div>
  </div>
</section>

        </>
    )
}
