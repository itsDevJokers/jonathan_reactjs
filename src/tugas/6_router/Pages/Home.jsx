import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home({isLogged , clickSidebar}) {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate('/login');
    clickSidebar();
  }

  return (
    <div>
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            Watch your most likely{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              films
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-8"
            >
              No plan which film you gonna watch ? Here are the list of films and their description.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
            >
              <div>
                <Link to='/films'>
                    <p
                    className="btn hover:text-blue-700 text-black w-full mb-4 sm:w-auto sm:mb-0 font-bold"
                    >
                    See Films
                    </p>
                </Link>
              </div>
              <div>
                <Link to='/about'>
                    <p
                    className="btn hover:text-blue-700 text-black w-full sm:w-auto sm:ml-4 font-bold"
                    >
                    About
                    </p>
                </Link>
              </div>
            </div>
            {!isLogged && (
              <button className="bg-[#009879] hover:bg-[#00c09a] text-white lg:py-2 lg:px-4 rounded lg:w-24 xs:w-64 xs:my-4 xs:py-4" onClick={toLogin}>
              Login
            </button>
            )}
            
          </div>
        </div>

        {/* Hero image */}
        <div>
          <div
            className="relative flex justify-center mb-8"
          >
            <div className="flex flex-col justify-center">
              <img
                className="mx-auto"
                src="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg"
                width="768"
                height="432"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home