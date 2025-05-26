import React, { useEffect } from "react";
import "../pages/VisitedCountriesList.css";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import VisitedCountriesCard from "../components/VisitedCountriesCard";
import { useNavigate } from "react-router-dom";

function VisitedCountriesList() {
  /* const [showSearch, setShowSearch] = useState(false);  */
  const navigate = useNavigate();

  /*   const handleToggleSearch = () => {
    setShowSearch(!showSearch);
  }; */

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

  if (alltravelLogs === null) {
    return <h3>No visited countries yet...🥲</h3>;
  }

  return (
    <div id="top-banner">
      <div id="visited-btn">
        <h3>Visited Countries</h3>
        <button id="btn-add" onClick={() => navigate("/travelLogs/addpage")}>
          +
        </button>
      </div>
      <div id="searchbar-ctn">
        <hr />
        {/*         {showSearch && (
          <div>
            <input type="text" placeholder="Rechercher..." id="search-bar" />
            <SearchBar />
          </div>
        )} */}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {alltravelLogs.length === 0 && <p>No visited countries yet...🥲 </p>}
        {alltravelLogs.map((eachcountryVisited) => {
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
