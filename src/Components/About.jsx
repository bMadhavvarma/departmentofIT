import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
   <section id='SectionAbout'>
    <section className="text-gray-600 bg-BgColor text-TextColor body-font">
      <div className="container px-5 py-4 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
          </div>
          <div className="flex flex-col sm:flex-row mt-5">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-TextColor text-lg">Dr. S. MURALIKRISHNA</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-TextColor">The Head of the Department and a Professor in the Information Technology branch. With a Ph.D. in his field, Dr. Muralikrishna has been an integral part of the department since March 9, 2015.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h1 className='text-xl text-TextColor font-bold'>Vision of the Department</h1>
              <p className="leading-relaxed text-TextColor text-lg mb-4">
                To provide an excellent education in Information Technology through effective teaching and research environment in pursuit of academic proficiency, employment & higher education with social and ethical values.
              </p>
              <h1 className='text-xl font-bold text-TextColor'>Mission of the Department</h1>
              <p className="leading-relaxed text-lg mb-4 text-TextColor">
                <ul>
                  <li>M1: To provide high quality technical education in Information Technology by delivering the core instructions through world class infrastructure.</li>
                  <li>M2: To prepare students with fine professional and intellectual skills to solve challenging tasks in the field of Information Technology.</li>
                  {showMore && (
                    <>
                      <li>M3: To train students in design and implement novel systems based on education and research with the support of senior faculty.</li>
                      <li>M4: To inculcate students with leadership capabilities, integrity, ethical & social values.</li>
                    </>
                  )}
                </ul>
              </p>
              {!showMore && (
                <button onClick={handleToggle} className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              )}
                {showMore && (
                <button onClick={handleToggle} className="text-indigo-500 inline-flex items-center">
                  Learn less
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
   </section>
  );
}

export default About;
