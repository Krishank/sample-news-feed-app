import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NewsFeed from "./NewsFeed";
import { content } from "../locale";
import { getBottomColor } from "../utils";
/**
 * @desc Load More Feeds component is responsible for hitting an API and render more feeds
 */

const LoadMoreNewsFeeds = React.memo((props) => {
  const { loadMoreFeeds, dataLength } = props;

  return (
    <div
      style={{ backgroundColor: getBottomColor(dataLength), padding: "6px" }}
    >
      <span
        onClick={() => loadMoreFeeds()}
        style={{
          fontSize: "14px",
          color: "#ff6600",
          cursor: "pointer",
          paddingLeft: "30px",
        }}
      >
        {content.labels.newsFeedsContainer.more}
      </span>
    </div>
  );
});

LoadMoreNewsFeeds.propTypes = {
  loadMoreFeeds: PropTypes.func.isRequired,
  dataLength: PropTypes.number.isRequired,
};

export default LoadMoreNewsFeeds;
