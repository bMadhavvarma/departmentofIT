import React from 'react'

function Gallery() {
  return (
    <section class="text-TextColor bg-BgColor  body-font" id='Sectiongallery'>
    <div class="container px-5 py-14 mx-auto flex flex-wrap">
      <div class="flex w-full mb-10 flex-wrap">
        <h1 class="sm:text-3xl text-2xl font-bold underline title-font text-red-800 lg:w-1/3 lg:mb-0 mb-4">Rewind Moments</h1>
        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">These moments and memories capture the essence of our journey, showcasing the experiences and connections that have shaped our time together. Whether it's the joy of celebrations, the camaraderie of shared challenges, or the simple pleasure of everyday interactions, these snapshots tell the story of who we are and where we've been.</p>
      </div>
      <div class="flex flex-wrap md:-m-2 -m-1">
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
          </div>
          <div class="md:p-2 p-1 w-full">
            <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Gallery