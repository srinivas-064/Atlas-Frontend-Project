import React, { useState, useEffect } from 'react';
import { useTransition } from 'react';
import Loader from './Loader';
import { getCountryData } from '../api/GetApiData';

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countyData, setCountryData] = useState();
  const [filteredData, setFilteredData] = useState(); // State for filtered data
  const [selectedContinent, setSelectedContinent] = useState("");
  
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountryData(res.data);
      setFilteredData(res.data); // Initialize filtered data
    });
  }, []);

  if (isPending || !filteredData) {
    return <Loader />;
  }

  const handleSearch = (e) => {
    const inputSearch = e.target.value;
    if (inputSearch.trim() === "") {
      setFilteredData(countyData); // Reset to full data
    } else {
      const searchedData = countyData.filter((country) =>
        country.name.common.toLowerCase().includes(inputSearch)
      );
      setFilteredData(searchedData);
    }
  };

  const sortAscending = () => {
    const sortedData = [...filteredData].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setFilteredData(sortedData);
  };

  const sortDescending = () => {
    const sortedData = [...filteredData].sort((a, b) =>
      b.name.common.localeCompare(a.name.common)
    );
    setFilteredData(sortedData);
  };

  const handleContinentChange = (e) => {
    const continent = e.target.value;
    setSelectedContinent(continent);
    if (continent === "") {
      setFilteredData(countyData); // Reset to full data
    } else {
      setFilteredData(
        countyData.filter((country) => country.region === continent)
      );
    }
  };

  return (
    <div className="country-section">
      <div className="control-section">
        <input
          className="input-container"
          type="text"
          name="search"
          placeholder="Search for the Country"
          onChange={(e)=>handleSearch(e)}
        />
        <button onClick={sortAscending}>Asen</button>
        <button onClick={sortDescending}>Dsen</button>
        <select value={selectedContinent} onChange={(e) => handleContinentChange(e)}>
          <option value="">Continent</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <ul className="card-section">
        {filteredData.map((country, idx) => {
          const { capital, flags, name, population, region } = country;
          return (
            <li className="image-card" key={idx}>
              <div className="country-image-section">
                <img src={flags.png} alt={flags.alt} className="country-image" />
              </div>
              <p><strong>Country:</strong> {name.common}</p>
              <p><strong>Capital:</strong> {capital}</p>
              <p><strong>Population:</strong> {population}</p>
              <p><strong>Region:</strong> {region}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Country;