import { shuffle } from "lodash";
import {
  UPDATE_FEEDS,
  FETCH_FEEDS,
  LOAD_MORE_FEEDS,
  UPDATE_FEED_VOTE,
} from "../actions";

// TODO: not able to find loadmore in https://hn.algolia.com/api

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_FEEDS:
      return action.payload.data.hits;
    case UPDATE_FEEDS:
      return state.filter(
        (result) => result.created_at_i !== action.created_at_i
      );
    case LOAD_MORE_FEEDS:
      return shuffle(action.payload.data.hits);
    case UPDATE_FEED_VOTE:
      return state.map((item) => {
        if (item.created_at_i === action.created_at_i) {
          item.num_comments = item.num_comments + 1;
        }
        return item;
      });
    default:
      return state;
  }
};
