import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Addform(props) {
  const navigate = useNavigate();

  const params = useParams();

  const [logType, setLogType] = useState(params.logType);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");

  const selectedCountry = props.selectedCountry;
  console.log(selectedCountry);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newLog = {
      countryId: props.selectedCountry.id,
      isVisited: logType === "visited",
      visitedDate: logType === "visited" ? date : null,
      rating: logType === "visited" ? rating : null,
      notes: notes,
    };
    console.log(newLog);

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/travelLogs`, newLog)
      .then(() => {
        navigate(logType === "visited" ? "/visitedcountries" : "/wishlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-card">
      <Form onSubmit={handleSubmit} id="travellog-card">
        <div id="title-edit">
          <h2>Add travel log for {selectedCountry.name}</h2>
          <img
            src={selectedCountry.flag}
            alt={`Flag of ${selectedCountry.name}`}
            style={{ width: "200px", borderRadius: "8px" }}
          />
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Add to list: </Form.Label>
          <Form.Select
            value={logType}
            onChange={(e) => setLogType(e.target.value)}
          >
            <option value="visited">Visited country</option>
            <option value="wishlist">Wishlist</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          {logType === "visited" && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Date visited:</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rating (from 0 to 5):</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </Form.Group>
            </>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Notes :</Form.Label>
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
            Add travel ✅
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Addform;
