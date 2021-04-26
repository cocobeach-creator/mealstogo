import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";
import { addRestaurant, deleteRestaurant } from "../actions/utils";

const initialState = {
  favorites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        favorites: addRestaurant(state.favorites, action.payload),
      };
    case DELETE_FAVORITE:
      return {
        favorites: deleteRestaurant(state.favorites, action.payload),
      };
    default:
      return state;
  }
}
