import React from "react";
import "../pages/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div id="main-dashboard">
      <img src="Img-landing-page.svg" alt="world-map" id="world-map" />
      <div id="left-part">
        <div id="text-landing-page">
          <h2>
            GlobeTrakker helps you keep trakk of your adventures, one country at
            a time!
          </h2>
          <h3>Save where you’ve been and plan where to go next</h3>
        </div>
        <div id="btn-container">
          <button
            onClick={() => navigate(`/visitedcountries`)}
            id="btn-add-travel"
          >
            View visited countries ✅
          </button>

          <button
            onClick={() => navigate(`/wishlist`)}
            id="btn-add-place-to-visit"
          >
            View your wishlist ✨
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
