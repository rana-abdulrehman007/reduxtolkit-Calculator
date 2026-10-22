import React from 'react'

export default function Courses() {

  const courses = [
  { id: 1, title: "Design", image: "./frame.png" },
  { id: 2, title: "Development", image: "./frame1.png" },
  { id: 3, title: "Development", image: "./frame3.png" },
  { id: 4, title: "Business", image: "./frame4.png" },
  { id: 5, title: "Marketing", image: "./frame1.png" },
  { id: 6, title: "Photography", image: "./frame3.png" },
  { id: 7, title: "Acting", image: "./frame1.png" },
  { id: 8, title: "Business", image: "./frame4.png" },
];



  return (
    <>

      <section className='bg-[#9DCCFF] py-6  md:py-10 lg:py-16 pt-10'>
        <div className=' flex flex-col sm:flex-row justify-between'>

          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-[#252641] font-bold'>Welcome back, ready for your next lesson? </h2>
          <a className='text-[#49BBBD]' href="#">View hisotry</a>

        </div>

        <div className='grid grid-cols-1  px-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-2 md:gap-4 lg:gap-6'>

          <div className=' flex flex-col  shadow-xl bg-white rounded-2xl w-full  mx-auto   mt-10'>

            <img className='object-contain w-full h-auto min-w-0  rounded-2xl' src="./Rectangle 32.png" alt="" />
            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <div className='flex justify-around flex-col'>
              <img className='rounded-full object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <img className='object w-[95%] mb-5  object-contain h-1' src="./Group 273.png" alt="" />
              <p className='mb-2 text-xs flex justify-end'>Lesson 5 of 7</p>
            </div>

          </div>



          <div className=' flex flex-col  shadow-xl bg-white rounded-2xl w-full   mt-10'>

            <img className='object-contain w-full mx-auto   rounded-2xl' src="./Rectangle 32 (1).png" alt="" />
            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <div className='flex justify-around flex-col'>
              <img className='rounded-full object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <img className='object w-[95%] mb-5 object-contain h-1' src="./Group 273.png" alt="" />
              <p className='mb-2 text-xs flex justify-end'>Lesson 5 of 7</p>
            </div>

          </div>



          <div className=' flex flex-col  shadow-xl bg-white rounded-2xl w-full mx-auto  mt-10'>

            <img className='object-contain w-full h-auto min-w-0  rounded-2xl' src="./Group 42.png" alt="" />
            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <div className='flex justify-around flex-col'>
              <img className='rounded-full object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <img className='object w-[95%] mb-5  object-contain h-1' src="./Group 273.png" alt="" />
              <p className='mb-2 text-xs flex justify-end'>Lesson 5 of 7</p>
            </div>

          </div>

        </div>

      </section>



      <section className='py-4 md:py-8 lg:py-12 '>

        <div className='flex text-xl md:text-3xl lg:text-4xl font-bold'>
          <h1>Choice favourite course from top category</h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl mt-9 gap-4 md:gap-6 lg:gap-8">

          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-center shadow-2xl rounded-xl bg-white p-5"
            >
              <img
                className="object-contain size-10 mx-auto mb-5 bg-[#49BBBD4D]"
                src={course.image}
                alt={course.title}
              />

              <h1 className="mb-3 font-bold text-center text-2xl">
                {course.title}
              </h1>

              <p className="mb-5 text-[#696984] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod adipiscing elit, sed do eiusmod.
              </p>
            </div>
          ))}

        </div>


      </section>






      <section className=' bg-[#9DCCFF] py-4 md:py-8 lg:py-12 px-4 '>

        <div className=' flex justify-between'>
          <h2 className='text-xl md:text-2xl font-bold'>Recommended for you </h2>
          <a href="#">See all</a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-4 lg:gap-6 m-3 '>

          <div className=' flex flex-col  shadow-xl bg-white rounded-2xl w-full  h-auto   mt-10'>

            <img className='object-contain w-full h-auto   rounded-2xl' src="./Rectangle 33.png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>
            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>

          </div>


          <div className=' flex flex-col w-full  shadow-xl bg-white rounded-2xl  mt-10'>


            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


          <div className=' flex flex-col  w-full  shadow-xl bg-white rounded-2xl  mt-10'>

            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 33.png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


          <div className=' flex flex-col  w-full shadow-xl bg-white rounded-2xl  mt-10'>

            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


        </div>

      </section>



      <section className=' py-4 md:py-8 lg:py-12 px-4 '>

        <div className=' flex justify-between'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Get choice of your course </h2>
          <a href="#">See all</a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-4 lg:gap-6   m-3 justify-between'>

          <div className=' flex flex-col  shadow-xl bg-white rounded-2xl w-full h-auto  mt-10'>

            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 33.png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>
            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>

          </div>


          <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>


            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


          <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>

            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 33.png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


          <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>

            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


        </div>

      </section>



      <div className="px-4">
        <section className="bg-[#252641] max-w-5xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-8 rounded-3xl">

          <div className="flex flex-col items-center gap-6 md:gap-8 text-center">

            <h1 className="font-bold text-white text-xl md:text-2xl lg:text-4xl">
              Online coaching lessons for remote learning.
            </h1>

            <p className="text-sm md:text-base text-white max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>

            <button className="w-full sm:w-auto rounded-xl bg-[#49BBBD] text-white font-semibold px-8 py-3 hover:opacity-90 transition">
              Start learning now
            </button>

          </div>

        </section>
      </div>



      <section className='  py-4 md:py-8 lg:py-12 px-4 '>

        <div className=' flex justify-between'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>The course in personal development </h2>
          <a href="#">See all</a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-4 lg:gap-6  m-3 justify-between'>

          <div className=' flex flex-col  shadow-xl bg-white rounded-2xl w-full h-auto  mt-10'>

            <img className='object-contain w-full h-auto  rounded-2xl' src="./Rectangle 33.png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>
            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>

          </div>


          <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>


            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


          <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>

            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 33.png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


          <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>

            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


        </div>

      </section>






      <section className=' bg-[#9DCCFF] py-4 md:py-8 lg:py-12 px-4 pt-5  '>

        <div className=' flex justify-between'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Student are viewing </h2>
          <a href="#">See all</a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-4 lg:gap-6  m-3 justify-between'>

          <div className=' flex flex-col  shadow-xl bg-white rounded-2xl w-full h-auto  mt-10'>

            <img className='object-contain w-full h-auto  rounded-2xl' src="./Rectangle 33.png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>
            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>

          </div>


          <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>


            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


          <div className=' flex flex-col  w-full  h-auto shadow-xl bg-white rounded-2xl  mt-10'>

            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 33.png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


          <div className=' flex flex-col  w-full h-auto shadow-xl bg-white rounded-2xl  mt-10'>

            <img className='object-contain w-full h-auto rounded-2xl' src="./Rectangle 32 (2).png" alt="" />
            <div className='flex text-[#696984]  justify-between'>
              <p>Design</p>
              <p>3 Month</p>
            </div>

            <h1 className='p-5 text-sm font-bold text-[#252641]'
            >AWS Certified solutions Architect</h1>
            <p className='text-sm text-[#696984] text-center '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='flex justify-around'>
              <img className='rounded-5xl object-contain size-15 p-2 mb-2' src="./image 12.png" alt="" />
              <p className='text-lg font-bold text-[#49BBBD] mt-6'> <span className='line-through italic p-5'>$100</span>$80</p>
            </div>


          </div>


        </div>

      </section>





    </>
  )
}
