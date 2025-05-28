import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";

function TravelLogEditForm() {
  const [countryId, setCountryId] = useState("");
  const [name, setName] = useState("");
  const [flag, setFlag] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");

  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/travelLogs/${
          params.travellogid
        }?_expand=country`
      )
      .then((response) => {
        console.log(response);
        setCountryId(response.data.countryId);
        setName(response.data.country.name);
        setFlag(response.data.country.flag);
        setDate(response.data.visitedDate);
        setNotes(response.data.notes);
        setRating(response.data.rating);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedTravelLog = {
      countryId: countryId,
      isVisited: true,
      visitedDate: date,
      rating: rating,
      notes: notes,
    };

    try {
      axios.put(
        `${import.meta.env.VITE_SERVER_URL}/travelLogs/${params.travellogid}`,
        editedTravelLog
      );
      navigate(`/travelLogs/${params.travellogid}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="modify-travel-ctn">
      <Form onSubmit={handleSubmit}>
        <h2>Modify travel log for {name}</h2>
        <img
          src={flag}
          alt={`Flag of ${name}`}
          style={{ width: "80px", height: "auto", objectFit: "cover" }}
        />

        <Form.Group className="mb-3">
          <Form.Label>Date visited:</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating :</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
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

        <button type="submit">Confirm</button>
      </Form>
    </div>
  );
}

export default TravelLogEditForm;
