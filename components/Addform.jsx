import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addform(props) {
  const navigate = useNavigate();

  const [logType, setLogType] = useState("");
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
      .post("http://localhost:5005/travelLogs", newLog)
      .then(() => {
        navigate(logType === "visited" ? "/visitedcountries" : "/wishlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Add travel log for a {selectedCountry.name}</h2>
      <img
        src={selectedCountry.flag}
        alt={`Flag of ${selectedCountry.name}`}
        style={{ width: "80px", height: "auto", objectFit: "cover" }}
      />
      <form onSubmit={handleSubmit}>
        <label>Add to list:</label>
        <select value={logType} onChange={(e) => setLogType(e.target.value)}>
          <option value="visited">Visited country</option>
          <option value="wishlist">Wishlist</option>
        </select>

        {logType === "visited" && (
          <>
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
          </>
        )}

        <label>Notes :</label>
        <textarea
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit">Add travel ✅</button>
      </form>
    </div>
  );
}

export default Addform;
