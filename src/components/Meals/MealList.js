import React from "react";
import MealItem from "./MealItem";

const MealList = ({ meals = [] }) => {
  return (
    <div>
      {meals.length === 0 ? (
        <div>
          <span>No Meals</span>
        </div>
      ) : (
        meals.map((meal) => <MealItem key={meal.uuid} {...meal} />)
      )}
    </div>
  );
};

export default MealList;
