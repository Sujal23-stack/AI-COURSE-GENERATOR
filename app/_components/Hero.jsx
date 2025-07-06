import React from 'react'

const Hero = () => {
  return (
  <section className="bg-white lg:grid  lg:place-content-center">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-32 sm:px-6 sm:py-32 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-purple-700 sm:text-4xl">
        AI-COURSE GENERATOR
        <br />
        <strong className="text-4xl font-bold text-black"> CREATE COURSE WITH AI </strong>
    
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Instantly create personalized learning paths powered by AI.Tailor your journey with AI-driven course generation.
        <br />
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6 ">
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 "
          href="/dashboard"
        >
          Get Started
        </a>

        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero;
