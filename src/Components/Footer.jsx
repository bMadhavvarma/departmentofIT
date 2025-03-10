import React from 'react'

function Footer() {
  return (
<footer class="text-gray-600 body-font bg-gray-800">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold underline text-gray-100 tracking-widest text-sm mb-3">Quick links</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svce.edu.in/admission.php' target='_blank'>Admissions</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svce.edu.in/placements.php' target='_blank'>Placements</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svce.edu.in/files/NIRF-2024.pdf' target='_blank'>NIRF_2024</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svce.edu.in/examinations.php' target='_blank'>Examination Cell</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold underline text-gray-100 tracking-widest text-sm mb-3">Institutions</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svce.edu.in/index.php' target='_blank'>SVCE Tirupati</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white"  href='https://svec.edu.in/index.php' target='_blank'>SVEC Tirupati</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svck.edu.in/index.php' target='_blank'>SVCK Kadapa</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svdc.edu.in/index.php' target='_blank'>SVDC Kadapa</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold underline text-gray-100 tracking-widest text-sm mb-3">Institutional Policies</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svce.edu.in/terms&condition.php' target='_blank'>Terms and Conditions</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svce.edu.in/privacypolicy.php' target='_blank'>Privacy Policy</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='https://svce.edu.in/index.php#' target='_blank'>Accessibility</a>
          </li>
         
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-100 tracking-widest text-sm mb-3">More Information</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
         <a href="https://svce.edu.in/" target='_blank'>

          <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Get Started</button>
         </a>
        </div>
        
      </div>
    </div>
  </div>
  <div class="bg-gray-800">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
        <span class="ml-3 text-xl font-bold text-white">SVCE</span>
      </a>
      <p class="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">@ SV Colleges - All Rights are Reserved
       
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-400 hover:text-gray-100" href='https://www.facebook.com/SVCETPT' target='_blank'>
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400 hover:text-gray-100" href='https://x.com/SVCE_Tirupati' target='_blank'>
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400 hover:text-gray-100" href='https://www.instagram.com/svcolleges/' target='_blank'>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400 hover:text-white" href='https://www.linkedin.com/school/sri-venkateswara-college-of-engineering-tirupati/' target='_blank'>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer