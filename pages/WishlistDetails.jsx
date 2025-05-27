import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function WishlistDetails() {
  const [details, setDetails] = useState(null);
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5005/travelLogs/${params.wishlistId}?_expand=country`
      )
      .then((response) => {
        console.log(response);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletewishlist = () => {
    axios
      .delete(`http://localhost:5005/travelLogs/${params.wishlistId}`)
      .then(() => {
        navigate("/wishlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (details === null) {
    return <h3>... buscando detalles</h3>;
  }

  return (
    <div id="travel-details-container">
      <img
        src={details.country.flag}
        alt={`Flag of ${details.country.name}`}
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <h1>{details.country.name}</h1>

      <div id="trip-details-container">
        <h3>Places I'd like to visit</h3>
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
        <Link to={`/wishlist/${params.wishlistId}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={deletewishlist}>Delete</button>
      </div>
    </div>
  );
}

export default WishlistDetails;
