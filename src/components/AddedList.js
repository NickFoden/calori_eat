import React from "react";
import { connect } from "react-redux";

const AddedList = ({ meals = [] }) => (
  <div>
    {meals.map((meal) => (
      <li
        key={meal.uuid}
      >{`${meal.foodItem} added, calories:${meal.calories}`}</li>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  meals: state.meals,
});

export default connect(mapStateToProps)(AddedList);
