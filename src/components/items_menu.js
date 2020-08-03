import React from "react";
import "../styles/menu.css";

const item_menu = props => {
  return (
    <div className="container_item_menu">
      <div className="item_menu">
        <h3 className="title_food">{props.titleItem}</h3>
        <p className="food_description">{props.description}</p>
      </div>
      <div className="container_price">
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default item_menu;
