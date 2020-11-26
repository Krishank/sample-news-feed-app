import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { getForMattedURL } from "../utils"
import { content } from "../locale"
import { NewsFeedStyles } from "./NewsFeedStyles"
/**
 * @desc News Feed component can use to render single News Feed
 * this component manages its own style
 */

const NewsFeed = React.memo((props) => {
  console.log(`The prop data in NewsFeed is ${JSON.stringify(props)}`)
  const { points, num_comments, author, title, url, created_at_i } = props.feed
  const { index, updateVotes, hideNews } = props
  const {
    padding10,
    paddingRight0,
    sortArrow,
    paddingLeft10,
    fontSize14,
    urlStyles,
    colorBlack,
    time,
    hideNewsLink,
    hideNewsLinkWrapper,
    pointer,
  } = NewsFeedStyles

  return (
    <Fragment>
      <tr
        key={index}
        style={{
          fontSize: "10px",
          backgroundColor: index % 2 == 0 ? "#e6e6df" : "#f6f6ef",
        }}
      >
        <td style={padding10}>{points}</td>
        <td style={paddingRight0}>{num_comments}</td>
        <td style={pointer} onClick={() => updateVotes(created_at_i)}>
          <i
            style={sortArrow}
            className="fa fa-sort-asc"
            aria-hidden="true"
          ></i>
        </td>
        <td style={paddingLeft10}>
          <span style={fontSize14}>{title}</span>
          <span style={urlStyles}>
            ({getForMattedURL(url)}) {content.labels.newsFeed.by}
          </span>
          <span style={colorBlack}>{author}</span>
          <span style={time}>
            {Math.abs(
              new Date().getHours() - new Date(created_at_i).getHours()
            )}{" "}
            {content.labels.newsFeed.hourAgo}
          </span>
          <span style={hideNewsLinkWrapper}>
            [{" "}
            <span style={hideNewsLink} onClick={() => hideNews(created_at_i)}>
              {content.labels.newsFeed.hide}
            </span>{" "}
            ]
          </span>
        </td>
      </tr>
    </Fragment>
  )
})

NewsFeed.propTypes = {
  feed: PropTypes.shape({
    points: PropTypes.string.isRequired,
    num_comments: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    created_at_i: PropTypes.number.isRequired,
  }).isRequired,
  updateVotes: PropTypes.func.isRequired,
  hideNews: PropTypes.func.isRequired,
}
export default NewsFeed
