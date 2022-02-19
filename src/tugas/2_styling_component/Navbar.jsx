import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 lg:pl-32 md:pl-16 sm:pl-8 xs:pl-10 py-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-normal text-xl
          text-green-700 tracking-tight">JonathanWK</span>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto xs:hidden">
          <div className="text-sm lg:flex-grow">
            <a href="#skills" className="block mt-4 lg:inline-block lg:mt-0 text-[rgba(255,255,255,0.55)] text-base font-medium hover:text-[rgba(255,255,255,0.69)] mr-4">
              Skills
            </a>
            <a href="#other-skills" className="block mt-4 lg:inline-block lg:mt-0 text-[#ffffff8c]  text-base font-medium hover:text-[rgba(255,255,255,0.69)] mr-4">
              Other Skills
            </a>
            <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-[#ffffff8c]  text-base font-medium hover:text-[rgba(255,255,255,0.69)]">
              Contact
            </a>
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar;