import React, { useState, useEffect } from "react";
import './CountryTable.css';

const CountryTable = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch data from API and update state
    fetch("https://restcountries.com/v2/all") // Replace "API_URL" with the actual URL of the API
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div className="table-container">
      <h1>Country Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alphacode</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Flag</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.alpha3Code}>
              <td>{country.name}</td>
              <td>{country.alpha3Code}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
              <td> <img
                src={country.flags.png}
                // alt={country.name + " flag"}
                width="50"
                height="30"
              /></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
