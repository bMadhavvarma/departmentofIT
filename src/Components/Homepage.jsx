import React from 'react'
import '../index.css'

function Homepage() {
  return (
    <section className="text-gray-600 bg-BgColor text-TextColor body-font" id="SectionHome">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-TextColor">Information Technology
          <br class="hidden lg:inline-block"/><span className='text-red-600 font-bold'>SVCE</span> Tirupati
        </h1>
        <p className="mb-8 leading-relaxed text-TextColor font-semibold"> Information Technology has emerged as one of the most sought after branches of engineering in today’s world. Information Technology focuses on utilizing computers and telecommunications in order to control, gather, store and circulate information.</p>
        <div className="flex justify-center">
          <a href="https://svce.edu.in/it.php" target='_blank'>
        <button class="btn relative inline-grid place-content-center px-6  h-10 uppercase bg-[#080312] text-[#afffff] cursor-pointer shadow-[10px_10px_20px_rgba(0,0,0,0.6)] transition-colors duration-250">
  Know more
</button></a>
<a href="https://svce.edu.in/" target='_blank'><button class="group relative px-4  mx-2 h-10  bg-transparent text-TextColor font-extrabold cursor-pointer outline-none border-2 border-TextColor  transition-all duration-300">
    <span class="box relative block overflow-hidden text-center transition-all duration-500">
        Visit College Site
    </span>
</button></a>

        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
      </div>
    </div>
  </section>
  )
}

export default Homepage