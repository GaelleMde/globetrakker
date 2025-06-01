import React from "react";
import { useNavigate } from "react-router-dom";

function WishListCard(props) {
  console.log(props);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/wishlist/${props.eachwishlist.id}`);
  };
  return (
    <div id="visited-card" onClick={handleClick}>
      <div id="text-card2">
        <img
          src={props.eachwishlist.country.flag}
          alt={`Flag of ${props.eachwishlist.country.name}`}
        />
        <div id="text-card">
          <h4>{props.eachwishlist.country.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default WishListCard;
