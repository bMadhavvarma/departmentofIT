import React from 'react'

function Laboratory() {
  return (
    <section className="text-TextColor bg-BgColor body-font">
      <h1 className='text-red-700 text-2xl font-extrabold text-center underline'>DEPARTMENT LABS</h1>
    <div className="container px-5 py-7  flex flex-wrap">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <ul className='font-bold list-disc ml-6' >
          <li>Problem Solving using C Lab</li>
          <li>It Workshop</li>
          <li>Data Structure</li>
          <li>Object Oriented Programming Through Java Lab </li>
          <li>Database Management System lab</li>
          <li>Design and Analysis of Algorithms Lab</li>
          <li>Python Programming Lab</li>
          <li>Operating Systems Lab</li>
          <li>UML And Computer Networks Lab</li>
          <li>Data Warehousing & Mining Lab</li>
          <li>Software Testing Lab</li>
          <li>Web Technologies Lab</li>
          <li>Scripting Languages Lab</li>
          <li>Mobile Application Development Lab</li>
        </ul>
        </div>
        <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step"/>
      </div>
    </div>
  </section>
  )
}

export default Laboratory