import React, { Fragment, PureComponent } from "react"
import { connect } from "react-redux"
import {
  fetchFeeds,
  updateFeeds,
  loadMoreFeeds,
  updatehFeedVote,
} from "../actions"
import NewsFeeds from "../components/NewsFeeds"
import LoadMoreNewsFeeds from "../components/LoadMoreNewsFeeds"
import { content } from "../locale"
import Loader from "react-loader-spinner"

import { ErrorBoundary } from "../ErrorBoundary"
import { NewsFeedsContainerStyles } from "./NewsFeedsContainerStyles"
// TODO: Can add skeleton or loader to remove flicker will do if time left

class NewsFeedsContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchFeeds()
  }

  renderHits() {
    return this.props.tgaData.map((hit) => {
      return <li key={hit.created_at_i}>{hit.title}</li>
    })
  }
  hideNews(id) {
    this.props.updateFeeds(id)
  }

  render() {
    // TODO: This could be removed can move logic more to css with nth-child wrong decision to try css in JS
    // could use styled component or normal sass with BEM

    // TODO: Move some styling vars in constants and use it

    const bottomColor =
      this.props.tgaData.length % 2 == 0 ? "#e6e6df" : "#f6f6ef"
    const { tgaData } = this.props
    const {
      margin50,
      header,
      fontSize10,
      fontSize14,
      topLabel,
      divider,
      newLabel,
      table,
      grid,
      loaderWrapper,
      pointer,
    } = NewsFeedsContainerStyles
    const isLoading = tgaData.length === 0 ? true : false
    return (
      <Fragment>
        {isLoading && (
          <div style={loaderWrapper}>
            <Loader
              type="Puff"
              color="#ff6600"
              height={100}
              width={100}
              timeout={300000}
            />
          </div>
        )}
        {!isLoading && (
          <div style={margin50}>
            <div style={header}>
              <span style={fontSize10}>
                <i
                  style={fontSize14}
                  className="fa fa-jpy"
                  aria-hidden="true"
                ></i>
              </span>
              <span style={topLabel}>
                {content.labels.newsFeedsContainer.top}
              </span>
              <span style={divider}></span>
              <span style={newLabel}>
                {content.labels.newsFeedsContainer.new}
              </span>
            </div>
            <table id="feeds" style={table}>
              <tbody style={grid}>
                <ErrorBoundary erroMessage="Failed in News Feeds">
                  {tgaData.length > 0 && (
                    <NewsFeeds
                      feeds={tgaData}
                      updateVotes={(id) => this.props.updatehFeedVote(id)}
                      hideNews={(id) => this.props.updateFeeds(id)}
                    />
                  )}
                </ErrorBoundary>
              </tbody>
            </table>
            <ErrorBoundary erroMessage="Failed in Load More Feeds">
              <LoadMoreNewsFeeds
                loadMoreFeeds={() => this.props.loadMoreFeeds()}
                dataLength={tgaData.length}
              />
            </ErrorBoundary>
          </div>
        )}
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    tgaData: state.tgaData,
  }
}

function loadData(store) {
  return store.dispatch(fetchFeeds())
}

export { loadData }

export default connect(mapStateToProps, {
  fetchFeeds,
  updateFeeds,
  loadMoreFeeds,
  updatehFeedVote,
})(NewsFeedsContainer)
