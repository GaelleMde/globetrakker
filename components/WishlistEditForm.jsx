import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function WishlistEditForm() {
  const [countryId, setCountryId] = useState("");
  const [name, setName] = useState("");
  const [flag, setFlag] = useState("");
  const [notes, setNotes] = useState("");

  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/travelLogs/${
          params.wishlistId
        }?_expand=country`
      )
      .then((response) => {
        console.log(response);
        setCountryId(response.data.countryId);
        setName(response.data.country.name);
        setFlag(response.data.country.flag);
        setNotes(response.data.notes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedWishlist = {
      countryId: countryId,
      isVisited: false,
      notes: notes,
    };

    try {
      axios.put(
        `${import.meta.env.VITE_SERVER_URL}/travelLogs/${params.wishlistId}`,
        editedWishlist
      );
      navigate(`/wishlist/${params.wishlistId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2> Edit Wishlist for {name}</h2>
      <img
        src={flag}
        alt={`Flag of ${name}`}
        style={{ width: "80px", height: "auto", objectFit: "cover" }}
      />
      <form onSubmit={handleSubmit}>
        <label>Notes :</label>
        <textarea
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default WishlistEditForm;
