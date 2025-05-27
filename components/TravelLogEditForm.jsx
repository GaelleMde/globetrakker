import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      <h2>Modify travel log for {name}</h2>
      <img
        src={flag}
        alt={`Flag of ${name}`}
        style={{ width: "80px", height: "auto", objectFit: "cover" }}
      />
      <form onSubmit={handleSubmit}>
        <label>Date visited:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Rating :</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

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

export default TravelLogEditForm;
