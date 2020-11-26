import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NewsFeed from "./NewsFeed";

/**
 * @desc News Feeds component is responsible for rendering multiple News Feeds
 * this component manages its own style to ensure all News will reder as expected layout
 */

const genrateNewsFeeds = (feeds, updateVotes, hideNews) => {
  console.log(`Inside NewsFeeds feeds are ${JSON.stringify(feeds)}`);
  return (
    feeds &&
    feeds.map((feed) => {
      const { index } = feed;
      return (
        <NewsFeed
          index={index}
          feed={feed}
          updateVotes={updateVotes}
          hideNews={hideNews}
        />
      );
    })
  );
};

const NewsFeeds = React.memo((props) => {
  const { feeds } = props;
  const { updateVotes, hideNews } = props;
  return <Fragment>{genrateNewsFeeds(feeds, updateVotes, hideNews)}</Fragment>;
});

NewsFeeds.propTypes = {
  feeds: PropTypes.arrayOf(
    PropTypes.shape({
      points: PropTypes.string.isRequired,
      num_comments: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      created_at_i: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateVotes: PropTypes.func.isRequired,
  hideNews: PropTypes.func.isRequired,
};

export default NewsFeeds;
