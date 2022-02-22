import React from 'react'

function Card({title, urlToImage, author, publishedAt, description, url}) {

    const dateConvert = (date) => {
        let inputDate = new Date(date);
        return inputDate.toLocaleString();
    }
  return (
    <div className="mx-10 mb-6 max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={urlToImage} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl">{title}</div>
                <p className="text-gray-400 mb-2">{author} - {dateConvert(publishedAt)}</p>
                <p className="text-gray-800 text-base">
                    {description}
                </p>
            </div>
            <button className="mx-6 mb-4 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white text-sm font-bold py-2 px-4 border rounded" onClick={() => {
                window.open(`${url}`)
            }}>Read more...</button>
        </div>
  )
}

export default Card