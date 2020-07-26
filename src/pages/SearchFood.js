import React, { Component } from "react";
import InputForm from "../components/InputForm";
import DisplayFood from "../components/Foods/DisplayFood";
import AddedList from "../components/AddedList";

class SearchFood extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Search Food</h1>
        <InputForm />
        <DisplayFood />
        <div>
          <AddedList />
        </div>
      </div>
    );
  }
}

export default SearchFood;

//probably need some kind of list to display adding of food and a button that programmatically routes user to summary page
