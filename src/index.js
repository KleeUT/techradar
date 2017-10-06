import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import { Provider } from "react-redux";
import { Route } from "react-router";
import createHistory from "history/createBrowserHistory";

import RadarItemReducer from "./reducers/RadarItemReducer";
import LoggingReducer from "./reducers/LoggingReducer";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers(
    {
      radarItem: RadarItemReducer,
      LoggingReducer,
      router: routerReducer
    },
    applyMiddleware(middleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
