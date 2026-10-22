import React from 'react'

export default function Login() {
  return (
    <>

      <section className='   bg-white  
         shadow-2xl  py-15 md:py-18 lg:py-20 px-4 '>

        <div className='flex flex-col md:flex-row   max-w-7xl mx-auto  gap-4 md:ga-8 '>
            <div className='flex'>
            <img className='object-contain w-full h-auto   ' src="./Rectangle 77.png" alt="" />
            </div>

            <div className='w-full h-auto flex  px-15 py-10 flex-col bg-white rounded-xl shadow-2xl'>
              <h2 className='font-bold text-sm md:text-2xl'>Welcome to lorem..!</h2>
              <div className='flex gap-2 mt-10  '>
                <button className='w-60 h-12 rounded-xl  bg-[#49BBBD99] '>Login</button>
                 <button className='w-60 h-12 rounded-xl  bg-[#49BBBD99] '>Register</button>
              </div>
              <p className=' font-mono mt-10 text-sm md:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              
                 <label htmlFor="">UserName</label>
                <input className='w-60 h-10 p-3 rounded-2xl  mb-5 mt-2 border-blue-300 border-2' type="text" placeholder='Enter your user name' name="" id="" />
                    <label htmlFor="">Password</label>

                 <input className='w-60 h-10 p-3 rounded-2xl  border-blue-300 border-2' type="password" placeholder='Enter your Password' name="" id="" />
                     <button className='w-60 h-12 mt-8 rounded-xl  bg-[#49BBBD99] '>Login</button>

            </div>
        </div>

        


      </section>


      <section className='  
         shadow-2xl  bg-white  py-10 md:py-14 lg:py-16'>

        <div className='flex flex-col md:flex-row  max-w-7xl mx-auto  gap-4 md:gap-8 '>
            <div className='flex'>
            <img className='object-contain w-full h-auto  ' src="./Rectangle 77 (1).png" alt="" />
            </div>

            <div className='w-full h-auto flex  px-15 py-10 flex-col bg-white rounded-xl shadow-2xl'>
              <h2 className='font-bold text-sm md:text-xl'>Welcome to lorem..!</h2>
              <div className='flex gap-2 mt-10  '>
                <button className='w-60 h-12 rounded-xl  bg-[#49BBBD99] '>Login</button>
                 <button className='w-60 h-12 rounded-xl  bg-[#49BBBD99] '>Register</button>
              </div>
              <p className=' font-mono mt-10 text-sm md:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <label htmlFor="">Email Address</label>
                <input className='w-60 h-10 p-3 rounded-2xl  mb-5 mt-2 border-blue-300 border-2' type="email" placeholder='Enter your Email Address' name="" id="" />

                 <label htmlFor="">UserName</label>
                <input className='w-60 h-10 p-3 rounded-2xl mb-5 mt-2 border-blue-300 border-2' type="text" placeholder='Enter your user name' name="" id="" />
                    <label htmlFor="">Password</label>

                 <input className='w-60 h-10 p-3 rounded-2xl  border-blue-300 border-2' type="password" placeholder='Enter your Password' name="" id="" />
                     <button className='w-60 h-12 mt-8 rounded-xl  bg-[#49BBBD99] '>Register</button>

            </div>
        </div>

        


      </section>









    </>
  )
}
