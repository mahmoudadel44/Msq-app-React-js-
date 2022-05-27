import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import RootReducer from "./reducers/index";

let middleware = [Thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
