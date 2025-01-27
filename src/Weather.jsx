import React from 'react';
import './index.css';

function Weather({ city, weather, temperature }) {
 

return(
    <div className="weather"> 
        <h2>Wetter in {city}</h2>
        <p>Condition: {weather.condition.text}</p>
        <p>Temperature: {temperature}°C</p>
        <p>Bedingungen: {weather.condition.text}</p>
        <p>Luftfeuchtigkeit: {weather.humidity}%</p>
        <p>Windgeschwindigkeit: {weather.wind_kph} km/h</p>
        <p>Luftdruck: {weather.pressure_mb} hPa</p>
        <p>Sonnenscheindauer: {weather.sunrise} - {weather.sunset}</p>
        <p>Zeitstempel: {weather.last_updated}</p>
        <p>Geo-Koordinaten: {weather.lat}°N, {weather.lon}°E</p>
        <p>Feuchtigkeit: {weather.feelslike_c}°C</p>
        <p>Wolkenbedeckung: {weather.cloud}%</p>
        <img src={weather.condition.icon} alt={weather.condition.text} className='mt-4' />
    </div>

);
}
export default Weather;