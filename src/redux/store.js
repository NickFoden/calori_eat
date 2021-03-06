import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import foodReducer from "./reducers/foodReducer";
import mealReducer from "./reducers/mealReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      food: foodReducer,
      meals: mealReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
