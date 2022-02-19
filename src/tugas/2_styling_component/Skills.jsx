import React, { Component } from 'react'

import js from '../../assets/logos/js.png'
import golang from '../../assets/logos/golang.png'
import dart from '../../assets/logos/dart.png'
import mysql from '../../assets/logos/mysql.png'
import mongodb from '../../assets/logos/mongodb.png'
import reactjs from '../../assets/logos/reactjs.png'
import nodejs from '../../assets/logos/nodejs.png'
import expressjs from '../../assets/logos/expressjs.png'
import flutter from '../../assets/logos/flutter.png'
import echo from '../../assets/logos/echo.png'

export class Skills extends Component {
  render() {
    return (
      <>
        <TheSkills />
        <OtherSkills />
        <Table />
      </>
    )
  }
}

class TheSkills extends Component {
  render() {
    return (
        <div className='pb-4' id="skills">
            <h3 className="font-bold text-3xl py-8 text-center">Skills</h3>
            <div className="flex lg:flex-row xs:flex-col justify-evenly px-20">
                <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={js} alt="js"/></div>
                <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={golang} alt="go"/></div>
                <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={dart} alt="dart"/></div>
                <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={mysql} alt="mysql"/></div>
                <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={mongodb} alt="mongodb"/></div>
            </div>
        </div>
    )
  }
}

class OtherSkills extends Component {
    render() {
        return (
            <div className='pb-4' id="other-skills">
                <h3 className="font-bold text-3xl py-8 text-center">Other Skills</h3>
                <div className="flex lg:flex-row xs:flex-col justify-evenly px-20">
                    <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={reactjs} alt="react"/></div>
                    <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={nodejs} alt="nodejs"/></div>
                    <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={expressjs} alt="expressjs"/></div>
                    <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={flutter} alt="flutter"/></div>
                    <div className=""><img className="lg:w-32 lg:h-32 xs:w-72 xs:h-72 xs:mx-auto xs:my-4" src={echo} alt="echo"/></div>
                </div>
            </div>
        )
    }
}

class Table extends Component {
  render() {
        return (
            <div className="text-center xs:pb-4" id="riwayat-pendidikan">
            <h3 className="font-bold text-3xl xs:py-8 text-center">Riwayat Pendidikan</h3>
            <table className="border-collapse border mx-auto border-x-gray-400">
                <thead className="table-head bg-[#009879] text-white">
                    <tr>
                        <th className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>No.</th>
                        <th className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>Nama Sekolah</th>
                        <th className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>Alamat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>1</td>
                        <td className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>SD Frater Don Bosco</td>
                        <td className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>Manado</td>
                    </tr>
                    <tr>
                        <td className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>2</td>
                        <td className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>SMP Frater Don Bosco</td>
                        <td className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>Manado</td>
                    </tr>
                    <tr className='border border-t-0 border-b-[#009879] border-b-2 border-x-gray-400'>
                        <td className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>3</td>
                        <td className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>SMA Negeri 9</td>
                        <td className='sm:px-9 xs:px-4 sm:py-3 xs:py-3'>Manado</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}


export default Skills;