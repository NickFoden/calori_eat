import React from "react";

const InputForm = ({ foodItem, handleSearch, handleChange }) => (
  <form>
    <input
      type="text"
      placeholder="enter food item here"
      value={foodItem}
      onChange={handleChange}
    ></input>
    <button type="submit" onClick={handleSearch}>
      Find Food
    </button>
  </form>
);

export default InputForm;
