import React from 'react'

export default function ClassManagement() {
    return (
        <>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

    <div className="w-full md:w-1/2">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-[#2F327D]">
        <span className="text-[#00CBB8]">Class Management</span> Tools for Educators
      </h2>
      <p className="mt-4 text-sm sm:text-base text-[#696984]">
        Class provides tools to help run and manage the class such as Class
        Roster, Attendance, and more. With the Gradebook, teachers can review
        and grade tests and quizzes in real-time.
      </p>
    </div>

    <div className="w-full md:w-1/2">
      <img className="w-full h-auto object-contain" src="./Group 124.png" alt="Class management tools" />
    </div>

  </div>
</section>


        </>
    )
}
