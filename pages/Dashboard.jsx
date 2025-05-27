import React from "react";
import "../pages/Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div id="main-dashboard">
      <img src="../public/Mapmvp.svg" alt="world-map" id="world-map" />
      <div id="statistic-container"></div>
      <h2>
        Add countries to your visited list or wishlist to keep track of your
        travel adventures and dreams!
      </h2>
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
          View country to your wishlist ✨
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
