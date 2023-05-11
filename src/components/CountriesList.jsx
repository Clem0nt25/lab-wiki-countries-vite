import { React, useState } from 'react'
import { Link } from 'react-router-dom'

// create emptry countriesList component with return statement
const CountriesList = ({countries}) => {
    
    return (
        <ul>
            {countries.map((country, index) => {

                const lowerCase = country.alpha2Code.toLowerCase()

                return (
                    <div key={country.name.common}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${lowerCase}.png`} alt={country.name} />
                    <li >
                        <Link to={`/${country.alpha3Code}`}>{country.alpha3Code}</Link>
                    </li>
                    </div>
                )
            })}
        </ul>
        )
}

export default CountriesList