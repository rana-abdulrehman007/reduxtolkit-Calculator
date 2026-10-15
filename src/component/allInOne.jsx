import React from 'react'

export default function AllInOne() {
    return (
        <>
            <section>

                <div className='flex justify-center py-20  px-6 mx-auto w-[700px] h-[300px]'>
                    <div className='flex justify-center flex-col item-center'>
                        <h1 className='text-3xl text-center text-gray-900'><span className='text-[#00CBB8]'>All-In-One</span > Cloud Software.</h1>
                        <p className='mt-4 mx-auto text-[#696984] text-sm mx-w-xl'>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
                        </p>

                    </div>

                </div>




                <div className='flex justify-between  mb-15 mx-auto  h-[200px] w-auto item-center'>
                    <div className='bg-white-800 shadow-2xl h-[300px]'>
                        <img className='object-contain h-30 w-50' src="./Group 79.png" alt="" />
                        <h1 className='text-lg p-5 text-[#2F327D]'>Online Billing, Invoicing, & Contracts
                        </h1>
                        <p className='text-sm mx-auto text-[#696984] w-50'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>

                    </div>
                    <div className='bg-white-800 shadow-2xl h-[300px]'>
                        <img className='object-contain h-30 w-50' src="./Group 80.png" alt="" />


                        <h1 className='text-lg p-5 text-[#2F327D]'>Easy Scheduling & Attendance Tracking</h1>
                        <p className='text-sm mx-auto text-[#696984] w-50'
                        >Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                    </div>
                    <div className='bg-white-800 shadow-2xl h-[300px]'>
                        <img className='object-contain h-30 w-50' src="./Group 81.png" alt="" />

                        <h1 className='text-lg text-[#2F327D] p-5'>Customer Tracking</h1>
                        <p className=' text-center text-[#696984] text-sm mx-auto w-50'>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                    </div>

                </div>





            </section>











        </>
    )
}
