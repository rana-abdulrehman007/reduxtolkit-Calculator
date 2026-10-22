import React from 'react'

export default function NewsAndResources() {
    return (
        <>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

                <div className="text-center text-[#2F327D]">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Latest News and Resources</h2>
                    <p className="mt-3 text-sm sm:text-base md:text-lg">
                        See the developments that have occurred to TOTC in the world
                    </p>
                </div>

                <div className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-12">

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <img className="w-full h-auto object-cover rounded-2xl" src="./Rectangle 32.png" alt="Class news" />
                        <h3 className="mt-4 text-[#252641] font-semibold">
                            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                        </h3>
                        <p className="mt-2 text-sm text-[#696984]">
                            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                        </p>
                        <a href="#" className="mt-4 underline text-[#696984]">Read more</a>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col gap-6">

                        <div className="flex flex-row items-start gap-4">
                            <img className="w-28 sm:w-36 h-auto shrink-0 object-cover rounded-xl" src="./Rectangle 33.png" alt="Series A financing" />
                            <div className="flex-1 min-w-0 text-[#252641]">
                                <h4 className="text-sm sm:text-base font-semibold">
                                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                                </h4>
                                <p className="mt-1 text-sm text-[#696984]">Class Technologies Inc., the company that created Class,...</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-start gap-4">
                            <img className="w-28 sm:w-36 h-auto shrink-0 object-cover rounded-xl" src="./Group 42.png" alt="Zoom investors" />
                            <div className="flex-1 min-w-0 text-[#252641]">
                                <h4 className="text-sm sm:text-base font-semibold">
                                    Zoom's earliest investors are betting millions on a better Zoom for schools
                                </h4>
                                <p className="mt-1 text-sm text-[#696984]">Zoom was never created to be a consumer product. Nonetheless, the...</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-start gap-4">
                            <img className="w-28 sm:w-36 h-auto shrink-0 object-cover rounded-xl" src="./Group 43.png" alt="Blackboard CEO raises" />
                            <div className="flex-1 min-w-0 text-[#252641]">
                                <h4 className="text-sm sm:text-base font-semibold">
                                    Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms
                                </h4>
                                <p className="mt-1 text-sm text-[#696984]">This year, investors have reaped big financial returns from betting on Zoom...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
