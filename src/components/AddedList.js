import React from "react";

const AddedList = ({ addeditems = [] }) => (
  <ul>
    {addeditems.map((meal) => (
      <li
        key={meal.foodId}
      >{`${meal.foodItem} added, calories:${meal.calories}`}</li>
    ))}
  </ul>
);

export default AddedList;
