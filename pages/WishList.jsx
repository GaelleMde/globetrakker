import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import VisitedCountriesCard from "../components/VisitedCountriesCard";
import { useNavigate } from "react-router-dom";
import WishListCard from "../components/WishListCard";

function WishList() {
  const navigate = useNavigate();

  const [wishlist, setAllwishlist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/travelLogs?isVisited=false&_expand=country")
      .then((response) => {
        //console.log(response);
        setAllwishlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (wishlist === null) {
    return <h3> Your wishlist is emptier than a desert road 🌵🥲</h3>;
  }

  return (
    <div id="top-banner">
      <div id="visited-btn">
        <h3>Wishlist ✨</h3>
        <button id="btn-add" onClick={() => navigate("/travelLogs/addpage")}>
          +
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
