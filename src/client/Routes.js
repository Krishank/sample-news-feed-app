import NewsFeedsContainer, { loadData } from "./containers/NewsFeedsContainer";

export default [
  {
    path: "/",
    component: NewsFeedsContainer,
    exact: true,
  },
  {
    loadData,
    path: "/hits",
    component: NewsFeedsContainer,
    exact: true,
  },
];
