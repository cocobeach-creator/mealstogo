import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export const persistor = persistStore(store);
