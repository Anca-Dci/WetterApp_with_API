import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import CitySelector from './CitySelector';
import './index.css';


function App() {
 const [city, setCity] = useState("Berlin");
 const [weatherData, setWeatherData] = useState(null);
const [error, setError] = useState(null);

const apiKey = 'e49bf578a7a043f9aeb95802251301';


useEffect(() => {
  const fetchWeatherData = async () => {
 /*    if (city) { */
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        const data = await response.json();
        console.log('Current Weather Data:', data);
        setWeatherData(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Unable to fetch weather data. Please try again.');
        setWeatherData(null);
      }
    }

  fetchWeatherData();
}, [city, apiKey]);

  const changeCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className={`App ${weatherData && weatherData.current.is_day === 0 ? 'night' : 'day'}`}>
      <h1 className='title'>Wetter App</h1>
      <CitySelector changeCity={changeCity} />
      {error && <p className="error">{error}</p>}
      {weatherData && (
      <Weather 
      city={city} 
      weather={weatherData.current} 
      temperature={weatherData.current.temp_c}/>
      )}
   </div>
  );
}
export default App;


