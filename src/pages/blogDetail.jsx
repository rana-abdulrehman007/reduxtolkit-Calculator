import React from 'react'

export default function BlogDetail() {
    return (
        <>

            <Herosection />

            <Relatedblog/>






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

                <div className='flex flex-col   w-full p-5 mt-5   '>


                    <h1 className='text-[#2F327D] font-bold text-2xl'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>

                    <p className='text-sm text-[#696984] pt-5'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>

                    <p className='text-sm text-[#696984] pt-5 '>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                        TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                        TOTC is a platform </p>

                    <p className='text-sm text-[#696984] pt-5 '>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                        TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage </p>






                </div>


            </section>






        </>
    )
}


function Relatedblog() {
    return (
        <>


            <section className='bg-blue-100 py-15'>

                <div className=' flex justify-between'>
                    <h2 className='text-xl font-bold'>Related Blog </h2>
                    <a href="#">See all</a>
                </div>

                <div className='flex  gap-6 m-10 justify-between'>

                    <div className=' flex flex-col  shadow-2xl bg-white rounded-2xl w-[50%]  mt-10'>

                        <img className='object-contain w-full h-60  rounded-2xl' src="./Rectangle 19.png" alt="" />
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


                    <div className=' flex flex-col  w-[50%] shadow-2xl bg-white rounded-2xl  mt-10'>

                        <img className='object-contain w-full h-60 rounded-2xl' src="./Rectangle 32.png" alt="" />
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







        </>
    )
}