# News Feeds App

## Working App

## Prerequisite

```

    Node Js (>= v8.12.0)
    NPM (>=6.4.1)
    git (>=2.15.2)
    yarn (>=1.12.3) [Optional]

```

- To get all News Feeds a mock API is hosted in (https://hn.algolia.com/api/v1/search?tags=front_page)
- Recommended Editor and settings: Visual Studio Code settings [Click Here](https://github.com/Krishank/ecommerce-react-example/blob/master/docs/DevelopmentTools.md)

## Project Setup

```
git clone https://github.com/Krishank/sample-news-feed-app.git
cd sample-news-feed-app
Yarn install or npm install
yarn start or npm start

// See your App on
http://localhost:3000
```

## Features

This App is using multiple dev tools like husky, prettier, ESlint to insure code quality before user commit the code It is a Single page React App which has multiple news feeds with upvote and load more functionality

```

"scripts": {

"start": "run-p dev:*",

"dev:start": "nodemon --watch build --exec \"node build/bundle.js\"",

"dev:build-server": "webpack --config webpack.server.js --watch",

"dev:build-client": "webpack --config webpack.client.js --watch",

"lint": "eslint src/**/*.js src/**/*.js"

},

```

## Technology Stack

- [ReactJs](https://reactjs.org/)
- [Redux (State Management)](https://redux.js.org/introduction/getting-started)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [YARN / NPM for package Dependencies](https://npmjs.com)
- [ES6](http://es6-features.org/)
- [Webpack 4](https://webpack.js.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## App Structure

This App is based on Dumb and Container component where container is responsible for getting data connect to store and pass it to dumb component.

I could have used the ATOMIC pattern with storybook but the APP was small and time was less but I did used it in my other project for reference https://github.com/Krishank/ecommerce-react-example

Please find the App Structure Below

```



src

├── client

│ ├── ErrorBoundary.js

│ ├── Routes.js

│ ├── actions

│ │ └── index.js

│ ├── client.js

│ ├── components

│ │ ├── LoadMoreNewsFeeds.js

│ │ ├── NewsFeed.js

│ │ ├── NewsFeedStyles.js

│ │ └── NewsFeeds.js

│ ├── containers

│ │ ├── NewsFeedsContainer.js

│ │ └── NewsFeedsContainerStyles.js

│ ├── locale

│ │ └── index.js

│ ├── reducers

│ │ ├── feedsReducers.js

│ │ └── index.js

│ └── utils

│ └── index.js

├── helpers

│ ├── createStore.js

│ └── renderer.js

└── index.js



```

## React.js

A Popular java script library for declarative and component based development.

## Redux

A predictable state container for JavaScript apps.

- Predictable: Redux helps you write applications that behave consistently
- Centralized: Single Source of truth
- Debuggable: There are various tools available to debug react redux application but it is recomanded to use Redux Dev Tool it provides various rich features like track actions, and live state of redux store
- Flexible: it can be used with any other UI framework

## Working App View

Please find the working App View below

## News Feeds View

![NewsFeedLoadingView](https://raw.githubusercontent.com/Krishank/sample-news-feed-app/main/news-feeds.png)

## New Feeds Loading View

![NewsFeedLoadingView](https://raw.githubusercontent.com/Krishank/sample-news-feed-app/main/load-news-feeds.png)

## New Feeds Error View

![NewsFeedLoadingView](https://raw.githubusercontent.com/Krishank/sample-news-feed-app/main/error-case.png)

# TODO's

1. Pipeline and deploy
2. Graph

## Improvement or other approaches

1. Could have used styled component (Had Less time but in my other project I have used it https://github.com/Krishank/ecommerce-react-example/tree/master/src/app/components/atoms)
2. Could have used ATOMIC Pattern (Had Less time but in my other project I have used it https://github.com/Krishank/ecommerce-react-example/tree/master/src/app/components)
3. Could have used storybook for all atoms make a DSL (This is small project so no need of that)
4. Could have used TS as My current project is already using it.
5. I could have used Next JS as its looking more promising but due to the lack of time I choose a simple setup
