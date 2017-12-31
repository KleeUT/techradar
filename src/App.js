import "./App.css";

import styled from "styled-components";
import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import createHistory from "history/createBrowserHistory";

import { loadState, saveState } from "./util/LocalStorageStatePersister";

import RadarDisplay from "./RadarDisplay";
import ListDisplay from "./ListDisplay";
import { AddItem, AddItemFormReducer } from "./addItem";
import ItemDetails from "./ItemDetails";

import Dashboard from "./Dashboard";
import { NewRadarReducer } from "./newRadarForm";
import NavBarWrapper from "./NavBarWrapper";
import NeedsARadarSelectedWrapper from "./components/NeedsARadarSelectedWrapper";
import NeedsToBeLoggedIn from "./login/NeedsToBeLoggedIn";

import LoggingReducer from "./reducers/LoggingReducer";
import EditItemFormReducer from "./reducers/EditItemFormReducer";
import HistoryReducer from "./reducers/HistoryReducer";
import RadarsReducer from "./reducers/RadarsReducer";
import CurrentRadarReducer from "./reducers/CurrentRadarReducer";
import LoginReducer from "./login/LoginReducer";
import LoginFormReducer from "./login/LoginFormReducer";

const history = createHistory();
const middleware = routerMiddleware(history);

const previousState = loadState();

const store = createStore(
  combineReducers({
    LoggingReducer,
    router: routerReducer,

    addItemForm: AddItemFormReducer,
    editItemForm: EditItemFormReducer,
    loginForm: LoginFormReducer,

    login: LoginReducer,
    history: HistoryReducer,
    radars: RadarsReducer,
    currentRadar: CurrentRadarReducer,
    newRadarForm: NewRadarReducer
  }),
  previousState,
  applyMiddleware(middleware)
);

store.subscribe(() => {
  saveState(store.getState());
});

const ContentContainer = styled.div`
  padding: 1rem;
`;

const Main = styled.div`
  margin: auto;
  width: 960px;
  font-size: 18px;
  background-color: #fbfefb;
  min-height: 100%;
  border: 2px solid #d6f5d6;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

class App extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Main>
            <NavBarWrapper>
              <ContentContainer>
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={() => (
                      <NeedsToBeLoggedIn>
                        <Dashboard />
                      </NeedsToBeLoggedIn>
                    )}
                  />
                  <Route
                    path="/radar"
                    component={() => (
                      <NeedsARadarSelectedWrapper>
                        <RadarDisplay />
                      </NeedsARadarSelectedWrapper>
                    )}
                  />
                  <Route
                    path="/list"
                    component={() => (
                      <NeedsARadarSelectedWrapper>
                        <ListDisplay />
                      </NeedsARadarSelectedWrapper>
                    )}
                  />
                  <Route
                    path="/add-item"
                    component={() => (
                      <NeedsARadarSelectedWrapper>
                        <AddItem />
                      </NeedsARadarSelectedWrapper>
                    )}
                  />
                  <Route
                    path="/item-details"
                    component={() => (
                      <NeedsARadarSelectedWrapper>
                        <ItemDetails />
                      </NeedsARadarSelectedWrapper>
                    )}
                  />
                </Switch>
              </ContentContainer>
            </NavBarWrapper>
          </Main>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
