import React from 'react'

export default function HeroSection() {


  return (
    <>


<section className="bg-[#49BBBD]">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:flex-row lg:justify-between lg:gap-12 lg:px-8 lg:py-20">

    <div className="w-full text-center lg:w-1/2 lg:text-left">
      <h2 className="font-sans text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        <span className="text-amber-500">Studying</span> Online is now much easier
      </h2>

      <p className="pt-4 text-base sm:text-lg md:pt-6">
        TOTC is an interesting platform that will teach you in more an interactive way
      </p>

      <p className="flex items-center justify-center pt-4 lg:justify-start">
        Watch how it works
      </p>

      <button className="mt-6 rounded-2xl bg-blue-200 px-6 py-3 md:mt-8">
        Join for free
      </button>
    </div>

    <div className="flex w-full justify-center lg:w-1/2">
      <img
        className="h-auto w-full max-w-[280px] object-contain sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px]"
        src="./girl.png"
        alt="Girl studying online"
      />
    </div>

  </div>
</section>




























    </>
  )
}