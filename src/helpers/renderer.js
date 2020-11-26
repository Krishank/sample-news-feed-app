import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { renderRoutes } from "react-router-config"
import Routes from "../client/Routes"

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  return `
        <!DOCTYPE html>
        <html lang="en" xml:lang="en">
            <head>
              <title>News Feeds App</title>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.client.js"></script>
            </body>
        </html>
    `
}
