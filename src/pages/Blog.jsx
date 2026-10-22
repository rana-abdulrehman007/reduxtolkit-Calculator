import React from 'react'

export default function Blog() {
    return (
        <>

            <section className='bg-blue-100  flex flex-row py-4 md:py-8 lg:py-10 mx-auto maxw-7xl '>


                <div className='flex flex-col lg:flex-row px-5 py-4 lg:py-6 '>
                    <div className='  w-full '>
                        <h2 className='text-sm md:text-2xl'>By Themadbrains in <span className='text-blue-400 text-xl md:text-2xl'>inspiration</span></h2>
                        <h2 className='text-[#2F327D] text-2xl md:text-4xl mt-4 font-bold'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>

                        <p className='text-[#696984] mt-4 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <button className='bg-[#49BBBD] mt-8 rounded-2xl p-2'>Start learning now</button>

                    </div>
                    <div className='  w-full h-auto mt-2 '>
                        <img className='object-contain   ' src="./Rectangle 32.png" alt="" />
                    </div>

                </div>

            </section>

            <section className='flex max-w-5xl m-10 py-4 md:py-8 mx-auto'>


                <div className='text-lg  md:text-2xl flex mb-10 font-serif  '>
                    <h1>Reading blog  list</h1>
                </div>



                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-6  justify-center '>
                    <div className='flex flex-row gap-2 '>
                        <img className='object-contain w-full h-auto rounded-xl ' src="./Group 42.png" alt="" />

                    </div>
                    <div className='flex flex-row gap-2'>
                        <img className='object-contain w-full h-auto  rounded-xl ' src="./Group 236.png" alt="" />

                    </div>
                    <div className='flex flex-row gap-2'>
                        <img className='object-contain w-full h-auto rounded-xl ' src="./Group 236 (1).png" alt="" />

                    </div>
                    <div className='flex flex-row gap-2'>
                        <img className='object-contain w-full h-auto rounded-xl ' src="./Group 252.png" alt="" />

                    </div>


                </div>
            </section>


            <section className='bg-blue-100 py-10 md:py-12 lg:py-16'>

                <div className=' flex justify-between'>
                    <h2 className='text-xl md:text-2xl lg:text-4xl font-bold'>Related Blog </h2>
                    <a href="#">See all</a>
                </div>

                <div className='flex flex-col  md:flex-row  gap-6 m-10 justify-between'>

                    <div className=' flex flex-col  shadow-2xl bg-white rounded-2xl w-full h-auto mt-10'>

                        <img className='object-contain w-full h-auto  rounded-2xl' src="./Rectangle 19.png" alt="" />
                        <h3 className='p-5 text-[#252641]'
                        >Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
                        <p className='text-sm text-[#696984] '>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className='flex justify-around '>
                            <p className='underline pt-5 mr-5 text-[#696984]'
                            >Read more</p>
                            <p className='mt-5'>251,323</p>

                        </div>
                    </div>


                    <div className=' flex flex-col  w-full  h-auto shadow-2xl bg-white rounded-2xl  mt-10'>

                        <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32.png" alt="" />
                        <h3 className='p-5 text-[#252641]'
                        >Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />

                        <p className='text-sm text-[#696984] '>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className='flex justify-around '>
                            <p className='underline pt-5 mr-5 text-[#696984]'
                            >Read more</p>
                            <p className='mt-5'>251,323</p>

                        </div>

                    </div>


                </div>

            </section>


            <section className=' py-8 md:py-10 lg:py-12'>

                <div className=' flex justify-between'>
                    <h2 className='text-xl md:text-3xl font-bold'>Marketing Articles </h2>
                    <a href="#">See all</a>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-2 md:gap-6 m-3 justify-between'>

                    <div className=' flex flex-col shadow-xl bg-white rounded-2xl w-full h-auto  mt-10'>

                        <img className='object-contain w-full h-auto  rounded-2xl' src="./Rectangle 33.png" alt="" />
                        <div className='flex text-[#696984]  justify-between'>
                            <p>Design</p>
                            <p>3 Month</p>
                        </div>
                        <h1 className='p-5 text-sm font-bold text-[#252641]'
                        >AWS Certified solutions Architect</h1>
                        <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className='flex justify-around'>
                            <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
                            <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
                        </div>

                    </div>


                    <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>


                        <img className='object-contain w-full h-auto rounded-2xl' src="./Group 42.png" alt="" />
                        <div className='flex text-[#696984]  justify-between'>
                            <p>Design</p>
                            <p>3 Month</p>
                        </div>

                        <h1 className='p-5 text-sm font-bold text-[#252641]'
                        >AWS Certified solutions Architect</h1>
                        <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className='flex justify-around'>
                            <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
                            <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
                        </div>


                    </div>


                    <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>

                        <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32.png" alt="" />
                        <div className='flex text-[#696984]  justify-between'>
                            <p>Design</p>
                            <p>3 Month</p>
                        </div>

                        <h1 className='p-5 text-sm font-bold text-[#252641]'
                        >AWS Certified solutions Architect</h1>
                        <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className='flex justify-around'>
                            <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
                            <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
                        </div>


                    </div>


                    <div className=' flex flex-col  w-full shadow-xl bg-white rounded-2xl  mt-10'>

                        <img className='object-contain w-full h-auto  rounded-2xl' src="./Group 43.png" alt="" />
                        <div className='flex text-[#696984]  justify-between'>
                            <p>Design</p>
                            <p>3 Month</p>
                        </div>

                        <h1 className='p-5 text-sm font-bold text-[#252641]'
                        >AWS Certified solutions Architect</h1>
                        <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className='flex justify-around'>
                            <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
                            <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
                        </div>


                    </div>


                </div>


            </section>


        </>
    )
}
