import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState (" ")


  function searchCity(event){
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={searchSubmit} >
        <input type="search" placeholder="city" onChange={searchCity} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}