/* import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function TravelLogEditForm() {
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");

  const params = useParams();
  console.log(params);

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(
        `http://localhost:5005/travelLogs/${params.travellogid}?_expand=country`
      )
      .then((response) => {
        console.log(response);
        setDate(response.data.visitedDate)
        setNotes(response.data.notes)
        setRating(response.data.rating)
        const countrydata = response.data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedTravelLog = {
      countryId: response.data.id,
      isVisited: true,
      visitedDate: date,
      rating: rating,
      notes: notes,
    }

    try {
     axios.put(`http://localhost:5005/travelLogs/${params.travellogid}`, editedTravelLog) 
     navigate(`/travelLogs/${params.travellogid}`)
    } catch (error) {
      
    }



  return (
  <div>
      <h2>Modify travel log for a {selectedCountry.name}</h2>
      <img
        src={selectedCountry.flag}
        alt={`Flag of ${selectedCountry.name}`}
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
)}

export default TravelLogEditForm; */
