import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WishListCard from "../components/WishListCard";
import "../pages/Wishlist.css";

function WishList() {
  const navigate = useNavigate();

  const [wishlist, setAllwishlist] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/travelLogs?isVisited=false&_expand=country`
      )
      .then((response) => {
        setAllwishlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (wishlist === null) {
    return <h3> Loading your data...patience, traveler 🧭</h3>;
  }

  return (
    <div id="top-banner">
      <div id="visited-btn">
        <h3>Wishlist ✨</h3>
        <button
          id="btn-add"
          onClick={() => navigate("/travelLogs/wishlist/add")}
        >
          Add country
        </button>
      </div>
      <div id="searchbar-ctn">
        <hr />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {wishlist.map((eachwishlist) => {
          return (
            <WishListCard key={eachwishlist.id} eachwishlist={eachwishlist} />
          );
        })}
      </div>
    </div>
  );
}

export default WishList;
