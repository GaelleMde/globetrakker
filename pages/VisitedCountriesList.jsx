import React, { useEffect } from "react";
import "../pages/VisitedCountriesList.css";
import { useState } from "react";
import axios from "axios";
import VisitedCountriesCard from "../components/VisitedCountriesCard";
import { useNavigate, useParams } from "react-router-dom";

function VisitedCountriesList() {
  const navigate = useNavigate();

  const [alltravelLogs, setAllTravelLog] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/travelLogs?isVisited=true&_expand=country`
      )
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
        <button
          id="btn-add"
          onClick={() => navigate("/travelLogs/visited/add")}
        >
          Add country
        </button>
      </div>
      <div id="searchbar-ctn">
        <hr />
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
