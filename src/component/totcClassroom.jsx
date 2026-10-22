import React from 'react'

export default function TotcClassroom() {
    return (

        <>
            <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12">


                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#2F327D]">
                            Everything you can do in a physical classroom,{" "}
                            <span className="text-[#00CBB8]">you can do with TOTC</span>
                        </h1>
                        <p className="mt-4 text-sm sm:text-base text-[#696984]">
                            TOTC's school management software helps traditional and online schools
                            manage scheduling, attendance, payments and virtual classrooms all in
                            one secure cloud-based system
                        </p>
                        <a href="#" className="mt-4 inline-block underline text-[#2F327D]">
                            Learn more
                        </a>
                    </div>


                    <div className="w-full md:w-1/2">
                        <img className="w-full h-auto object-contain" src="./Group 17.png" alt="Virtual classroom" />
                    </div>

                </div>
            </section>








        </>
    )
}
