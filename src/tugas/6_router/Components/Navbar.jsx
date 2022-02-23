import { FaBars } from 'react-icons/fa'
import React from 'react'

function Navbar({clickSidebar}) {
  return (
    <div className="flex items-center justify-between flex-wrap bg-[#0092ff] p-6" >
        <div className="flex items-center flex-shrink-0 text-white pl-10 pr-6">
            <div className='mr-10'>
                <FaBars className='cursor-pointer text-3xl' onClick={() => clickSidebar()}/>
            </div>
            <span className="font-semibold text-xl tracking-tight">Edu-Film</span>
        </div>
    </div>
  )
}

export default Navbar