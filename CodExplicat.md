import React,{ useState } from 'react';
import Weather from './Weather';
import CitySelector from './CitySelector'; 

function App() {
  const [city, setCity] = useState("Berlin");
 /* => 1. Se folosește hook-ul useState pentru a crea o variabilă de stare numită 'city' cu valoarea inițială "Berlin".
 2. setCity este o funcție care va fi folosită pentru a actualiza valoarea lui 'city'.*/
  
 /* => 4.
Date meteo:
 4. Acest component va afisa temperatura și condiția climatului pentru orașul selectat din lista de opțiuni.
 */
 
 const weatherData = {
  Berlin: { temperature: 15, condition: "cloudy" },
  London: { temperature: 10, condition: "rainy" },
  Paris: { temperature: 20, condition: "sunny" },
  NewYork: { temperature: 25, condition: "clear" },
  WinterWonderland: { temperature: -16, condition: "snow"},
  Lübeck: { temperature: "unknown", condition: "Weather Warning!" }
};
  /* 5.
Funcția de schimbare a orașului:
Această funcție va fi apelată când utilizatorul selectează un nou oraș.
  Ea folosește setCity pentru a actualiza starea cu noul oraș selectat. */
  const changeCity = (newCity) => {
    setCity(newCity);
  };
/*6.
Renderizarea componentei:
Componenta returnează JSX care definește structura UI.
Include un titlu, componenta CitySelector și componenta Weather.
CitySelector primește funcția changeCity ca prop.
Weather primește orașul curent și datele meteo corespunzătoare ca props.
*/
  return (
     // .App = emmet
    <div className="App">
      <h1>Wetter App</h1>
      <CitySelector changeCity={changeCity} />
      <Weather city={city} weatherData={weatherData[city]} />
    </div>
  );
}
export default App

/**  
 7.
Exportul componentei:
Componenta App este exportată pentru a putea fi utilizată în alte părți ale aplicației.


Logica generală:
1.
Aplicația menține starea orașului curent.
2.
Utilizatorul poate schimba orașul folosind componenta CitySelector.
3.
Datele meteo pentru orașul selectat sunt afișate folosind componenta Weather.
4.
Când se schimbă orașul, starea se actualizează, ceea ce duce la re-renderizarea componentei cu noile date meteo.


Această structură permite o separare clară a responsabilităților între componente și face aplicația ușor de întreținut și extins.

*/



const changeCity = (newCity) => {
  
    setCity(newCity);
    // Wenn die neue Stadt unbekannte ist, wird ein Warnung angezeigt
    if (weatherData[newCity].temperature === "unknown") {
      alert("Unbekannte Stadt!");
    }
    // Wenn die neue Stadt bekannt ist, wird der Wetter angezeigt
    else {
      alert("Wetter in " + newCity + ": " + weatherData[newCity].temperature + "°C, " + weatherData[newCity].condition);
    }
    // Ansonsten wird die Wetterdaten gelöscht
    const apiKey = '<YOUR_API_KEY>';
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(response => response.json())
    .then(data => {
      console.log('Current Weather Data:', data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });

  return (
    // .App = emmet
    <div className="App">
      <h1>Wetter App</h1>
      <CitySelector changeCity={changeCity} />
      <Weather city={city} weather={weatherData[city]} />
    </div>
  );
}
}
export default App;