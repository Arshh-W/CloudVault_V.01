import React from 'react'

const left = () => {
  return (
   <div className="w-full lg:w-3/4 border-r border- flex flex-col justify-center px-6 md:px-14 py-16">
  
  {/* Heading */}
  <div className="max-w-4xl">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-light text-gray-900">
      The cloud that cares.
      <span className="block mt-2 bg-gradient-to-r from-[#8F6BFF] to-[#5E3BEE] bg-clip-text text-transparent">
        Designed for people, not just data.
      </span>
    </h1>

    {/* Small line */}
    <div className="w-28 h-1 bg-[#8F6BFF] rounded-full mt-6"></div>
  </div>

  {/* Description */}
  <p className="mt-5 text-gray-600 text-lg leading-8 max-w-3xl">
    At <span className="font-semibold text-[#8F6BFF]">CLOUD VAULT</span>,
    we’re reimagining the cloud as more than just storage. It’s your
    workspace, your library, your secure vault — all in one place.
    <br className="hidden md:block" />
    <br className="hidden md:block" />
    We believe technology should empower, not complicate. That’s why
    we built a cloud experience that’s fast, intuitive, secure, and
    designed for everyone.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 mt-10">
    <button className="bg-[#8F6BFF] hover:bg-[#6F4DFF] text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition duration-300">
      Get Started
    </button>

    <button className="border border-gray-300 hover:border-[#8F6BFF] hover:text-[#8F6BFF] px-8 py-3 rounded-2xl font-semibold transition duration-300">
      Learn More
    </button>
  </div>
</div>
  )
}

export default left
