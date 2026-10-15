import React from 'react'

export default function NewsAndResources() {
    return (
        <>
            <section className='max-w-6xl mx-auto px-5'>
                <div className=' '>

                    <div className='text-[#2F327D]'>
                        <h1 className='text-2xl text-center font-bold p-5'>Lastest News and Resources</h1>
                        <p className='text-center'>See the developments that have occurred to TOTC in the world</p>

                    </div>

                </div>
                <div className='flex gap-15 '>
                    <div className=' flex flex-col  w-[50%]  mt-10'>

                        <img className='object-contain w-full h-60 rounded-2xl' src="./Rectangle 32.png" alt="" />
                        <h3 className='p-5 text-[#252641]'
                        >Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <p className='text-sm text-[#696984] '>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <p className='underline pt-5 text-[#696984]'
                        >Read more</p>
                    </div>
                    <div className='flex flex-col gap-14 '>
                        <div className='flex flex-row gap-5 '>
                            <img className='object-contain h-24 w-35 mt-5 ' src=".\Rectangle 33.png" alt="" />
                            <div className='p-3 text-[#252641]' >

                                <h4 className='text-[#252641]'> Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h4>
                                <p>Class Technologies Inc., the company that created Class,...</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-5 '>
                            <img className='object-contain h-24 w-35 mt-4 ' src=".\Group 42.png" alt="" />
                            <div className='p-2 text-[#252641]'>
                                <h4>Zoom’s earliest investors are betting millions on a better Zoom for schools</h4>
                                <p>Zoom was never created to be a consumer product. Nonetheless, the...</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-5 '>
                            <img className='object-contain h-24 w-35 ' src="./Group 43.png" alt="" />
                            <div className='p-2 text-[#252641]'>
                                <h4>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h4>
                                <p>This year, investors have reaped big financial returns from betting on Zoom...</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>




        </>
    )
}
