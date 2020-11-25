import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  try {
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
      route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
      res.send(renderer(req, store));
    });
  } catch (error) {
    console.log(`There is an error in the app ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Please find your app running on ${port}`);
});
