import { useEffect, useState } from "react";
import Country from "./country";
import "./Countries.css"
const countries = () => {
   
    const [countries, setCountries] = useState ([])
    useEffect (()=>{
        fetch ('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data => setCountries(data));

    }, [])
    return (
        <div>
            <h3>Show {countries.length}</h3>
            <div className="countries-container">
            {
                countries.map(country => <Country key = {country.name}country = {country}></Country>)
            }
            
            </div>
        </div>
    );
};

export default countries;