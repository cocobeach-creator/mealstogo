import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

import restaurantsReducer from "./reducers/restaurantsReducer";
import locationReducer from "./reducers/locationReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  location: locationReducer,
  favorites: favoritesReducer,
});

export default persistReducer(persistConfig, rootReducer);
