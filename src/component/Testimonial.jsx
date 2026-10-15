import React from 'react'

export default function Testimonial() {
    return (

        <>

            <section className='max-w-6xl mx-auto px-5 py-6'>

                <div className='flex flex-row gap-10 '>
                    <div className='text-[#2F327D] w-[50%]'>


                        <h1 className='font-bold text-2xl p-2' >What They Say?</h1>
                        <p className='pt-3'>TOTC has got more than 100k positive ratings from our users around the world. </p>
                        <p className='pt-3'>Some of the students and teachers were greatly helped by the Skilline.</p>
                        <p className='pt-3'>Are you too? Please give your assessment</p>
                        <button className='rounded-2xl bg-[#49BBBD] mt-5 p-2'>Write your assessment</button>
                    </div>
                    <div className='w-[50%] relative '>
                        <img className='object-contain' src="./Mask Group.png" alt="" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white p-4 shadow-lg">
                            <div>
                                <p className='text-sm'>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>

                                <h4 className="font-semibold text-[#2F327D]">Gloria Rose</h4>
                                <p className="text-xs text-slate-500 text-right">12 reviews at Yelp</p>
                            </div>
                            <div className="text-lg text-amber-400 pt-10">★★★★★</div>
                        </div>

                    </div>


                </div>

            </section >




        </>
    )
}
