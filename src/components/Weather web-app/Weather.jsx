import React, { useState } from 'react'
import Search from './Search'

const Weather = () => {

  const [search ,setsearch] = useState('');
  const [loading ,setloading] = useState(false);
const [WeatherData,setWeatherData] = useState(null);


  const handleSearch = async () => {
const re

  };

  return (
    <div>
        <Search
        search={search}
        setsearch={setsearch}
        handleSearch={handleSearch}
        />
      
    </div>
  )
}

export default Weather