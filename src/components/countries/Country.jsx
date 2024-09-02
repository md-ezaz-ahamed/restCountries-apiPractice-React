import { useState } from "react";
import "./Country.css"
const Country = ({country}) => {
    const {name, official, flags} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        // <div className="{`country ${visited && 'visited'}`} ">
        <div className="country">

            <h2>Name : {name.common}</h2>
            <h2>Offlicial Name : {name.official}</h2>
            <img src={flags.png} alt=""/>
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {
                visited ? "I have visited on this country" : 'I want to visit.'
            }
            
        
        </div>
        
    );
};

export default Country;