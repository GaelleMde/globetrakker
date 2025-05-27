import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
/*  import TravelLogEditForm from "../components/TravelLogEditForm";  */

function TravelLogDetails() {
  const [details, setDetails] = useState(null);
  const params = useParams();
  //console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/travelLogs/${
          params.travellogid
        }?_expand=country`
      )
      .then((response) => {
        //console.log(response);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletetravelLog = () => {
    axios
      .delete(
        `${import.meta.env.VITE_SERVER_URL}/travelLogs/${params.travellogid}`
      )
      .then(() => {
        navigate("/visitedcountries");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (details === null) {
    return <h3>... buscando detalles</h3>;
  }

  console.log(details);

  return (
    <div id="travel-details-container">
      <img
        src={details.country.flag}
        alt={`Flag of ${details.country.name}`}
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <h1>{details.country.name}</h1>

      <div id="trip-details-container">
        <h3>Trip Details</h3>
        <p>
          <strong>Visited on:</strong> {details.visitedDate}
        </p>
        <p>
          <strong>Rating:</strong> {details.rating} / 5
        </p>
        <p>
          <strong>Notes:</strong> {details.notes}
        </p>
      </div>

      <hr />
      <div>
        <h3>Country Information</h3>
        <p>
          <strong>Capital:</strong> {details.country.capital}
        </p>
        <p>
          <strong>Continent:</strong> {details.country.continent}
        </p>
        <p>
          <strong>Currency:</strong> {details.country.currency}
        </p>
        <p>
          <strong>Area:</strong> {details.country.area} km2
        </p>
        <p>
          <strong>Population:</strong>{" "}
          {details.country.population.toLocaleString()}
        </p>
      </div>
      <div>
        <Link to={`/travelLogs/${params.travellogid}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={deletetravelLog}>Delete</button>
      </div>
    </div>
  );
}

export default TravelLogDetails;

/* http://localhost:5005/travelLogs?isVisited=true&_expand=country&travellogid=${params.travellogid} */
