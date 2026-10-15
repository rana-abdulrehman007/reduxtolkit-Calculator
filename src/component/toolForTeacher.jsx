import React from 'react'

export default function ToolForTeacher() {
    return (
        <>

            <section className='max-w-6xl mx-auto px-6 py-16'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-12'>

                    {/* left: text */}
                    <div className='md:w-1/2'>
                        <h2 className='text-3xl font-semibold text-[#2F327D] leading-relaxed'>
                            <span className='text-[#00CBB8]'>Tools</span> For Teachers <br /> And Learners
                        </h2>
                        <p className='mt-4 text-sm text-[#696984] max-w-sm'>
                            Class has a dynamic set of teaching tools built to be deployed and used
                            during class. Teachers can handout assignments in real-time for students
                            to complete and submit.
                        </p>
                    </div>

                    {/* right: image */}
                    <img src="./Group 122.png" alt="" className='md:w-1/2 max-w-md object-contain' />

                </div>
            </section>




        </>
    )
}
