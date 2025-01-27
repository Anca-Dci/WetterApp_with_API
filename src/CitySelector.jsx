import React from 'react';

function CitySelector({ changeCity }) {
    return (
        <div className='schimba'>
            <h2>Wähle eine Stadt:</h2>
            <select className='selector' onChange={(event)=>changeCity(event.target.value)}>
                <option value="Berlin">Berlin</option>
                <option value="München">München</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Frankfurt">Frankfurt</option>
                <option value="Langen">Langen</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>
                <option value="NewYork">New York</option>
                <option value="WinterWonderland">Winter Wonderland</option>
                <option value="Lübeck">Lübeck</option>
                <option value="Rumänien">Rumäninen</option>
                <option value="Bukarest">Bukarest</option>
                <option value="Cluj">Cluj</option>
                <option value="Italien">Italien</option>
                <option value="Rom">Rom</option>
                <option value="Mailand">Mailand</option>
                <option value="Koln">Köln</option>
                <option value="Dubai">Dubai</option>
                
            </select>
        </div>
    );
}

export default CitySelector;