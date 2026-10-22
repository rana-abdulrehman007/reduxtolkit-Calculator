import React from 'react'
import Features from '../component/Features'

export default function Search() {
    return (

        <>

            <Hero />

            <Marketingarticle />
            <Marketingarticle />
            <Learningplateform />

            <Recommend />
            <Studentsay />
            <Educationlist/>




        </>
    )
}


function Hero() {
    return (
        <>

            <section className=' '>

                <div className='flex '>

                    <div className=' w-full relative '>

                        <img className=' object-cover absolute  h-50 w-full  ' src="./Rectangle 77 (2).png" alt="" />
                        <div className='relative z-10 p-5'>
                            <div className=' flex  justify-between'>
                                <input type="search" className='border-1  m-8 h-10 bg-white shadow-xl rounded-xl w-[80%]' name="" id="" placeholder='Search your favrouite course'

                                />
                                <button className='bg-[#49BBBD]  w-20 h-10 m-8 mr-3 rounded-xl text-white'>Search</button>

                            </div>

                            <div className='flex gap-5'>
                                <button className=' bg-white p-2 text-black w-20 h-10 m-8 mr-3 rounded-xl '>Subject</button>
                                <button className='bg-white p-2  w-20 h-10 m-8 mr-3 rounded-xl text-black'>Partner</button>
                                <button className='bg-white p-2 w-20 h-10 m-8 mr-3 rounded-xl text-black'>Program</button>
                                <button className='bg-white p-2 w-20 h-10 m-8 mr-3 rounded-xl text-black'>Language</button>
                                <button className=' bg-white p-2 w-22 h-10 m-8 mr-3 rounded-xl text-black'>Abaliability</button>

                                <button className='bg-white p-2  w-30 h-10 m-8 mr-3 rounded-xl text-black'>Learning type</button>

                            </div>
                        </div>
                    </div>



                </div>

            </section>




        </>
    )
}

function Marketingarticle() {
    return (
        <>

            <section className=' py-5  '>

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

function Learningplateform() {
    return (
        <>


            <section className='py-16  px-6'>
                <div className='mt-14 flex flex-col bg-blue-100  md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto'>

                    <div className='md:w-1/2 '>
                        <h1 className='font-bold  text-2xl text-[#252641]'>   Know about learning learning platform</h1>
                        <ul className='mt-8 space-y-6'>
                            <li className='flex items-center gap-4'>
                                <p className='text-[#696984] text-sm'> . Free E-book, video & consolation</p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <p className='text-[#696984] text-sm'> . Top instructors from around world</p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <p className='text-[#696984] text-sm'>. Top courses from your team</p>
                            </li>
                        </ul>
                        <button className='bg-[#49BBBD]  w-40 h-10 m-8 mr-3 rounded-xl text-white'>Start Learning Now</button>

                    </div>

                    <img src="./Group 57.png" alt="" className='object-contain size-50' />
                    <img src="./Group 63.png" alt="" className='object-contain' />



                </div>
            </section>

        </>
    )
}

function Recommend() {
    return (
        <>


            <section className=' bg-blue-100
                     py-15 '>

                <div className=' flex justify-between'>
                    <h2 className='text-xl font-bold'>Recommended for you </h2>
                    <a className='text-[#9DCCFF]' href="#">See all</a>
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

function Studentsay() {
    return (
        <>


            <section className=' mt-5 bg-blue-100 px-5 py-20'>
                <div className=' flex justify-between'>
                    <h2 className='text-xl font-bold mb-5'>What our students have to say </h2>
                </div>



                <div className='flex flex-row bg-white shadow-2xl max-w-5xl py-5 rounded-2xl mx-auto gap-10 '>
                    <div className='w-[50%]  '>
                        <img className='object-cover rounded-full size-70' src="./Mask Group.png" alt="" />

                    </div>

                    <div className='text-[#2F327D] w-[50%]'>


                        <h1 className='font-bold text-2xl p-2' >Savannah Nguyen</h1>
                        <p className='pt-3'>tanya.hill@example.com </p>
                        <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>

                    </div>



                </div>

            </section >


        </>
    )
}

function Educationlist() {
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