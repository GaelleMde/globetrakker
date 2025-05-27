import React from "react";
import { Link } from "react-router-dom";

function WishListCard(props) {
  console.log(props);

  return (
    <div id="visited-card">
      <Link to={`/wishlist/${props.eachwishlist.id}`}>
        <img
          src={props.eachwishlist.country.flag}
          alt={`Flag of ${props.eachwishlist.country.name}`}
        />
        <h4>{props.eachwishlist.country.name}</h4>
      </Link>
    </div>
  );
}

export default WishListCard;
