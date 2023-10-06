import React, { useState } from 'react'
import axios from 'axios'
import './index.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div id='app' className="flex justify-center items-center">
      <div className='w-1/3 h-[280px] flex flex-col items-center justify-between bg-gray-400 bg-opacity-90 py-8 rounded-2xl'>
        <div>
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text"
            className='outline-none rounded-3xl px-6 py-3 text-base '
          />
        </div>
        <div className="flex justify-center items-center  w-full   rounded-2xl ">
          <div className="w-[80%] flex items-end justify-between">
            <div className="">
              <p className='text-7xl font-bold text-red-600 '>{data.name}</p>
            </div>
            <div className="flex flex-col items-end text-xl">
              <span className='font-bold '>
                {data.main ? <h1>{((data.main.temp - 32) * 5 / 9).toFixed()}°C</h1> : null}
              </span>
              <span className='text-2xl font-bold'>
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
