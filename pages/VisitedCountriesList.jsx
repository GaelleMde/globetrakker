import React, { useEffect } from "react";
import "../pages/VisitedCountriesList.css";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import VisitedCountriesCard from "../components/VisitedCountriesCard";

function VisitedCountriesList() {
  const [showSearch, setShowSearch] = useState(false);

  const handleToggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const [alltravelLogs, setAllTravelLog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/travelLogs?isVisited=true&_expand=country")
      .then((response) => {
        //console.log(response);
        setAllTravelLog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (showSearch === null) {
    return <h3>No visited countries yet...🥲</h3>;
  }

  const travelLogIsvisited = alltravelLogs.filter((country) => {
    return country.isVisited === true;
  });

  return (
    <div id="top-banner">
      <div id="visited-btn">
        <h3>Visited Countries</h3>
        <button id="btn-add" onClick={handleToggleSearch}>
          +
        </button>
      </div>
      <div id="searchbar-ctn">
        <hr />
        {showSearch && (
          <div>
            <input type="text" placeholder="Rechercher..." id="search-bar" />
            <SearchBar />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {travelLogIsvisited.length === 0 && (
          <p>No visited countries yet...🥲 </p>
        )}
        {travelLogIsvisited.map((eachcountryVisited) => {
          return (
            <VisitedCountriesCard
              key={eachcountryVisited.id}
              eachcountryVisited={eachcountryVisited}
            />
          );
        })}
      </div>
    </div>
  );
}

export default VisitedCountriesList;
