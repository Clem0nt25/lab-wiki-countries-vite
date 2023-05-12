import "./App.css";
import countriesJson from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [allCountries, setallCountry] = useState([]);


  const fetchData = async () => {

    const apiResponse = await fetch('https://ih-countries-api.herokuapp.com/countries')
    const parsedResponse = await apiResponse.json()

    setallCountry(parsedResponse)
  }



  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={allCountries} />
      <Routes>
        <Route path="/:countryId" element={<CountryDetails countries={allCountries}/>} />
      </Routes>
    </div>
  );
}

export default App;