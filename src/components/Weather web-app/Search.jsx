import React from 'react'

const Search = ({ search, setsearch, handleSearch }) => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg'>
      <input 
        type="text"
        className='w-full sm:w-64 px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        placeholder='Enter City Name'
        name='search'
        value={search}
        onChange={(event) => setsearch(event.target.value)}
      />
      <button 
        className='w-full sm:w-auto px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        onClick={handleSearch}
      >
        Search Weather
      </button>
    </div>
  )
}

export default Search