import React from 'react'
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai'
import { ImFilm, ImCross } from 'react-icons/im'
import { FcAbout } from 'react-icons/fc'
import { Link } from 'react-router-dom'

function Sidebar({clickSidebar, logout, isLogged}) {

    const handleLogout = () => {
        logout();
        clickSidebar();
    }
  return (
    <aside className="w-64" aria-label="Sidebar">
        <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-[100vh] ">
            <div className="flex justify-between pl-2.5 mb-5">
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Edu-Film</span>
                    <ImCross className='cursor-pointer mt-2' onClick={() => clickSidebar()} />
            </div>
            <ul className="space-y-2">
                <li>
                    <Link to='/' onClick={() => clickSidebar()}>
                        <p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <AiOutlineHome />
                        <span className="ml-3">Home</span>
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to='/films' onClick={() => clickSidebar()}>
                        <p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <ImFilm />
                        <span className="flex-1 ml-3 whitespace-nowrap">Films</span>
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to='/about' onClick={() => clickSidebar()}>
                        <p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FcAbout />
                        <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                        </p>
                    </Link>
                </li>
            </ul>
            {isLogged && <p className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 absolute bottom-0 pb-3'>
                <AiOutlineLogout />
                <span className="flex-1 ml-3 whitespace-nowrap" onClick={handleLogout}>Logout</span>
            </p>}

            {/* <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 absolute bottom-0 pb-3'>
                <AiOutlineLogout />
                <span className="flex-1 ml-3 whitespace-nowrap" onClick={handleLogout}>Logout</span>
            </a> */}
            
        </div>
</aside>
  )
}

export default Sidebar