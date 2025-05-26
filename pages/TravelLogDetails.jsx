import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TravelLogDetails() {
  const [details, setDetails] = useState(null);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5005/travelLogs?isVisited=true&_expand=country&travellogid=${params.travellogid}`
      )
      .then((response) => {
        console.log(response);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (details === null) {
    return <h3>... buscando detalles</h3>;
  }
  console.log(details);
  return (
    <div>
      <img
        src={details[0].country.flag}
        alt={`Flag of ${details[0].country.name}`}
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <h1>{details[0].country.name}</h1>

      <div id="trip-details-container">
        <h3>Trip Details</h3>
        <p>
          <strong>Visited on:</strong> {details[0].visitedDate}
        </p>
        <p>
          <strong>Rating:</strong> {details[0].rating} / 5
        </p>
        <p>
          <strong>Notes:</strong> {details[0].notes}
        </p>
      </div>

      <hr style={{ margin: "1.5em 0" }} />
      <div>
        <h3>Country Information</h3>
        <p>
          <strong>Capital:</strong> {details[0].country.capital}
        </p>
        <p>
          <strong>Continent:</strong> {details[0].country.continent}
        </p>
        <p>
          <strong>Currency:</strong> {details[0].country.currency}
        </p>
        <p>
          <strong>Area:</strong> {details[0].country.area} km2
        </p>
        <p>
          <strong>Population:</strong>{" "}
          {details[0].country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default TravelLogDetails;
