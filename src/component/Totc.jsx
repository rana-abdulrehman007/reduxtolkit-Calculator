import React from 'react'

export default function Totc() {
    return (
        <>

            <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20">

                <div className="mx-auto w-full max-w-2xl text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900">
                        <span className="text-[#2F327D]">What is</span>
                        <span className="text-[#00CBB8]">TOTC?</span>
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-[#696984]">
                        TOTC is a platform that allows educators to create online classes
                        whereby they can store the course materials online; manage assignments,
                        quizzes and exams; monitor due dates; grade results and provide students
                        with feedback all in one place.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-6xl flex flex-col md:flex-row gap-6 md:gap-10">
                    <img className="w-full md:w-1/2 h-auto min-w-0 object-contain" src="./Rectangle 19.png" alt="Online class" />
                    <img className="w-full md:w-1/2 h-auto min-w-0 object-contain" src="./Rectangle 21.png" alt="Learning platform" />
                </div>

            </section>



        </>
    )
}
