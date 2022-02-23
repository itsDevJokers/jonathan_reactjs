import React from 'react'
import bio from '../../../assets/photos/bio.png';

const Jumbotron = () => {
  return (
        <div className="bg-[#cacaca] lg:grid xs:flex xs:flex-col sm:flex-col sm:flex lg:grid-rows-3 lg:grid-flow-col lg:gap-x-10 lg:gap-y-2 lg:px-64 lg:pt-16 lg:pb-0">
            <div className="lg:row-span-3 lg:w-84 xs:mx-auto xs:my-10">
                <div className="lg:px-5 lg:pt-8">
                    <img className="lg:w-72 lg:h-72 sm:w-48 sm:h-48 xs:w-36 xs:h-36 rounded-full border-2 border-[#009879]" src={bio} alt="bio"/>
                </div>
            </div>
            <div className="row-span-1 col-span-2">
                <h2 className="font-bold sm:text-4xl xs:text-3xl lg:pr-16 lg:pt-7 lg:pb-3 xs:text-center lg:text-left xs:py-3">Jonathan Wenas Karongkong</h2>
                <h3 className="font-light sm:text-3xl xs:text-2xl xs:text-center lg:text-left lg:py-0 xs:py-3">Web Developer</h3>
            </div>
            <div className="row-span-2 col-span-2 lg:px-0 xs:px-7">
                    <p className="italic lg:pb-10 lg:pr-10 xs:text-center lg:text-left xs:py-3">"Halo perkenalkan nama saya Jonathan Karongkong. Asal saya dari Manado, Sulawesi Utara. Saat ini saya sedang mengikuti pembelajaran MERN di Eduwork. Harapan saya setelah belajar di Eduwork, saya bisa bekerja dalam perusahaan dan menambah pengalaman saya dalam bidang Web Development."</p>
                    <button className="bg-[#009879] hover:bg-[#00c09a] text-white lg:py-2 lg:px-4 rounded lg:w-24 xs:w-full xs:my-4 xs:py-4">
                        More...
                    </button>
            </div>
        </div>
  )
}

export default Jumbotron;