import { combineReducers } from "redux";
import restaurantsReducer from "./reducers/restaurantsReducer";
import locationReducer from "./reducers/locationReducer";

export default combineReducers({
  restaurants: restaurantsReducer,
  location: locationReducer,
});
