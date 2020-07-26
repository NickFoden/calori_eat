import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import EditMealPage from "./pages/EditMealPage";
import MealSummary from "./pages/MealSummary";
import SearchFood from "./pages/SearchFood";

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/search" component={SearchFood} />
      <Route path="/edit/:uuid" component={EditMealPage} />
      <Route exact path="/" component={MealSummary} />
      {/*<Route component={NotFoundPage} /> */}
    </Switch>
  </Router>
);

export default App;
