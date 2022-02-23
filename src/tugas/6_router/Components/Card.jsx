import React from 'react'

function Card({title,poster, year, imdbID }) {

  return (
    <div className="mx-10 mb-6 max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={poster} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl">{title}</div>
                <p className="text-gray-400 ">{year}</p>
            </div>
        </div>
  )
}

export default Card