import { FETCH_LOCATION } from "../actions/types";

export default function (state = { search: null, coordinates: {} }, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        search: action.payload.search,
        coordinates: action.payload.coordinates,
      };

    default:
      return state;
  }
}
