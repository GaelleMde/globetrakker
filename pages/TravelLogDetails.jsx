import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";

function TravelLogDetails() {
  const [details, setDetails] = useState(null);
  const params = useParams();

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/travelLogs/${params.travellogid}/edit`);
  };

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/travelLogs/${
          params.travellogid
        }?_expand=country`
      )
      .then((response) => {
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
    return <h3>Loading your data...patience, traveler 🧭</h3>;
  }

  console.log(details);

  return (
    <div className="container-card">
      <div id="travellog-card">
        <div id="title">
          <img
            src={details.country.flag}
            alt={`Flag of ${details.country.name}`}
            style={{ width: "200px", borderRadius: "8px" }}
          />
          <h1>{details.country.name}</h1>
        </div>
        <div id="trip-details-container">
          <h3> My trip🌍 </h3>
          <div id="my-trip">
            <p>
              <span>Visited on:</span> {details.visitedDate}
            </p>
            <p>
              <span>Rating:</span> {details.rating} / 5
            </p>

            <span>Notes:</span>
            <p>
              {" "}
              <strong>{details.notes}</strong>
            </p>
          </div>
        </div>

        <hr />
        <Accordion defaultActiveKey="0">
          <Accordion.Header>Country Information</Accordion.Header>
          <Accordion.Body className="country-info">
            <strong>Capital:</strong> {details.country.capital}
            <br />
            <strong>Continent:</strong> {details.country.continent}
            <br />
            <strong>Currency:</strong> {details.country.currency}
            <br />
            <strong>Area:</strong> {details.country.area} km<sup>2</sup>
            <br />
            <p>
              <strong>Population:</strong>{" "}
              {details.country.population.toLocaleString()}
            </p>
          </Accordion.Body>
        </Accordion>

        <div className="card-btn">
          <button className="edit-btn" onClick={handleEditClick}>
            Edit
          </button>

          <button className="delete-btn" onClick={deletetravelLog}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelLogDetails;
