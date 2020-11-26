import axios from "axios";

// TODO: Move this to constants
export const FETCH_FEEDS = "fetch_feeds";
export const UPDATE_FEEDS = "update_feeds";
export const LOAD_MORE_FEEDS = "load_more_feeds";
export const UPDATE_FEED_VOTE = "update_feed_vote";

// TODO: move it in .env and switch it as per the evvironment
export const api = "https://hn.algolia.com/api/v1/search?tags=front_page";

// TODO: Segrigate the API code
export const fetchFeeds = () => async (dispatch) => {
  const res = await axios.get(api);
  dispatch({
    type: FETCH_FEEDS,
    payload: res,
  });
};

export const updateFeeds = (created_at_i) => async (dispatch) => {
  dispatch({
    type: UPDATE_FEEDS,
    created_at_i: created_at_i,
  });
};

export const updatehFeedVote = (created_at_i) => async (dispatch) => {
  dispatch({
    type: UPDATE_FEED_VOTE,
    created_at_i: created_at_i,
  });
};

export const loadMoreFeeds = () => async (dispatch) => {
  const res = await axios.get(api);
  dispatch({
    type: LOAD_MORE_FEEDS,
    payload: res,
  });
};
