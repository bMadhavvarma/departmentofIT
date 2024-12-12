import React from 'react'

function Acheivments() {
  return (
    <section class="text-gray-600 bg-BgColor text-TextColor body-font" id="SectionAcheivments">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-0">
        <h1 class="sm:w-2/5 text-red-800 font-bold underline title-font text-2xl mb-2 sm:mb-0">STUDENT ACHIEVEMENTS</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-TextColor">Our department proudly boasts achievements such as being selected for the 2020 UIF program, winning 3 JNTUA gold medals, and securing a national-level gold medal in boxing.</p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-0 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div>
        <h2 class="text-xl font-medium title-font text-TextColor mt-5">2020-UIF program</h2>
        <p class="text-base leading-relaxed mt-2 text-TextColor">Our Student AS Haritha & Abdhul Wadood of academic year 2018-2022 batch have Selected for 2020-UIF Program.</p>
      
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-0">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504"/>
        </div>
        <h2 class="text-xl font-medium title-font text-TextColor mt-5">JNTUA gold medals</h2>
        <p class="text-base leading-relaxed mt-2 text-TextColor">Our department Students P.Sravani (14BF1235)/M.VishnuPriya(15B F1235)/C.Manasa (16BF1208) have won JNTUA Gold Medal for three consecutive years</p>
    
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505"/>
        </div>
        <h2 class="text-xl font-medium title-font text-TextColor mt-5">National Level Boxing Gold Medal</h2>
        <p class="text-base leading-relaxed mt-2 text-TextColor">Congratulations to our student Bhanu Teja for winning Gold Medal in National Level Boxing Competition.</p>
      
      </div>
    </div>
  </div>
</section>
  )
}

export default Acheivments