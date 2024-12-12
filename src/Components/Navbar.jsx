import React from 'react'
import { useNavigate } from 'react-router-dom'
function Navbar({change}) {
  const navigator =useNavigate();
  function GotoSyllabus(){
   navigator("./syllabus");
  }
  return (
    <section>
    <header className="text-gray-400 bg-gray-900 body-font z-50">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
        <span className="ml-3 text-xl font-bold" style={{letterSpacing:"2px"}}>SVCE</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-white" href='#SectionHome'>Home</a>
        <a className="mr-5 hover:text-white" href='#SectionAbout'>About</a>
        <a className="mr-5 hover:text-white" href='#SectionFaculty'>Faculty</a>
        <a className="mr-5 hover:text-white" href='#SectionEvents'>Events</a>
        <a className="mr-5 hover:text-white" href='#SectionAcheivments'>Acheivments</a>
        <a className="mr-5 hover:text-white" href='#Sectiongallery'>Gallery</a>
        <a className="mr-5 hover:text-white" onClick={GotoSyllabus} style={{cursor:"pointer"}}>Year</a>
        <a className="mr-5 hover:text-white" href='#SectionContact'>Contact</a>
      </nav>
      <button className="inline-flex items-center bg-blue-900 text-white text-TextColor border-0 py-1 px-3 focus:outline-none hover:bg-black hover:bg-TextColor rounded text-base mt-4 md:mt-0"
    onClick={change}
    >Dark / Light
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </div>
  </header>
  </section>

  )
}

export default Navbar