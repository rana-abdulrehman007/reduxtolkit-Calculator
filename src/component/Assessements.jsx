import React from 'react'

export default function Assessements() {
    return (
        <>

            <section className='max-w-5xl mx-auto px-2 sm:px-4 md:px-8'>
                <div className='flex flex-col sm:flex-row md:flex-row  items-center  justify-between gap-10'>
                    <div>
                        <img className='w-full h-auto   p-4  object-contain' src="./Group 92.png" alt="" />
                    </div>
                    <div className=' w-full md:w-1/2'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2F327D] leading-relaxed'>
                            Assessments, <br />
                            <span className='text-[#00CBB8]'>Quizzes</span>, Tests
                        </h2>
                        <p className='mt-4 text-sm sm:text-base md:text-xl text-[#696984] max-w-sm'>
                            Easily launch live assignments, quizzes, and tests. Student results
                            are automatically entered in the online gradebook.
                        </p>
                    </div>

                </div>


            </section>






        </>
    )
}
