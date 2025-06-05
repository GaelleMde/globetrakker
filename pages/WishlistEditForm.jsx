import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";

function WishlistEditForm() {
  const [countryId, setCountryId] = useState("");
  const [name, setName] = useState("");
  const [flag, setFlag] = useState("");
  const [notes, setNotes] = useState("");

  const params = useParams();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedWishlist = {
      countryId: countryId,
      isVisited: false,
      notes: notes,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/travelLogs/${params.wishlistId}`,
        editedWishlist
      );
      navigate(`/wishlist/${params.wishlistId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-card">
      <Form onSubmit={handleSubmit} id="travellog-card">
        <div id="title-edit">
          <h2> Edit Wishlist for {name}</h2>
          <img
            src={flag}
            alt={`Flag of ${name}`}
            style={{ width: "200px", borderRadius: "8px" }}
          />
        </div>

        <Form.Group className="mb-3">
          <Form.Label className="things-to-do">Things to Do:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>
        <div className="card-btn">
          <button className="confirm-btn" type="submit">
            Confirm
          </button>
        </div>
      </Form>
    </div>
  );
}

export default WishlistEditForm;
