import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFood } from "../redux/actions/food";
import InputForm from "../components/InputForm";
import DisplayFood from "../components/Foods/DisplayFood";
import AddedList from "../components/AddedList";

class SearchFood extends Component {
  state = {
    foodItem: "",
    addeditems: [],
  };

  handleChange = (e) => {
    this.setState({ foodItem: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    const lookup = this.state.foodItem.split(" ").join("%20");
    this.props.fetchFood(lookup);
    this.setState({ foodItem: "" });
  };

  addToLocalAddedList = (item) => {
    this.setState({ addeditems: [...this.state.addeditems, item] });
  };

  render() {
    console.dir(this.state.addeditems);
    return (
      <div>
        <h1>Search Food</h1>
        <InputForm
          foodItem={this.state.foodItem}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        />
        <AddedList addeditems={this.state.addeditems} />
        <DisplayFood addToLocalAddedList={this.addToLocalAddedList} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFood: (lookup) => dispatch(fetchFood(lookup)),
  };
};

export default connect(undefined, mapDispatchToProps)(SearchFood);

//probably need some kind of list to display adding of food and a button that programmatically routes user to summary page
