import {
  locationRequest,
  locationTransform,
} from "../../services/location/location.service";
import {
  restaurantsRequest,
  transformRestaurants,
} from "../../services/restaurants/mock/restaurants.service";
import { FETCH_RESTAURANTS, FETCH_LOCATION } from "./types";

export const fetchRestaurants = (location) => async (dispatch) => {
  const res = await restaurantsRequest(location);
  const res2 = await transformRestaurants(res.results);
  dispatch({ type: FETCH_RESTAURANTS, payload: res2 });
};

export const fetchLocation = (searchTerm) => async (dispatch) => {
  const res = await locationRequest(searchTerm);
  const res2 = await locationTransform(res);
  dispatch({ type: FETCH_LOCATION, payload: res2 });
};
