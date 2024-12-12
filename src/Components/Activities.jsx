import React, { useState } from 'react';

function Activities() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <section class="text-gray-600 text-TextColor bg-BgColor body-font" id="SectionEvents">
        <h1 className='text-red-700 text-2xl font-extrabold text-center underline'>INFOSTAV</h1>
  <div class="container px-5 py-7 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" class="object-cover object-center h-full w-full" src="https://dummyimage.com/460x500"/>
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-TextColor text-lg title-font font-medium mb-3">Cultural Activities</h2>
          <p class="leading-relaxed text-base text-TextColor">Our department hosts a variety of vibrant cultural activities that enrich student life. The auditorium comes alive with energetic dance performances, showcasing diverse styles from classical to contemporary</p>
          {showMore && (
                    <>
                     <p class="leading-relaxed text-base text-TextColor">Students also engage in theater productions, music fests, and art exhibitions, providing platforms for creative expression. These events foster a strong sense of community and offer opportunities for students to develop their talents, collaborate with peers, and celebrate cultural diversity.</p>
                    </>
                  )}
         {showMore && (
                <button onClick={handleToggle} className="text-indigo-500 inline-flex items-center">
                  Learn less
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              )}
                  {!showMore && (
                <button onClick={handleToggle} className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              )}
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-TextColor text-lg title-font font-medium mb-3">Technical Events</h2>
          <p class="leading-relaxed text-base text-TextColor">In our department, a variety of technical events are organized to enhance students' skills and knowledge. Coding tests push students to solve intricate problems, honing their programming expertise.</p>
          {showMore && (
                    <>
                      <p class="leading-relaxed text-base text-TextColor">Typing tests are held to improve speed and precision, crucial for effective communication in the tech world. Orientation sessions introduce students to cutting-edge technologies and industry trends, ensuring they stay current in their field. These departmental events foster a competitive spirit, encourage collaboration, and equip students with the tools they need to excel in their careers.</p>
                    </>
                  )}
         {showMore && (
                <button onClick={handleToggle} className="text-indigo-500 inline-flex items-center">
                  Learn less
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              )}
                  {!showMore && (
                <button onClick={handleToggle} className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              )}
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-TextColor text-lg title-font font-medium mb-3">Non-Technical Events</h2>
          <p class="leading-relaxed text-base text-TextColor">Our department also emphasizes the importance of relaxation and fun through a variety of non-technical events. Students can participate in gully cricket and tug of war, fostering team spirit and friendly competition.</p>
          {showMore && (
                    <>
                     <p class="leading-relaxed text-base text-TextColor"> For mobile gamers, tournaments in popular games like PUBG and Free Fire provide a thrilling experience and a chance to showcase their skills. These activities not only offer a break from academics but also help in building camaraderie and lasting memories among students.</p>
                    </>
                  )}
         {showMore && (
                <button onClick={handleToggle} className="text-indigo-500 inline-flex items-center">
                  Learn less
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              )}
                  {!showMore && (
                <button onClick={handleToggle} className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              )}
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Activities