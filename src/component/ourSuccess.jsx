import React from 'react'

export default function OurSuccess() {
  return (
    <>
      <section>
        <div className='flex justify-center py-20  px-6 md:px-8  mx-auto w-full  max-w-2xl min-h-auto'>
          <div className='flex justify-center flex-col items-center'>
            <h1 className='text-xl sm:text-3xl md:text-4xl text-center text-gray-900'>Our Success</h1>
            <p className='mt-4 mx-auto   text-sm sm:text-lg  md:text-xl max-w-xl'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
          </div>
        </div>
        <div className="mt-1 grid grid-cols-2 mx-auto  md:gap-8 sm:grid-cols-3 lg:grid-cols-5  mx-15 justify-between gap-4 text-center">
          <div>
            <h3 className="text-5xl font-light text-[#2F8FB5]">15K+</h3>
            <p className="mt-1 text-sm text-gray-800">Students</p>
          </div>
          <div>
            <h3 className="text-5xl font-light text-[#2F8FB5]">75%</h3>
            <p className="mt-1 text-sm text-gray-800">Total success</p>
          </div>
          <div>
            <h3 className="text-5xl font-light text-[#2F8FB5]">35</h3>
            <p className="mt-1 text-sm text-gray-800">Main questions</p>
          </div>
          <div>
            <h3 className="text-5xl font-light text-[#2F8FB5]">26</h3>
            <p className="mt-1 text-sm text-gray-800">Chief experts</p>
          </div>
          <div>
            <h3 className="text-5xl font-light text-[#2F8FB5]">16</h3>
            <p className="mt-1 text-sm text-gray-800">Years of experience</p>
          </div>
        </div>
      </section>
    </>
  )
}
