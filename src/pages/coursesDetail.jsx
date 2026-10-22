import React from 'react'
import TotcClassroom from '../component/totcClassroom'

export default function CoursesDetail() {
    return (
        <>
            <Herosection />
            <Marketingarticle />

            <TotcClassroom />

            <Educationoffer />

        </>
    )
}


function Herosection() {
    return (
        <>
            <div>
                <img className=' object-contain w-full  ' src="./Rectangle 77 (2).png" alt="" />

            </div>
            <section className='  py-7 mb-10 '>

                <div className='flex gap-10  '>
                    <button className='w-22 h-12 rounded-xl bg-[#0000001A]'>Overview</button>
                    <button className='w-22 h-12 rounded-xl bg-[#0000001A]'>Overview</button>
                    <button className='w-22 h-12 rounded-xl bg-[#0000001A]'>Overview</button>
                    <button className='w-22 h-12 rounded-xl bg-[#49BBBD]'>Overview</button>

                </div>
                <div className='flex flex-col   w-[500px] p-5 mt-5 bg-[#9DCCFF4D]  '>

                    <div className='flex gap-4 '>
                        <div className=' bg-white  shadow-2xl rounded-2xl  h-30 w-30'>
                            <h2 className='text-sm font-bold  p-4'>4 out of 5</h2>
                            <h3>Top Raiting</h3>
                        </div>
                        <div className='flex flex-col'>
                            <h1>5 stars </h1>
                            <img className='object w-[50%] mt-3 ml-10  contain h-1' src="./Group 273.png" alt="" />
                            <h1>4 stars </h1>
                            <img className='object w-[50%] mt-3 ml-10  contain h-1' src="./Group 273.png" alt="" />

                            <h1>3 stars </h1>
                            <img className='object w-[50%] mt-3 ml-10 contain h-1' src="./Group 273.png" alt="" />

                            <h1>2 stars </h1>
                            <img className='object w-[50%] mt-3 ml-10  contain h-1' src="./Group 273.png" alt="" />

                        </div>

                    </div>
                    <div className='flex  flex-col'>
                        <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />

                        <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <img className='rounded-xl object-contain w-13 h-13 p-2 mb-2' src="./image 12.png" alt="" />
                        <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>

                    </div>










                </div>

                {/* <div className='flex  '>
                    <h1>$ 49.65  <span>$99.99 </span> <span>50% off</span></h1>

                </div> */}












            </section>


            {/* RIGHT COLUMN (price card) */}
            <aside className="w-full flex flex-row lg:w-[300px]  shrink-0">
                <div className="bg-white rounded-2xl shadow-xl p-3 ">
                    <img
                        className="w-full h-40 object-cover rounded-md"
                        src="./Rectangle 77 (2).png"
                        alt=""
                    />

                    <div className="px-2 py-4">
                        <div className="flex items-baseline gap-3">
                            <span className="text-2xl font-bold">$49.65</span>
                            <span className="text-sm text-gray-400 line-through">$99.99</span>
                            <span className="text-sm font-semibold text-gray-500">50% Off</span>
                        </div>

                        <p className="text-center text-xs text-[#49BBBD] mt-4">
                            11 hour left at this price
                        </p>

                        <button className="w-40 mt-4 py-2 rounded-md bg-[#49BBBD] text-white text-sm font-semibold">
                            Buy Now
                        </button>

                        <hr className="my-5 border-gray-300" />

                        <h3 className="font-bold text-base">This Course included</h3>
                        <ul className="mt-3 flex flex-col gap-2 text-[10px]">
                            <li>Money Back Guarantee</li>
                            <li>Access on all devices</li>
                            <li>Certification of completion</li>
                            <li>32 Modules</li>
                        </ul>

                        <hr className="my-5 border-gray-300" />

                        <h3 className="font-bold text-base">Training 5 or more people</h3>
                        <p className="mt-2 text-[9px] text-gray-500">
                            Class, launched less than a year ago by Blackboard co-founder
                            Michael Chasen, integrates exclusively...
                        </p>

                        <hr className="my-5 border-gray-300" />

                        <h3 className="font-bold text-base">Share this course</h3>
                        <div className="mt-3 flex gap-3">
                            <span className="w-4 h-4 rounded-full bg-[#49BBBD]" />
                            <span className="w-4 h-4 rounded-full bg-[#49BBBD]" />
                            <span className="w-4 h-4 rounded-full bg-[#49BBBD]" />
                            <span className="w-4 h-4 rounded-full bg-[#49BBBD]" />
                        </div>
                    </div>
                </div>
            </aside>



        </>
    )
}

