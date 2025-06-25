import React from 'react'
import countyFacts from '../api/countryApi.json'

export default function About() {
  return (
   <div className='About-section'>
      <div className="about-title">
          <h1>
              Here are the top Intresting Facts
              <br/>
              Of the Country
          </h1>
      </div>
      <div className="card-container">
            {countyFacts.map((country)=>{
             const { id, name, capital, population, fact } = country;
                return (
                  <div className="card" key={id}>
                      <h2>World</h2>
                      <p><strong>Capital:</strong> {capital}</p>
                      <p><strong>Population:</strong> {population}</p>
                      <p><strong>Interesting Fact:</strong> {fact}</p>
                  </div>
                )
            })}
      </div>
   </div>
  )
}
