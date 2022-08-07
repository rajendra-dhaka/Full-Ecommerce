import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { displayreducer } from "./displayreducer";

const rootreducer = combineReducers({
  cartreducer,
  displayreducer,
});

export default rootreducer;