function Marketingarticle() {
    return (
        <>


            <section className=' bg-[#9DCCFF] py-15 '>

                <div className=' flex justify-between'>
                    <h2 className='text-xl font-bold'>Marketing Article </h2>
                    <a href="#">See all</a>
                </div>

                <div className='flex  gap-6 m-3 justify-between'>

                    <div className=' flex flex-col  shadow-xl bg-white rounded-2xl w-[50%]  mt-10'>

                        <img className='object-contain w-full h-48  rounded-2xl' src="./Rectangle 33.png" alt="" />
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


                    <div className=' flex flex-col  w-[50%] shadow-xl bg-white rounded-2xl  mt-10'>


                        <img className='object-contain w-full h-48 rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
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


                    <div className=' flex flex-col  w-[50%] shadow-xl bg-white rounded-2xl  mt-10'>

                        <img className='object-contain w-full h-48 rounded-2xl' src="./Rectangle 33.png" alt="" />
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


                    <div className=' flex flex-col  w-[50%] shadow-xl bg-white rounded-2xl  mt-10'>

                        <img className='object-contain w-full h-48 rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
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


function Educationoffer() {
    return (
        <>
            <section className=''>
                <div className=' flex justify-between'>
                    <h2 className='text-xl font-serif'>Top  Education offers and deals are listed here </h2>
                    <a href="#">See all</a>
                </div>

                <div className='  flex justify-center max-w-5xl mx-auto  gap-15  mb-20 '>

                    <div className="relative w-[300px] h-[300px] rounded-xl overflow-hidden">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="./Rectangle 19.png"
                            alt=""
                        />
                        <div className=" relative z-10 p-6 text-white">
                            <span className="inline-block bg-red-500 text-xs font-semibold px-3 py-3 rounded">
                                50%
                            </span>
                            <h1 className="mt-8 text-lg text-black font-bold">FOR INSTRUCTORS</h1>
                            <p className="mt-3 text-black text-sm">
                                TOTC's school management software helps traditional and online schools manage scheduling,
                            </p>
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[300px] rounded-xl overflow-hidden">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="./Rectangle 19.png"
                            alt=""
                        />
                        <div className=" relative z-10 p-6 text-white">
                            <span className="inline-block bg-red-500 text-xs font-semibold px-3 py-3 rounded">
                                50%
                            </span>
                            <h1 className="mt-8 text-lg text-black font-bold">FOR INSTRUCTORS</h1>
                            <p className="mt-3 text-black text-sm">
                                TOTC's school management software helps traditional and online schools manage scheduling,
                            </p>
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[300px] rounded-xl overflow-hidden">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="./Rectangle 19.png"
                            alt=""
                        />
                        <div className=" relative z-10 p-6 text-white">
                            <span className="inline-block bg-red-500 text-xs font-semibold px-3 py-3 rounded">
                                50%
                            </span>
                            <h1 className="mt-8 text-lg text-black font-bold">FOR INSTRUCTORS</h1>
                            <p className="mt-3 text-black text-sm">
                                TOTC's school management software helps traditional and online schools manage scheduling,
                            </p>
                        </div>
                    </div>


                </div>
            </section>


        </>
    )
}







