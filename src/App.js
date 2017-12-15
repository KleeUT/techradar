import React, { Component } from "react";
import styled from "styled-components";

import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import createHistory from "history/createBrowserHistory";

import "./App.css";

import RadarDisplay from "./RadarDisplay";
import ListDisplay from "./ListDisplay";
import AddItem from "./AddItem";
import ItemDetails from "./ItemDetails";
import Dashboard from "./Dashboard";
import NavBarWrapper from "./NavBarWrapper";
import NeedsARadarSelectedWrapper
  from "./components/NeedsARadarSelectedWrapper";

import RadarItemReducer from "./reducers/RadarItemReducer";
import LoggingReducer from "./reducers/LoggingReducer";
import AddItemFormReducer from "./reducers/AddItemFormReducer";
import EditItemFormReducer from "./reducers/EditItemFormReducer";
import HistoryReducer from "./reducers/HistoryReducer";
import RadarsReducer from "./reducers/RadarsReducer";
import CurrentRadarReducer from "./reducers/CurrentRadarReducer";
const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    LoggingReducer,
    router: routerReducer,

    addItemForm: AddItemFormReducer,
    editItemForm: EditItemFormReducer,

    history: HistoryReducer,
    radars: RadarsReducer,
    currentRadar: CurrentRadarReducer
  }),
  applyMiddleware(middleware)
);

const ContentContainer = styled.div`
padding:1rem;
`;

const Main = styled.div`
margin:auto;
width:960px;
font-size:18px;
background-color:#fbfefb;
min-height:100%;
border: 2px solid #d6f5d6;
@media (max-width: 960px) {
		width:100%;
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
                  <Route exact path="/" component={Dashboard} />
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
