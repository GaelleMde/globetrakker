import React from "react";
import { Link } from "react-router-dom";
import "../components/VisitedCountriesCard.css";

function VisitedCountriesCard(props) {
  console.log(props);
  return (
    <div id="visited-card">
      <Link to={`/travelLogs/${props.eachcountryVisited.id}`}>
        <img
          src={props.eachcountryVisited.country.flag}
          alt={`Flag of ${props.eachcountryVisited.country.name}`}
        />
        <div id="text-card">
          <h4>{props.eachcountryVisited.country.name}</h4>
          <h5>{props.eachcountryVisited.visitedDate}</h5>
        </div>
      </Link>
    </div>
  );
}

export default VisitedCountriesCard;
