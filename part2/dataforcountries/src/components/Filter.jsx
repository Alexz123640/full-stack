import React, { useState } from "react";
import Show from "./Show";

export const Filter = ({ searching, countries }) => {
  const [showCountry, SetShowCountry] = useState(0);

  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(searching.toLowerCase())
  );
  const handleShow = (d) => {
    console.log(d, "indi",typeof(d));
    SetShowCountry(d);
  };

  console.log(filteredCountries);
  if (filteredCountries.length > 10) {
    return "to many maches";
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      <>
        {filteredCountries.map((c) => {
          return (
            <div >
              <li key={c.name.common}>
              {c.name.common}
              <button onClick={() => handleShow(filteredCountries.indexOf(c))}>
                show
              </button>
            </li>
            {
              showCountry !== 0?<Show filteredCountries={filteredCountries} ix={showCountry} />:''
              
            }
            </div>
            
          );
        })}
      </>
    );
  } else if (filteredCountries.length == 1) {
    return <Show filteredCountries={filteredCountries} />
  }
};
