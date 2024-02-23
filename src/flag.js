import React, { useEffect, useState } from 'react';
import "./flag.css";

function Flag() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => setCountries(data))
    .catch((error) => console.error("Error fetchin data: ", error))
  }, []);



 return (
    <div className = "containerStyle">
      {countries.map((item) => (
        <div key={item.cca3} className="cardStyle">
          <img src={item.flags.png} alt={`FLAG of ${item.name.common}`} 
          className="flagStyle" 
          />
          <h2>{item.name.common}</h2>
        </div>
      ))}
    </div>
  )
}

export default Flag;