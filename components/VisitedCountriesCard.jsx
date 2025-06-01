import React from "react";
import "../components/VisitedCountriesCard.css";
import { useNavigate } from "react-router-dom";

function VisitedCountriesCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/travelLogs/${props.eachcountryVisited.id}`);
  };

  return (
    <div id="visited-card" onClick={handleClick}>
      <div id="text-card2">
        <img
          src={props.eachcountryVisited.country.flag}
          alt={`Flag of ${props.eachcountryVisited.country.name}`}
        />
        <div id="text-card">
          <h4>{props.eachcountryVisited.country.name}</h4>
          <h5>{props.eachcountryVisited.visitedDate}</h5>
        </div>
      </div>
    </div>
  );
}

export default VisitedCountriesCard;
