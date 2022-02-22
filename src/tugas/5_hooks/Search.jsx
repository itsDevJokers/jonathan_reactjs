import React, { useState } from 'react'

function Search({handleSearch, isLoading}) {
  const [value, setValue] = useState('');
  const loadAfterClick = true;
  
  const handleClick = (e) => {
    e.preventDefault();
    handleSearch(value);
    isLoading(loadAfterClick);
  }

  return (
    <form className="my-16 mx-auto px-24">
        <div className="flex items-center border-b border-teal-500 py-2">
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="search" type="text" placeholder="Search News..." onChange={e => setValue(e.target.value)}/>
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" onClick={handleClick}>
            Search
        </button>
        </div>
    </form>
  )
}

export default Search