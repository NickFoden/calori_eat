import React from "react";
import { Link } from "react-router-dom";

const MealItem = ({ calories, foodItem, uuid }) => (
  <div>
    <Link to={`/edit/${uuid}`}>
      <h2>{foodItem}</h2>
    </Link>
    <h3>{calories}</h3>
  </div>
);

export default MealItem;
