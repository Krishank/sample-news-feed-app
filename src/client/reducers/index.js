import { combineReducers } from "redux";
import feedsReducers from "./feedsReducers";

export default combineReducers({
  tgaData: feedsReducers,
});
